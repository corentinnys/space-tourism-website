import { Routes, Route } from "react-router-dom";

function Home() {
    return (
        <div style={{ background: "url(./assets/home/background-home-desktop.jpg)", height: "120vh" }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center" >
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <h2>So, you want to travel to</h2>
                        <h1>Space</h1>
                        <p>
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                            Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        explore
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;