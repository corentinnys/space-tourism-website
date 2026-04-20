
import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";
function Crew({data}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentItem = data?.[currentIndex];
    useEffect(() => {
        if (!data || data.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % data.length
            );
        }, 5000);

        return () => clearInterval(interval); // nettoyage
    }, [data]);


    return (
         <div style={{ background: "url(./assets/crew/background-crew-desktop.jpg) no-repeat", height: "120vh",backgroundSize:"cover" }}>

            <h1>Meet your Crew</h1>
             <ul
                 style={{
                    display: "flex",
                     justifyContent: "center",
                     width: "100%",
                     margin: "auto",
                     padding: 0,
                     listStyle: "none",
                 }}
             >
                 {currentItem && (
                     <li
                         style={{
                             display: "flex",
                             justifyContent: "space-around",
                             alignItems: "center",
                             gap: "150px",
                             height: "100vh",
                             padding: "0 50px"
                         }}
                         className="crew-item"

                     >
                         <div
                             style={{
                                 display: "flex",
                                 flexDirection: "column",
                                 justifyContent: "center",
                                 maxWidth: "500px"
                             }}
                         >
                             <h2 className="text-white">{currentItem.role}</h2>
                             <p className="text-white" style={{fontSize:"50px",textTransform:"uppercase"}}>{currentItem.name}</p>
                             <p className="text-white">{currentItem.bio}</p>
                         </div>

                         <div className="intervenants">
                             <img
                                 src={currentItem.images.png}
                                 alt={currentItem.name}
                             />
                         </div>
                     </li>
                 )}
             </ul>
        </div>
    )
}

export default Crew
