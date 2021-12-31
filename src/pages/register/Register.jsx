import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./register.css"

const Register = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const toLogin = (e) => {
        e.preventDefault()
        navigate("/login")
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            ` ${user.name} you are registered successfully! `
          )
          navigate("/login");
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>

            <form className="registerForm" onSubmit={formSubmit}>
                <label>Name* :</label>
                <input className="registerInput" type="text" name="name" value={user.name} placeholder="Enter your name..." onChange={handleChange} required />
                <label>Email* :</label>
                <input className="registerInput" type="text" name="email" value={user.email} placeholder="Enter your email..." onChange={handleChange} required />
                <label>Password* :</label>
                <input className="registerInput" type="password" name="password" value={user.password} placeholder="Enter your password..." onChange={handleChange} required />
                <button className="registerButton" type="submit">Register</button>
            </form>
            
            <button className="registerLoginButton" onClick={toLogin}>
                Login
            </button>
        </div>
    )
}

export default Register
