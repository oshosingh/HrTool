import React, { useState } from 'react'
import './css/home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faClone, faUserTie, faUserPlus, faCogs } from "@fortawesome/free-solid-svg-icons";
import Navigation from './navigation'
import { TextField, Button } from '@material-ui/core';
import axios from 'axios'


const EmpAccountCreate = (props) =>{
    const [empId, setEmpId] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (path) => {
        props.history.push(path)
    }

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
            console.log(err)
        })
    }
    return(
        <>
            <Navigation />
            <div className="container">
                <div className="sidebar">
                    <div className="headers">
                        <header> Hello John Doe</header>
                    </div>
                    <div className="side-content">
                    <ul>
                            <li> <button className="side-btn" onClick={()=>handleClick("home")}> <FontAwesomeIcon icon={faHome} /> Dashboard</button> </li>
                            <li> <button className="side-btn" onClick={()=>handleClick("emp")}> <FontAwesomeIcon icon={faUsers} /> Emp Account Setup</button> </li>
                            <li> <button className="side-btn" onClick={()=>handleClick("home")}> <FontAwesomeIcon icon={faClone} /> Requests</button> </li>
                            <li> <button className="side-btn" onClick={()=>handleClick("home")}> <FontAwesomeIcon icon={faUserTie} /> Recruitment</button> </li>
                            <li> <button className="side-btn" onClick={()=>handleClick("home")}> <FontAwesomeIcon icon={faUserPlus} /> Onboarding</button> </li>
                            <li> <button className="side-btn" onClick={()=>handleClick("home")}> <FontAwesomeIcon icon={faCogs} /> Settings</button> </li>
                        </ul>
                    </div>
                </div>
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