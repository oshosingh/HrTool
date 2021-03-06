import { TextField } from '@material-ui/core';
import React, {useState} from 'react'
import Header from './header'
import './scss/login.scss'
import Button from '@material-ui/core/Button';
import Spinner from '../static/spinner'
import { Redirect } from 'react-router-dom';
import axios from 'axios'

function Login(props){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        var spin = document.getElementById('spin')
        spin.style.display = 'block'

        axios.post('/api/login',{
            userName: user,
            password: password
        }).then(result => {
            spin.style.display = 'none';
            window.sessionStorage.setItem("login_status","true")
            window.sessionStorage.setItem("access_token", result.data.payload_data.jwtToken)
            props.history.push("/home")
        })
        .catch(err => {
            console.log(err)
            spin.style.display = 'none'
        })

    }

    if(window.sessionStorage.getItem("login_status")==="true"){
        return(
            <Redirect to="/home" />
        )
    }
    
    return(
        <> 
            <Header name="signup" />
            <div className="form">
                <div className="form-group">
                    <div className="form-field">
                        <form noValidate autoComplete="off">
                            <div className="login">
                                <h2> Member Login</h2>
                            </div>
                            <div className="login">
                                <div className="fields">   
                                    <TextField 
                                        onChange={(e)=> setUser(e.target.value)} 
                                        style={{width: "63%"}} id="standard-secondary" 
                                        label="UserName" color="secondary" />
                                </div>
                                <div className="fields">   
                                    <TextField 
                                        onChange={(e)=> setPassword(e.target.value)} 
                                        type="password"
                                        style={{width: "63%", marginTop: "5px"}} id="standard-secondary" 
                                        label="Password" color="secondary" />
                                </div>
                                <div className="fields submit-btn"> 
                                    <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
                                    <Button variant="contained" color="secondary" style={{marginLeft : "10px"}}>Google Login</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="spinner" id="spin">
                        <Spinner />
                    </div>
                </div>
                <div className="footer">

                </div>
            </div>
        </>
    )
}

export default Login;