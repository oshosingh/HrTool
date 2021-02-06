import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faClone, faUserTie, faUserPlus, faCogs } from "@fortawesome/free-solid-svg-icons";
import {withRouter} from 'react-router-dom'

const sidebar = (props) => {

    const handleSubmit = (path) => {
        props.history.push(path)
    }

    return(
        <div className="sidebar">
            <div className="headers">
                <header> Hello John Doe</header>
            </div>
            <div className="side-content">
                <ul>
                    <li> <button className="side-btn" onClick={()=>handleSubmit("home")}> <FontAwesomeIcon icon={faHome} /> Dashboard</button> </li>
                    <li> <button className="side-btn" onClick={()=>handleSubmit("emp")}> <FontAwesomeIcon icon={faUsers} /> Emp Account Setup</button> </li>
                    <li> <button className="side-btn" onClick={()=>handleSubmit("employee")}> <FontAwesomeIcon icon={faUsers} /> Employee Info</button> </li>
                    <li> <button className="side-btn" onClick={()=>handleSubmit("home")}> <FontAwesomeIcon icon={faClone} /> Requests</button> </li>
                    <li> <button className="side-btn" onClick={()=>handleSubmit("home")}> <FontAwesomeIcon icon={faUserTie} /> Recruitment</button> </li>
                    <li> <button className="side-btn" onClick={()=>handleSubmit("home")}> <FontAwesomeIcon icon={faUserPlus} /> Onboarding</button> </li>
                    <li> <button className="side-btn" onClick={()=>handleSubmit("home")}> <FontAwesomeIcon icon={faCogs} /> Settings</button> </li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(sidebar);