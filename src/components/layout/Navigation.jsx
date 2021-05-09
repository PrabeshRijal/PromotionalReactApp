import React from "react";

const Navigation = () =>{
    return(
        <>
            <section className="navigation-section">
            <div className="navigation-wrapper">
                <div className="brand-logo">
                    <h1>PRABESH RIJAL</h1>
                </div>
                <div className="logo-deco"></div>
                <div className="main-menu">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>About Me</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
            </section>
        </>
    );
}
export default Navigation;