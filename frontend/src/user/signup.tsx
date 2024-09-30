import { useContext, useRef, useState } from "react"
// import { useNavigate } from "react-router-dom"
import "../styles/auth.css"
import { MovieContext } from "../App"
import Swal from 'sweetalert2'

export default function Signup(){

    const apiUrl = import.meta.env.VITE_API_URL

    const { setAuth } = useContext(MovieContext)

    const [buttonDisabled, setButtonDisabled] = useState(false)

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: ""
    })
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)



    const addUser = (e: { target: { name: any; value: any } }) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
    }
    
    const signUp = async(e: { preventDefault: () => void }) => {
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
          
        const field = [
            {ref: firstNameRef, value: userData.firstName},
            {ref: lastNameRef, value: userData.lastName},
            {ref: emailRef, value: userData.email},
            {ref: passwordRef, value: userData.password},
            {ref: confirmPasswordRef, value: userData.confirmPass},
        ]
        
        const firstEmptyField = field.find(f => f.value.trim() === '')
        if(!firstEmptyField){
            if(userData.password === userData.confirmPass){
                setButtonDisabled(true)
                // const response = 
                await fetch(`${apiUrl}/signup`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                        password: userData.password
                    })  
                })
                .then((res) => {
                    res.json()
                    // console.log('err', res.error);
                      Toast.fire({
                        icon: "success",
                        title: "Signed in successfully"
                      });
                      setButtonDisabled(false)
                      setAuth('Login')
                })
                // const json = await response.json();
                // console.log('json data', json);

                // alert

            }else{
                Toast.fire({
                    icon: "warning",
                    title: "Please confirm password"
                  });
                setUserData({...userData, confirmPass: ""});
                confirmPasswordRef.current?.focus();
            }
        }else{
            firstEmptyField?.ref.current?.focus();
        }

        // if(userData.firstName && userData.lastName && userData.email && userData.password !== ''){


            // if(userData.password == userData.confirmPass){
            //     await axios.post('http://localhost:5000/signup/', {
            //         firstName: userData.firstName,
            //         lastName: userData.lastName,
            //         email: userData.email,
            //         password: userData.password
            //     })
            //     .then((res) => {
            //         console.log(res)
            //         alert('Succesfully signed up')
            //         setAuth('Login')
            //     })
            //     .catch(err => console.log(err.response.statusText))
            // }else{
            //     alert('password did not match')
            // }

        // }else{
        //     console.log('fill out all field')
        // }

        // fetch api
        // const response = await fetch('http://localhost:5000/signup/', {
        //     method: 'POST',
        //     body: JSON.stringify(userData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        
        
    }
    
    return(
        <div className="authField">
            <form action="submit" onSubmit={signUp} className="signUp--form">
                <input type="text" onChange={addUser} ref={firstNameRef} name="firstName" value={userData.firstName} placeholder="First Name"/>
                <input type="text" onChange={addUser} ref={lastNameRef} name="lastName" value={userData.lastName} placeholder="Last Name"/>
                <input type="email" onChange={addUser} ref={emailRef} name="email" value={userData.email} placeholder="Email"/>
                <input type="password" onChange={addUser} ref={passwordRef} name="password" value={userData.password} placeholder="Password"/>
                <input type="password" onChange={addUser} ref={confirmPasswordRef} name="confirmPass" value={userData.confirmPass} placeholder="Confirm Password"/>
                {/* <input type="password" placeholder="Confirm Password" id="confirmPass"/> */}
                <button className={buttonDisabled ? 'buttonDisabled' : 'buttonEnabled'}>Sign Up</button>
            </form>
        </div>
    )
}