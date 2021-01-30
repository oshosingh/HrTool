import { TextField } from '@material-ui/core';
import React, { useState } from 'react'
import Header from './header'
import './scss/login.scss'
import Button from '@material-ui/core/Button';
import Spinner from '../static/spinner';

function Register(props){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!user || !password){
            alert('Email or Password is Empty')
            return
        }

        // Make spinner visible
        // var spin = document.getElementById("spinner_id");
        // spin.style.display = 'block';
    }
    return(
        <> 
            <Header name="Login" />
            <div className="form">
                <div className="form-group">
                    <div className="form-field">
                        <form noValidate autoComplete="off">
                            <div className="login">
                                <h2> Member Register</h2>
                            </div>
                            <div className="login">
                                <div className="fields">   
                                    <TextField 
                                        onChange={(e)=> setUser(e.target.value)} 
                                        style={{width: "63%"}} id="standard-secondary" 
                                        label="Email or Username" color="secondary" />
                                </div>
                                <div className="fields">   
                                    <TextField 
                                        onChange={(e)=> setPassword(e.target.value)} 
                                        type= "password"
                                        style={{width: "63%", marginTop: "5px"}} id="standard-secondary" 
                                        label="Password" color="secondary" />
                                </div>
                                <div className="fields submit-btn"> 
                                    <Button variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
                                    <Button variant="contained" color="secondary" style={{marginLeft : "10px"}}>Google Login</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="spinner" id="spinner_id">
                        <Spinner />
                     </div>
                </div>
                <div className="footer">

                </div>
            </div>
        </>
    )
}

export default Register;