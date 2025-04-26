import React, { useState } from "react";
import SignIn from "./SignIn.tsx";
import { ISignInDetails } from "../../Models/ISignInDetails.tsx";


const SignInDetails:React.FC = () => {

    const [SignInDetails, setSignInDetails] = useState<ISignInDetails>(
        {
            email: '',
            password: '',
        }
    );

    const handleInput














    return <SignIn/>
};

export default SignInDetails;
