import React from 'react';
import { useState } from "react";

import{Jumbotron} from 'react-bootstrap';
import {LoginForm} from "../../components/login/login.comp";
import {ResetPassword} from "../../components/password-reset/passwordreset";
import './entry.style.css';

export const Entry =() =>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [frmload,setFrmLoad]=useState("login");

    
    

    const handleOnchange = e =>{

        const{name,value} = e.target;

        switch(name){
            case 'email':
            setEmail(value);
            break;
            case 'password':
            setPassword(value);
            break;

            default:
                break;
        };



        console.log(name,value)
    }


    const formSwitcher = (frmType) =>{
        setFrmLoad(frmType);


    }



    return( <div className="entry-page bg-info" >
        <Jumbotron className="form-box">
            { frmload ==='login' && <LoginForm
             handleOnchange={handleOnchange} 
             formSwitcher={formSwitcher}
             email={email}
             pass={password}

            />}
            {frmload==='reset' && <ResetPassword
            handleOnchange={handleOnchange} 
            formSwitcher={formSwitcher}
            email={email}


/>}

           

        </Jumbotron>
    </div>
    )
};