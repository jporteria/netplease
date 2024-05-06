import { useContext } from "react";
import Login from "./login";
import Signup from "./signup";
import { MovieContext } from "../App";

export default function AuthForm(){

    const { auth, setAuth } = useContext(MovieContext)


    return(
        <div id="showAuthForm" className="auth--form">
            <div className="auth--type">
                <button className={auth == 'Signup' ? 'signUp--active' : 'signUp'} onClick={() => setAuth('Signup')}>Sign Up</button>
                <button className={auth == 'Login' ? 'login--active' : 'login'} onClick={() => setAuth('Login')}>Login</button>
            </div>
            {
                auth == 'Signup' ? <Signup /> : <Login />
            }
            <button className="close--auth" onClick={() => {
                const auth = document.getElementById('showAuthForm')
                if(auth){
                    auth.className = "auth--form"
                }
                }}><img src="https://drive.google.com/thumbnail?id=12TeG6eyieFo3BUImG42OvScXlkMzSpA3&sz=w1000" alt="X" className="close--image" /></button>
        </div>
    )
}