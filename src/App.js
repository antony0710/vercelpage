import './App.css';
import DateTime from './DateTime.js';
import Weather from './Weather.js';
import Notes from './Notes.js';

function App() {
  return (
    <>
                  <div className="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" textAnchor="middle">
			Antony
		</text>
	</svg>
</div>
    <header>

        <h1>My Personal Dashboard</h1>
        <h2> user name, and icon  </h2>
        <h2 id= "username"> Username</h2>
        <div>
            <h2 id = "date_time"> <DateTime /> </h2>
        </div>
        <h2 id = "temperature"> <Weather /> </h2>
    </header>
    <main>
    <section id="section1" className="container">
            <h2>Calendar</h2>
            <p>Content for section 1...</p>
        </section>
        <section id="section2" className="container">
            <h2>Notifications</h2>
            <p>Content for section 2...</p>
        </section>
        <section id="section3" className="container">
            <h2>LINKS and Bookmarks</h2>
            <p>Content for section 3...</p>
        </section>
        <section id="section3" className="container">
            <h2>TO-DO Lists</h2>
            <p>Content for section 3...</p>
        </section>

        <section id="section3" className="container">
            <h2>News</h2>
            <p>Content for section 3...</p>
        </section>

        <section id="iot" className="container">
            <h2>IoT</h2>
            <p>Content for section 3...</p>
        </section>
        
        <section id="section3" className="container">
            <h2>Transportabtion</h2>
            <p>Content for section 3...</p>
        </section>

        <section id="section3" className="container">
            <h2>Movie Suggestion</h2>
            <p>Content for section 3...</p>
        </section>

   
            <section id="notes" className="container">
              <><Notes/></>
                </section>
              
      </main>
    </>
  );
}

export default App;
