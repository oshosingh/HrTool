import React, { useState } from 'react'
import './css/home.scss'
import Navigation from './navigation'
import { TextField, Button } from '@material-ui/core';
import axios from 'axios'
import Sidebar from './sidebar'


const EmpAccountCreate = (props) =>{
    const [empId, setEmpId] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        const token = window.sessionStorage.getItem("access_token")
        
        axios.post('/api/empcreate', {
            empId: empId,
            userName: user,
            password: password
        }, {
            "headers" : {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err.data.message.message)
            if(err.data.message.message !=="invalid token"){
                window.sessionStorage.setItem("login_status", "false")
                props.history.push("/")
            }
        })
    }
    return(
        <>
            <Navigation />
            <div className="container">
                <Sidebar />
                <div className="main-user">
                    <div className="header-name">
                        <h2> Create Employee Account</h2>
                        <TextField
                            onChange={(e) => setEmpId(e.target.value)}
                            variant="outlined" className="text-input"
                            style={{width: "63%"}} id="standard-secondary" 
                            label="Employee Id" color="secondary" />

                        <TextField
                            onChange={(e) => setUser(e.target.value)}
                            variant="outlined" className="text-input"
                            style={{width: "63%"}} id="standard-secondary" 
                            label="UserName" color="secondary" />

                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined" className="text-input"
                            style={{width: "63%"}} id="standard-secondary" 
                            label="Password" color="secondary" type="password" />
                        <div className="btn-submit">
                            <Button variant="contained" color="primary" onClick={handleSubmit}> Create User</Button>
                        </div>
                    </div>
                </div>
            </div>  

        </>
    )
}

export default EmpAccountCreate;