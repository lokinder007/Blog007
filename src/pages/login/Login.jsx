import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();

    const toRegister = (e) => {
        e.preventDefault()
        navigate("/register")
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email* :</label>
                <input className="loginInput" type="email" placeholder="Enter your email..." required />
                <label>Password* :</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." required />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton" onClick={toRegister}>
               Register
            </button>
        </div>
    )
}

export default Login
