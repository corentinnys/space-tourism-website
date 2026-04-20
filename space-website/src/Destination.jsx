import { useState } from "react";

function Destination({ data }) {



    const handleSelection = (item) => {
        setSelectedItem(item);
    };
    const [selectedItem, setSelectedItem] = useState(null);
 const currentItem = selectedItem || data?.[0];






    return (
        <div
            style={{
                background: "url(./assets/destination/background-destination-desktop.jpg) no-repeat",
                height: "120vh",
                backgroundSize: "cover",
            }}
        >


            <div className="container">
                <div className="row">
                    {/*<h1 className="text-white" style={{position:"relative",top:"100px"}}>Pick your destination</h1>*/}
                    {/* IMAGE */}
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">

                        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center" style={{ position: "relative", top: "100px" }}>
                            <img className="d-block w-100"
                                src={currentItem?.images.png}
                                alt={currentItem?.name}
                                style={{ width: "400px", height: "500px"  }}
                            />
                        </div>

                        {/*{selectedItem ? (
                            <img
                                src={selectedItem.images.png}
                                alt={selectedItem.name}
                                style={{ width: "400px",position:"relative",top:"100px",right:"100px" }}
                            />
                        ) : (
                            <img
                                src={data[0].images.png}
                                alt={data[0].name}
                                style={{ width: "400px",position:"relative",top:"100px",right:"100px" }}
                            />
                        )}*/}
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
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-start align-items-lg-end align-items-center text-center text-lg-end navbar-secondary">
                        <ul style={{ marginTop: "250px" }}>
                            {data?.map((item, index) => (
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

                        {currentItem && (
                                <div  style={{ marginTop: "50px" }}>
                                    <h2 className="text-white" style={{fontSize:"70px"}}>{currentItem.name}</h2>
                                    <p className="text-white mt-3" style={{textAlign:"justify",marginBottom:"50px"}}>
                                        {currentItem.description}
                                    </p>
                                    <hr className="text-white" style={{marginTo:"100px"}}/>
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <div className="text-white d-flex flex-column">
                                                <span>Avg.distance</span>
                                                <span style={{fontSize:"30px"}}>{currentItem.distance}</span>
                                            </div>
                                            <div className="text-white  d-flex flex-column">
                                                <span>Trtavel time</span>
                                                <span style={{fontSize:"30px"}}>{currentItem.travel}</span>
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