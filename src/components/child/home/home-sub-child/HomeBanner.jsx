import React from "react";
import MacBook from "./MacBook";
import Mobile from "./Mobile";

const HomeBanner = () =>{
    return(
        <>
            <div className="home-banner-wrapper">
                <div className="left-side-container"></div>
                <Mobile />
                <MacBook />
            </div>
        </>
    );
}
export default HomeBanner;



