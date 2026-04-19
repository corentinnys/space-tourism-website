import { Routes, Route } from "react-router-dom";

function Home() {
    return (
        <div style={{ background: "url(./assets/home/background-home-desktop.jpg) no-repeat", height: "120vh",backgroundSize:"cover" }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center" >
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <h2 className="text-white" style={{textTransform:"uppercase"}}>So, you want to travel to</h2>
                        <h1 className="text-white" style={{fontSize:"10rem",textTransform:"uppercase "}}>Space</h1>
                        <p className="text-white" style={{fontSize:"1.2rem",textAlign:"justify"}}>
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                            Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center text-dark fs-1"
                         style={{ background: "white", borderRadius: "50%",height:"200px",position:"relative",left:"300px" }}>
                        explore
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;