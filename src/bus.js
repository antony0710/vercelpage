import React, {useState, useEffect} from "react";
import "./bus.css";
import userEvent from "@testing-library/user-event";

const Bus = () => {
    const [data, setRoutes] = useState([]);
    const [search, setSearch] = useState('');
    const [StopList, setStopList] = useState([]);
    
    useEffect(() => {
        fetchRoutes().then(data => setRoutes(data));
    }, []);

    const results = !search ? [] : data.filter(item => item.route.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        if (results.length > 0) {
            fetchStopList((results[0].route), 0).then(StopList => setStopList(StopList));
        }
    }, [results[0]]);

    const [stopData, setStopData] = useState([]);

    useEffect(() => {
        const promises = StopList.map(item => fetchStopTcName(item.stop));
        Promise.all(promises).then(stopData => setStopData(stopData));
    }, [StopList]);
    const stopResults = !search ? [] : StopList.filter(item => item.route.toLowerCase().includes(search.toLowerCase()));

    const [selectedRoute, setselectedRoute] = useState('');
    const [selectedStop, setselectedStop] = useState('');
    console.log(selectedStop);
    useEffect(() => {
        if (StopList.length > 0) {
            setselectedRoute(0);
        }
    }, [StopList]);

    useEffect(() => {
        if (stopData.length > 0) {
            setselectedStop(0);
        }
    }
    , [stopData]);

    const [ETA, setETA] = useState([]);

    useEffect(() => {
        if(stopData[selectedStop]?.stop && StopList[selectedRoute]?.route){
            fetchETA(String(stopData[selectedStop]?.stop) ,String( StopList[selectedRoute]?.route) ).then(ETA => setETA(ETA));
        }
    }, [stopData, StopList, selectedRoute, selectedStop]);

    const [duplicatedFunction, setDuplicatedFunction] = useState(null);
    console.log(stopData? stopData: "No Data");

    return (
        <>
        <input
            className="input-field"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
        />
        <select className="select-field">
            {results.map((result, index) => (
            <option key={index} value={result.route}>
                {result.route} - {result.orig_en} to {result.dest_en}
            </option>
            ))}
        </select>
        <div className="select-container">
            <select className="select-field" value={stopResults[selectedRoute]?.route} onChange={e => setselectedRoute(e.target.selectedIndex)}>
            {stopResults.map((stops, index) => (
                <option key={index} value={stops.route}>
                {stops.route} - {stops.stop}
                </option>
            ))}
            </select>
        </div>

        <div className="select-container">
            <select className="select-field" onChange={e => setselectedStop(e.target.selectedIndex)}>
            {stopData.map((stopname, index) => (
                <option key={index} value={stopname.route}>
                {stopname.name_tc}
                </option>
            ))}
            </select>
        </div>

        <div className="eta-container">
            <p>{stopResults[selectedRoute]?.route} </p>
            <p>{stopData[selectedStop]?.name_tc} </p>
            {ETA.map((time, index) => (
            <p key={index} value={time.route}>
                {time.eta}
                <> ---- </>
                <Timer ETA={time.eta} />
            </p>
            ))}
        </div>
        </>
    );
}

const Timer = ({ ETA }) => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const eta = new Date(ETA);
            const diff = eta - now;
            const minutes = Math.floor(diff / 60000);
            const seconds = ((diff % 60000) / 1000).toFixed(0);
            const dif = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
            setDate(dif);
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, [ETA]); // Add ETA as a dependency to recalculate when it changes

    return <>{date}</>;
};

function fetchRoutes() {
    return fetch('https://data.etabus.gov.hk/v1/transport/kmb/route')
    .then(response => response.json())
    .then(data => {const routes = data.data
        // console.log(routes);
        return routes;  
    });
}


function fetchStopList(route, bound) {
    if(bound === 1){
        return fetch('https://data.etabus.gov.hk/v1/transport/kmb/route-stop/'+route.toUpperCase()+'/inbound/1')
        .then(response => response.json())
        .then(data => {const StopList = data.data
        //   console.log(StopList);
            return StopList;  
        });
    } else {
        return fetch('https://data.etabus.gov.hk/v1/transport/kmb/route-stop/'+route.toUpperCase()+'/outbound/1')
        .then(response => response.json())
        .then(data => {const StopList = data.data
        //   console.log(StopList);
            return StopList;  
        });
    }
}

function fetchStopTcName(stopID) {
    // https://data.etabus.gov.hk//v1/transport/kmb/stop/A3ADFCDF8487ADB9
    return fetch('https://data.etabus.gov.hk/v1/transport/kmb/stop/'+stopID.toUpperCase())
    .then(response => response.json())
    .then(data => {const StopData = data.data
        // console.log(StopData);
        return StopData;  
    });
}

function fetchETA(stopID , route){
    return fetch('https://data.etabus.gov.hk/v1/transport/kmb/eta/'+stopID.toUpperCase()+'/'+route.toUpperCase()+'/1')
    .then(response => response.json())
    .then(data => {const ETA = data.data
        // console.log(ETA);
        return ETA;  
    });
}
export default Bus;