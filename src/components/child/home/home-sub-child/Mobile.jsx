import React from "react";
import profileImage from "../../../../images/prabesh_Rijal.png";
import { FaBars, FaBatteryFull, FaBell, FaFacebookF, FaGoogle, FaHome, FaInstagram, FaLinkedin, FaPlus, FaRegCheckCircle, FaSearch, FaSignal, FaWifi } from "react-icons/fa";

const Mobile = () =>{
    return(
        <>
            <div className="mobile-outer-wrapper">
                <div className="mobile-inner-wrapper">
                    <div className="mobile-notch">
                        <div className="mobile-microphone"></div>
                    </div>
                    <div className="volume-btn"></div>
                    <div className="lock-onlock-btn"></div>
                    <div className="network"><i><FaSignal /></i></div>
                    <div className="wifi"><i><FaWifi /></i></div>
                    <div className="battery"><i><FaBatteryFull /></i></div>
                    <div className="mobile-footer">
                        <ul>
                            <li><i><FaHome /></i></li>
                            <li><i><FaSearch /></i></li>
                            <li><i><FaPlus /></i></li>
                            <li><i><FaBell /></i></li>
                            <li><i><FaBars /></i></li>
                        </ul>
                    </div>
                    <div className="profile-wrapper"></div>
                    <div className="profile-image-info">
                        <div className="profile-image">
                            <img src={profileImage} alt="profile-image" />
                        </div>
                        <div className="profile-info-wrapper">
                            <div className="profile-basic-info">
                                <h2>Prabesh Rijal <i><FaRegCheckCircle /></i></h2>
                                <p>Frontend Developer</p>
                            </div>
                            <div className="social-media-icon">
                                <a href="#">
                                    <div className="my-social-icon">
                                        <i><FaFacebookF /></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="my-social-icon">
                                        <i><FaInstagram /></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="my-social-icon">
                                        <i><FaLinkedin /></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="my-social-icon">
                                        <i><FaGoogle /></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="profile-experience-info">
                            <div className="experience-parent-class">
                                <div className="experice-child">
                                    <p>Project Done</p>
                                    <h2>30+</h2>
                                </div>
                                <div className="experice-child">
                                    <p>Happy Client</p>
                                    <h2>40+</h2>
                                </div>
                                <div className="experice-child">
                                    <p>Experience</p>
                                    <h2>2+</h2>
                                </div>
                            </div>
                        </div>
                        <div className="my-expertise">
                            <h2>My Expertise</h2>
                            <div className="progress-bars-outer">
                                <div className="progress-bar-child">
                                    <div className="progress-bar-skill">
                                        <h1>HTML</h1>
                                    </div>
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar-wrapper">
                                            <div className="show-progress"></div>
                                            <p>85%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar-child">
                                    <div className="progress-bar-skill">
                                        <h1>CSS</h1>
                                    </div>
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar-wrapper">
                                            <div className="show-progress"></div>
                                            <p>80%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar-child">
                                    <div className="progress-bar-skill">
                                        <h1>JS</h1>
                                    </div>
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar-wrapper">
                                            <div className="show-progress"></div>
                                            <p>70%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar-child">
                                    <div className="progress-bar-skill">
                                        <h1>Boots.</h1>
                                    </div>
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar-wrapper">
                                            <div className="show-progress"></div>
                                            <p>80%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar-child">
                                    <div className="progress-bar-skill">
                                        <h1>React</h1>
                                    </div>
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar-wrapper">
                                            <div className="show-progress"></div>
                                            <p>60%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Mobile;



