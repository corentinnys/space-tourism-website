
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Destination from "./Destination.jsx";
import Crew from "./Crew.jsx";
import Technology from "./Technology.jsx";
import './Navigation.css' ;
function Navigation() {

    return (
        <>
       <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/destination">Destination</a>
                </li>
                <li>
                    <a href="/Crew">Crew</a>
                </li>
                <li>
                    <a href="/Technology">Technology</a>
                </li>
            </ul>
        </nav>


    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
    </Routes>
        </>
    )
}

export default Navigation
