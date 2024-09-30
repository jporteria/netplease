import axios from "axios"
import { useContext, useState } from "react"
// import { useNavigate } from "react-router-dom"
import "../styles/auth.css"
import { MovieContext } from "../App"
import Swal from "sweetalert2"

export default function Login(){

    const apiUrl = import.meta.env.VITE_API_URL

    const { setAuth, setAuthToken } = useContext(MovieContext)
    const [buttonDisabled, setButtonDisabled] = useState(false)

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
    
    const login = async(e: { preventDefault: () => void }) => {
        e.preventDefault()
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
        setButtonDisabled(true)
        await axios.post(`${apiUrl}/login`, userData)
            .then((res) => {
                Toast.fire({
                    icon: "success",
                    title: `Welcome ${res.data.firstName}`
                  });
                setButtonDisabled(false)

                // alert(`Welcome ${res.data.firstName}`)
                sessionStorage.setItem('auth-token', res.data.authtoken);
                sessionStorage.setItem('auth-firstname', res.data.firstName);
                sessionStorage.setItem('auth-lastname', res.data.lastName);
                setAuthToken(sessionStorage.getItem('auth-token'))

                const auth = document.getElementById('showAuthForm')
                if(auth){
                    auth.className = "auth--form"
                }
            })
            .catch(err => {
                Toast.fire({
                    icon: "error",
                    title: err.response.data.error
                  });
                  setButtonDisabled(false)
            })
    }       

    
    return(
        <div className="authField">
            <form action="submit" onSubmit={login} className="signUp--form">
                <input type="email" onChange={addUser} name="email" value={userData.email} placeholder="Email"/>
                <input type="password" onChange={addUser} name="password" value={userData.password} placeholder="Password"/>
                <p className="dontHaveAccount" onClick={() => setAuth('Signup')}>I don't have an account</p>
                {
                    buttonDisabled 
                    ?
                    <img className="buttonLoading" src="./loading.gif" alt="" />                
                    :
                    <button className='buttonEnabled'>Submit</button>
                }
            </form>
        </div>
    )
}