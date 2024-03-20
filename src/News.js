import React, { useState, useEffect } from 'react';
import './News.css';
const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [newsStatus, setnewsStatus] = useState([]);
const test = {"status":"success","totalResults":6,"results":[{"article_id":"17e023d51f52bb73d0eaf5b336a81774","title":"Nykode Therapeutics Announces Advances in the Inverse Vaccine Platform With the Potential to Treat Autoimmune Diseases","link":"https://www.globenewswire.com/fr/news-release/2024/03/19/2848271/0/en/Nykode-Therapeutics-Announces-Advances-in-the-Inverse-Vaccine-Platform-With-the-Potential-to-Treat-Autoimmune-Diseases.html","keywords":["oslo:nykd","no0010714785"],"creator":null,"video_url":null,"description":"OSLO, Norway, March 19, 2024 (GLOBE NEWSWIRE) -- Nykode Therapeutics ASA (OSE: NYKD), a clinical-stage biopharmaceutical company dedicated to the discovery and development of novel immunotherapies, today announced key updates of the inverse vaccine platform with the potential to treat autoimmune diseases at the 7th Antigen-Specific Immune Tolerance Drug Development Summit in Boston.","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2024-03-19 06:00:00","image_url":null,"source_id":"globenewswire_fr","source_url":"https://www.globenewswire.com/fr","source_icon":"https://i.bytvi.com/domain_icons/globenewswire_fr.jpg","source_priority":21323,"country":["france"],"category":["business"],"language":"chinese","ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS"},{"article_id":"456926eccc685fad64be27c918b7261c","title":"赴美建廠挑戰大？台積電、英特爾供應商傳推遲進度","link":"https://technews.tw/2024/03/19/building-a-factory-in-the-us-is-challenging/","keywords":["半導體","晶圓","科技政策","亞利桑那州","台積電","晶片法案","英特爾"],"creator":["MoneyDJ"],"video_url":null,"description":"台積電、英特爾（Intel Corp.）至少有五家供應商都決定延後亞利桑那州的建廠計畫，暗示重建美國晶片供應鏈 […]","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2024-03-19 03:40:06","image_url":"https://img.technews.tw/wp-content/uploads/2022/02/08161358/shutterstock_1858575754-624x416.jpg","source_id":"technews","source_url":"https://technews.tw","source_icon":null,"source_priority":613545,"country":["taiwan"],"category":["technology"],"language":"chinese","ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS"},{"article_id":"6b3012ac327a31d62bbcd8cd1f1b23e0","title":"大学生制导盲机器人 助视障者安全出行","link":"https://www.enanyang.my/%E4%BC%98%E7%94%9F%E6%B4%BB/%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%B6%E5%AF%BC%E7%9B%B2%E6%9C%BA%E5%99%A8%E4%BA%BA-%E5%8A%A9%E8%A7%86%E9%9A%9C%E8%80%85%E5%AE%89%E5%85%A8%E5%87%BA%E8%A1%8C","keywords":["优生活"],"creator":["bongst"],"video_url":null,"description":"对许多人来说，“大学”是一个充满机遇的平台，让他们能在课外活动、社会实践或科研创新等方面取得不凡的成绩，而王宝玉就是一个鲜活的例子。","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2024-03-19 01:00:00","image_url":"https://www.enanyang.my/sites/default/files/styles/media_image/public/2024-03/240307bychb06.jpg?itok=CM0CXrMb","source_id":"enanyang","source_url":"https://www.enanyang.my","source_icon":null,"source_priority":1373909,"country":["malaysia"],"category":["top"],"language":"chinese","ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS"},{"article_id":"4cd1e0b587fea17d5b9cb6c4239894b2","title":"大学生制导盲机器人 助视障者安全出行","link":"http://www.enanyang.my/%E4%BC%98%E7%94%9F%E6%B4%BB/%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%B6%E5%AF%BC%E7%9B%B2%E6%9C%BA%E5%99%A8%E4%BA%BA-%E5%8A%A9%E8%A7%86%E9%9A%9C%E8%80%85%E5%AE%89%E5%85%A8%E5%87%BA%E8%A1%8C","keywords":["优生活"],"creator":["bongst"],"video_url":null,"description":"对许多人来说，“大学”是一个充满机遇的平台，让他们能在课外活动、社会实践或科研创新等方面取得不凡的成绩，而王宝玉就是一个鲜活的例子。","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2024-03-19 01:00:00","image_url":"https://www.enanyang.my/sites/default/files/styles/media_image/public/2024-03/240307bychb06.jpg?itok=CM0CXrMb","source_id":"enanyang","source_url":"https://www.enanyang.my","source_icon":null,"source_priority":1373909,"country":["malaysia"],"category":["top"],"language":"chinese","ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS"},{"article_id":"6f52ab6c0704ef749ece4ea250c3ced2","title":"Carina Biotech to Present Three Poster Presentations at AACR Annual Meeting 2024","link":"https://www.globenewswire.com/fr/news-release/2024/03/18/2848138/0/en/Carina-Biotech-to-Present-Three-Poster-Presentations-at-AACR-Annual-Meeting-2024.html","keywords":null,"creator":null,"video_url":null,"description":"ADELAIDE, Australia, March 18, 2024 (GLOBE NEWSWIRE) -- Carina Biotech Limited (Carina), a clinical stage cell therapy immuno-oncology company, today announced three poster presentations from studies of its LGR5-targeting CAR-T program in colorectal cancer and ovarian cancer at the American Association for Cancer Research (AACR) Annual Meeting 2024 that will take place in San Diego, California, on April 5-10.","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2024-03-18 20:01:00","image_url":null,"source_id":"globenewswire_fr","source_url":"https://www.globenewswire.com/fr","source_icon":"https://i.bytvi.com/domain_icons/globenewswire_fr.jpg","source_priority":21323,"country":["france"],"category":["business"],"language":"chinese","ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS"},{"article_id":"becc59d90a888063073bf669c36c9871","title":"《TAIPEI TIMES》 TSMC to build two chip packaging fabs in Chiayi","link":"https://news.ltn.com.tw/news/focus/breakingnews/4612031","keywords":null,"creator":null,"video_url":null,"description":"By Lisa Wang / Staff reporter Taiwan Semiconductor Manufacturing Co （TSMC, 台積電） plans to build tw...…","content":"ONLY AVAILABLE IN PAID PLANS","pubDate":"2024-03-18 19:00:00","image_url":"https://img.ltn.com.tw/Upload/news/600/2024/03/18/phpKpV0HD.jpg","source_id":"ltn","source_url":"https://news.ltn.com.tw","source_icon":"https://i.bytvi.com/domain_icons/ltn.png","source_priority":38512,"country":["taiwan"],"category":["top"],"language":"chinese","ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS","ai_region":"ONLY AVAILABLE IN CORPORATE PLANS"}],"nextPage":null};
//   useEffect(() => {
    // Assuming the JSON data is stored in a variable named jsonData
//     fetch('https://newsdata.io/api/1/news?apikey=pub_40426719689739328bb44d6991e976502f868&language=zh&category=technology ')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         if(data.status === "success") {
//           setnewsStatus("success");
//           setNewsData(data.results);
//         } else {
//           setnewsStatus("success");
//           setNewsData(test.results);
//         }
        
        
        
//     })
//     .catch(error => console.error('Error:', error));
//   }, []);
useEffect(() => {
          setnewsStatus("success");
          setNewsData(test.results);
        }, []);
  console.log(newsData);
  if(newsStatus === "success" ) {
    
    return (
        <>
        <div id='section3' className='container'>
        {newsData.map((news, index) => (
            <div id='section3' className='Newscontainer' key={index}>
              <h3>{news.title}</h3>
              <img src={news.image_url} alt={news.title} />
              <p>{news.description}</p>
              <a href={news.link}>Read more</a>
            </div>
          ))}
        </div>
        </>
      );
  } else {  
    return <div id='section3' className='Newscontainer'>NO message</div>;
}

};

export default News;