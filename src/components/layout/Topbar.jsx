import { Link, NavLink } from "react-router-dom";
import "./topbar.css"
import img from "../../assets/B.jpg"

const TopBar = () => {

    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                {/* <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i> */}
                <Link className="logo link " to="/">
                    <h2>
                        {/* <span>L</span>okesh
                <span>A</span>pp */}
                        <span>B</span>log
                        <span>007</span>
                    </h2>
                </Link>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <NavLink
                            exact to="/"
                            className="link"
                        // activeclassName="menuActive"
                        // activeStyle={{
                        //     fontWeight: "bold",
                        //     color: "green"
                        // }}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">
                        <NavLink
                            exact to="/contact"
                            className="link"

                        >
                            CONTACT
                        </NavLink>
                    </li>
                    <li className="topListItem">
                        <NavLink
                            exact to="/write"
                            className="link"
                        // activeclassName="menuActive"
                        // activeStyle={{
                        //     fontWeight: "bold",
                        //     color: "green"
                        // }} 
                        >
                            WRITE
                        </NavLink>
                    </li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src={img}
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
