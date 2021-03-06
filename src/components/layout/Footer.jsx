import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./footer.css";




const Footer = () => {
    return (
        <>
            <div className="footer card-footer">
                <div className="container">
                    <div className="row">

                        {/* Column1 */}
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>

                                <li><NavLink exact to="/about">about us</NavLink></li>
                                <li><NavLink exact to="/services">our services</NavLink></li>
                                <li><Link to="/">privacy policy</Link></li>
                                <li><NavLink to="/contact">contact us</NavLink></li>

                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">shipping</Link></li>
                                <li><Link to="#">returns</Link></li>
                                <li><Link to="#">order status</Link></li>
                                <li><Link to="#">payment options</Link></li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="https://lokinder007.github.io/loki007/" target="_blank">Loki007</a></li>
                                <li><a href="https://lokinder007.github.io/LokeshTodo/" target="_blank">ToDoList</a></li>
                                <li><Link to="#">LokeshApp</Link></li>
                                <li><Link to="#">WeatherApp</Link></li>
                            </ul>
                        </div>
                        {/* Column4 */}
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>

                    <br />
                    <hr style={{ color: "#ffffff" }} />

                    <div className="row">
                        <p className="col-sm">
                            {/* &copy;{new Date().getFullYear()} Blogoo7 - All rights reserved | Lokinder007 */}
                            Copyright {new Date().getFullYear()} &copy; Blog007 - All rights reserved
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;