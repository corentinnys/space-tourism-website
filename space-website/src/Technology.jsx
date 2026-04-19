
import { Routes, Route } from "react-router-dom";
import {useState} from "react";
function Tecnology({ data = []}) {
    const [selectedItem, setSelectedItem] = useState(data[0]);
    const [active,setActive] = useState(0);
    const handleSelection = (item,index) => {
        setSelectedItem(item);
        setActive(index);
    }

    return (
        <div
            style={{
                background: "url(./assets/technology/background-technology-desktop.jpg) no-repeat",
                minHeight: "100vh",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center"
            }}
        >
            <div className="container">
                <div className="row align-items-center ">

                    {/* LEFT TEXT */}
                    <div className="col-4 text-white">
                        <h2 style={{fontSize:"3rem",textTransform:"uppercase",marginBottom:"2rem"}}>{selectedItem?.name}</h2>
                        <p>{selectedItem?.description}</p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-8 d-flex justify-content-center">
                        <img
                            className="w-50"

                            src={selectedItem?.images?.portrait}
                            alt={selectedItem?.name}
                        />
                    </div>

                </div>
            </div>

            {/* NAV NUMBERS */}
            <ul
                style={{
                    position: "absolute",
                    left: "80px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}
            >
                {data?.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelection(item, index)}
                        style={{
                            cursor: "pointer",
                            color: active === index ? "black" : "white",
                            backgroundColor: active === index ? "white" : "transparent",
                            border: "1px solid white",
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transition: "0.3s"
                        }}
                    >
                        {index + 1}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tecnology
