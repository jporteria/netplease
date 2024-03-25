import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/auth.css"

export default function Login(props){

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const addUser = e => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
    }
    console.log(userData)
    const navigate = useNavigate()
    
    const login = async(e) => {
        e.preventDefault()
        const response = await axios.post('https://mymovieapp-6qlq.onrender.com/login/', userData)
            .then(res => {
                console.log(res)
                document.getElementById('showAuthForm').className = "auth--form"
            })
    }       
 
    
    return(
        <div className="authField">
            <form action="submit" onSubmit={login} className="signUp--form">
                <input type="email" onChange={addUser} name="email" value={userData.email} placeholder="Email"/>
                <input type="password" onChange={addUser} name="password" value={userData.password} placeholder="Password"/>
                <p className="dontHaveAccount" onClick={() => props.setAuth('Signup')}>I don't have an account</p>
                <button>Login</button>
            </form>
        </div>
    )
}