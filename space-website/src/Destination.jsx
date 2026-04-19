import { useState } from "react";

function Destination({ data }) {
    const [selectedItem, setSelectedItem] = useState(null);

    if (!data) return <div>Chargement...</div>;

    const handleSelection = (item) => {
        setSelectedItem(item);
    };

    return (
        <div
            style={{
                background: "url(./assets/destination/background-destination-desktop.jpg) no-repeat",
                height: "120vh",
                backgroundSize: "cover",
            }}
        >
            <h1>Pick your destination</h1>

            <div className="container">
                <div className="row">

                    {/* IMAGE */}
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                        {selectedItem ? (
                            <img
                                src={selectedItem.images.png}
                                alt={selectedItem.name}
                                style={{ width: "400px",position:"relative",top:"100px",right:"100px" }}
                            />
                        ) : (
                            <img
                                src={data[0].images.png}
                                alt={data[0].name}
                                style={{ width: "300px" }}
                            />
                        )}
                    </div>

                    {/* LISTE */}
                   {/* <div className="col-6 d-flex justify-content-end align-items-start">
                        <ul style={{ marginTop: "250px" }}>
                            {data.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-white"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSelection(item)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                            {selectedItem &&
                                <p>
                                    {selectedItem.description}
                                </p>
                            }

                    </div>*/}
                    <div className="col-4 d-flex flex-column justify-content-start align-items-end">

                        <ul style={{ marginTop: "250px" }}>
                            {data.map((item, index) => (
                                <li
                                    key={index}
                                    className={`text-white ${selectedItem?.name === item.name ? "active" : ""}`}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSelection(item)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>

                        {selectedItem && (
                                <div  style={{ marginTop: "50px" }}>
                                    <h2 className="text-white" style={{fontSize:"70px"}}>{selectedItem.name}</h2>
                                    <p className="text-white mt-3" style={{textAlign:"justify",marginBottom:"50px"}}>
                                        {selectedItem.description}
                                    </p>
                                    <hr className="text-white" style={{marginTo:"100px"}}/>
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <div className="text-white d-flex flex-column">
                                                <span>Avg.distance</span>
                                                <span style={{fontSize:"30px"}}>{selectedItem.distance}</span>
                                            </div>
                                            <div className="text-white  d-flex flex-column">
                                                <span>Trtavel time</span>
                                                <span style={{fontSize:"30px"}}>{selectedItem.travel}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Destination;