
import React, { useState } from "react";
import SignInDetails from "./SignInDetails.tsx";
import  axios from "axios";



const SignIn:React.FC = () => {

    const [SignDetails, setSignDetails] = useState({
        email:'',
        password :''
    });

    const handleInputField=(event)=>{
        const {name,value}=event.target;
        setSignDetails(prevState => ({
            ...prevState,
            [name]:value}));
    }
     const handleSubmit= async (event)=>{
        event.preventDefault();

        return await axios.get('/sanctum/csrf-cookie').then(res => {
             const response =axios.post('http://127.0.0.1:8000/api/sign-in', SignDetails);
             console.log(response);
         });


     }




    return <SignInDetails handleInputField={handleInputField} handleSubmit={handleSubmit}/>

};

export default SignIn;
