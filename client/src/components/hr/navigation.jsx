import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faCommentAlt, faUser, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import './css/navigation.scss'
import {withRouter} from 'react-router-dom'

function Nav(props){

    const handleLogout = () => {
        window.sessionStorage.setItem("login_status", "false")
        props.history.push("/")
    }

    return(
        <div className="nav-bar">
            <h3>Nanotech</h3>
            <nav>
                <ul className="nav-links">
                    <li><button className="nav-link-btn"><FontAwesomeIcon icon={faSearch} /> Search</button></li>
                    <li><button className="nav-link-btn"><FontAwesomeIcon icon={faCommentAlt} />Activity </button></li>
                </ul>
            </nav>
            <button className="btn"> <FontAwesomeIcon icon={faUser} /> My Account</button>
            <button className="btn-logout" onClick={handleLogout}> <FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
        </div>
    )
}

export default withRouter(Nav);