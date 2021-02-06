import React from 'react'
import './css/home.scss'
import Navigation from './navigation'
import Sidebar from './sidebar'

function Home(props){
    return(
        <>
            <Navigation />
            <div className="container">
                <Sidebar />

                <div className="main">
                    <div className="child">
                            <div className="content">
                            </div>
                            <div className="content">
                            </div>
                            <div className="content">
                            </div>
                            <div className="content">
                            </div>
                        </div>
                </div>
            </div>
        </>
    )

}

export default Home;