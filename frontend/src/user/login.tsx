import axios from "axios"
import { useContext, useState } from "react"
// import { useNavigate } from "react-router-dom"
import "../styles/auth.css"
import { MovieContext } from "../App"

export default function Login(){

    const { setAuth, setAuthToken } = useContext(MovieContext)


    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const addUser = (e: { target: { name: any; value: any } }) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
    }
    console.log(userData)
    // const navigate = useNavigate()
    // backend url 'https://mymovieapp-6qlq.onrender.com/login/'
    
    const login = async(e: { preventDefault: () => void }) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/login/', userData)
            .then((res) => {
                alert(`Welcome ${res.data.firstName}`)
                sessionStorage.setItem('auth-token', res.data.authtoken);
                sessionStorage.setItem('auth-firstname', res.data.firstName);
                sessionStorage.setItem('auth-lastname', res.data.lastName);
                setAuthToken(sessionStorage.getItem('auth-token'))

                const auth = document.getElementById('showAuthForm')
                if(auth){
                    auth.className = "auth--form"
                }
            })
            .catch(err => alert(err.response.data.error))
    }       

    
    return(
        <div className="authField">
            <form action="submit" onSubmit={login} className="signUp--form">
                <input type="email" onChange={addUser} name="email" value={userData.email} placeholder="Email"/>
                <input type="password" onChange={addUser} name="password" value={userData.password} placeholder="Password"/>
                <p className="dontHaveAccount" onClick={() => setAuth('Signup')}>I don't have an account</p>
                <button>Login</button>
            </form>
        </div>
    )
}