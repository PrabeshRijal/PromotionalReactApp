import React from "react";
import Home from "./child/home/Home";
import Navigation from "./layout/Navigation";

const AppView = () =>{
    return(
        <>
            <section className="global-wrapper-section">
                <Navigation />
                <Home />
            </section>
        </>
    );
}
export default AppView;