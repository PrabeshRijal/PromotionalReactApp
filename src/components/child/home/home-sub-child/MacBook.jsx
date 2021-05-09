import React from "react";
import { FaApple, FaArrowCircleUp, FaEnvelope, FaGlobe, FaLaptop, FaMapMarkedAlt, FaPen, FaPenFancy, FaSearch, FaShare, FaStickyNote, FaUikit } from "react-icons/fa";
import aboutMeImg from "../../../../images/prabesh_Rijal.png"

const MacBook = () =>{
    return (
        <>
            <div className="macbook-outer-wrapper">
                <div className="macbook-inner-wrapper">
                    <div className="macbook-logo"><i><FaApple /></i></div>
                    <div className="awesome-design"><h2>Awesome Design <FaArrowCircleUp /></h2></div>
                    <div className="my-slider-box-outer">
                        <div className="my-slider-box-inner">
                            <div className="search-box">
                                <p><FaSearch className="search-btn"/> prabeshrijal.com.np</p>
                            </div>
                            <div className="about-me-wrapper">
                                <h3>About Myself</h3>
                                <div className="about-me-parent">
                                    <div className="about-me-childs">
                                        <div className="about-me-image">
                                            <img src={aboutMeImg} />
                                        </div>
                                    </div>
                                    <div className="about-me-childs">
                                        <div className="about-me-info">
                                            <p>Hello, I am Prabesh Rijal From Pokhara, Nepal. I Have been working as frontend developer in top ranked software companies for last 2 years. My Experties are HTML, CSS, SASS, JavaScript, Bootstrap, React Js, Illustrato, Photoshop and after effects</p>
                                            <div className="about-more-info">
                                                <h3><FaEnvelope className="mr-2 "/> prabeshrijal67@gmail.com</h3>
                                                <h3><FaMapMarkedAlt className="mr-2 "/> Pokhara, Nepal</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-services-wrapper">
                                <h3>Services</h3>
                                <div className="my-services-parent">
                                    <div className="my-services-childs">
                                        <div className="overlay"></div>
                                            <div className="services-icon">
                                                <i><FaGlobe className="services-icons"/></i>
                                            </div>
                                            <div className="services-info">
                                                <h2>Web Design</h2>
                                        </div>
                                    </div>
                                    <div className="my-services-childs">
                                        <div className="overlay"></div>
                                            <div className="services-icon">
                                                <i><FaPen className="services-icons"/></i>
                                            </div>
                                            <div className="services-info">
                                                <h2>Branding</h2>
                                        </div>
                                    </div>
                                    <div className="my-services-childs">
                                        <div className="overlay"></div>
                                            <div className="services-icon">
                                                <i><FaStickyNote className="services-icons"/></i>
                                            </div>
                                            <div className="services-info">
                                                <h2>Post Design</h2>
                                        </div>
                                    </div> 
                                    <div className="my-services-childs">
                                        <div className="overlay"></div>
                                            <div className="services-icon">
                                                <i><FaLaptop className="services-icons"/></i>
                                            </div>
                                            <div className="services-info">
                                                <h2>UI / UX</h2>
                                        </div>
                                    </div> 
                                    <div className="my-services-childs">
                                        <div className="overlay"></div>
                                            <div className="services-icon">
                                                <i><FaPenFancy className="services-icons"/></i>
                                            </div>
                                            <div className="services-info">
                                                <h2>Illustration</h2>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MacBook;