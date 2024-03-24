import Login from "./login";
import Signup from "./signup";

export default function AuthForm(props){



    return(
        <div id="showAuthForm" className="auth--form">
            <div className="auth--type">
                <button className={props.auth == 'Signup' ? 'signUp--active' : 'signUp'} onClick={() => props.setAuth('Signup')}>Sign Up</button>
                <button className={props.auth == 'Login' ? 'login--active' : 'login'} onClick={() => props.setAuth('Login')}>Login</button>
            </div>
            {
                props.auth == 'Signup' ? <Signup setAuth={props.setAuth}/> : <Login setAuth={props.setAuth} />
            }
            <button className="close--auth" onClick={() => document.getElementById('showAuthForm').className = "auth--form"}><img src="../image/close.png" alt="X" className="close--image" /></button>
        </div>
    )
}