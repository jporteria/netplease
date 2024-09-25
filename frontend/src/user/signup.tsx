import axios from "axios"
import { useContext, useState } from "react"
// import { useNavigate } from "react-router-dom"
import "../styles/auth.css"
import { MovieContext } from "../App"

export default function Signup(){

    const { setAuth } = useContext(MovieContext)

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: ""
    })

    const addUser = (e: { target: { name: any; value: any } }) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
    }
    console.log(userData)
    
    // const navigate = useNavigate()
    
    const signUp = async(e: { preventDefault: () => void }) => {
        e.preventDefault()
        
        if(userData.firstName && userData.lastName && userData.email && userData.password !== ''){

            // backend url for production = https://mymovieapp-6qlq.onrender.com

            const response = await fetch(`http://localhost:5000/signup`, {
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
            });

            const json = await response.json();
            console.log('json data', json);
            console.log('er', json.error);
            setAuth('Login')

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

        }else{
            console.log('fill out all field')
        }

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
                <input type="text" onChange={addUser} name="firstName" value={userData.firstName} placeholder="First Name"/>
                <input type="text" onChange={addUser} name="lastName" value={userData.lastName} placeholder="Last Name"/>
                <input type="email" onChange={addUser} name="email" value={userData.email} placeholder="Email"/>
                <input type="password" onChange={addUser} name="password" value={userData.password} placeholder="Password"/>
                <input type="password" onChange={addUser} name="confirmPass" value={userData.confirmPass} placeholder="Confirm Password"/>
                {/* <input type="password" placeholder="Confirm Password" id="confirmPass"/> */}
                <button>Sign Up</button>
            </form>
        </div>
    )
}