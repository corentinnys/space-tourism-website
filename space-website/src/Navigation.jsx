
import { Routes, Route,Link } from "react-router-dom";
import Home from "./Home.jsx";
import Destination from "./Destination.jsx";
import Crew from "./Crew.jsx";
import Technology from "./Technology.jsx";
import './Navigation.css' ;
import {useEffect, useState} from "react";
function Navigation() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
            console.log(data); // ✅ maintenant OK
            setItems(data);
        })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
       <nav>
            <ul>
                <li>

                    <Link to="/">Home</Link>
                </li>
                <li>


                    <Link to="/destination">Destination</Link>
                </li>
                <li>
                    <Link to="/Crew">Crew</Link>

                </li>
                <li>
                    <Link to="/Technology">Technology</Link>

                </li>
            </ul>
        </nav>


    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination data={items.destinations}/>} />
        <Route path="/Crew" element={<Crew  data={items.crew}/>} />
        <Route path="/Technology" element={<Technology />} />
    </Routes>
        </>
    )
}

export default Navigation
