import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup(){

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
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

    const signUp = async(e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:5000/signup/', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => console.log('success'))
        .catch(err => console.log(err))


        // const json = await response

        // if(!response.ok){
        //     console.log('failed', json)
        // }else{
        //     console.log('success', json)
        // }
        
        // try{
        // }catch(err){
        //     console.log(err)
        // }
        
        // if(userData.firstName && userData.lastName && userData.email && userData.password !== ''){
        //     const addUser = await axios.post("http://localhost:5000/signup/", userData)
        //         .then(() => alert('succesfully added user'))
        //         .catch(err => console.log(err))
        //     addUser
        //     navigate('/')
        // }else{
        //     console.log('fill out all field')
        // }
        
    }
    
    return(
        <div>
            <form action="submit" onSubmit={signUp}>
                <input type="text" onChange={addUser} name="firstName" value={userData.firstName} placeholder="First Name"/>
                <input type="text" onChange={addUser} name="lastName" value={userData.lastName} placeholder="Last Name"/>
                <input type="email" onChange={addUser} name="email" value={userData.email} placeholder="Email"/>
                <input type="password" onChange={addUser} name="password" value={userData.password} placeholder="Password"/>
                <button>Submit</button>
            </form>
        </div>
    )
}