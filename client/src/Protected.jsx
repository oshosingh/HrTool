import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...props}) => {
    return(
        <Route {...props} render={
            (props) => {
                if(window.sessionStorage.getItem("login_status")==="true"){
                    return(
                        <Component {...props} />
                    )
                }
                else{
                    return(
                        <Redirect to="/" />
                    )
                }
            }
        } />
    )
}

export default ProtectedRoute;