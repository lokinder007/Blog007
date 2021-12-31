import { Link } from "react-router-dom";
import "./sidebar.css";
import img from "../../assets/mypp.jpg"

const Sidebar = () => {
    return (

        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src={img}
                    alt=""
                />
                <p>
                    My name is Lokinder Singh  I am from Utter Pradess
                    but currently I am leaving with my parents in Gandhinagar
                    and working as a Freelance Front End Web Developer.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Sport">
                            Sport
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Cinema">
                            Cinema
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i title="Facebook"  className="sidebarIcon fab fa-facebook-square"></i>
                    <i title="Instagram" className="sidebarIcon fab fa-instagram-square"></i>
                    <i title="Pinterest" className="sidebarIcon fab fa-pinterest-square"></i>
                    <i title="Twitter" className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
