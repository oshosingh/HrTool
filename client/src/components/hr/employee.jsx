import React, {useState, useEffect} from 'react'
import Sidebar from './sidebar'
import Navigation from './navigation'
import './css/home.scss'
import axios from 'axios'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {ProgressSpinner} from 'primereact/progressspinner'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Employee = (props) => {

    const [info, setInfo] = useState(null)
    const [loader, setLoader] = useState(true)
    const token = window.sessionStorage.getItem("access_token")

    useEffect(() => {
        console.log(token)
        axios.get("/api/employee", {
            "headers": {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(result => {
            setInfo(result.data.payload)
            setLoader(false)
            console.log(result.data)
        })
        .catch(err => {
            setTimeout(() => {
                setLoader(false)
            }, 5000)
        })
    }, [])

    return(
        <>
            <Navigation />
            <div className="container">
                <Sidebar />
                {loader===true ? <ProgressSpinner /> : <>
                                <div className="main">
                                    <div className="card" style={{padding: "10px"}}>
                                        <DataTable value={info} scrollable scrollHeight="80vh">
                                            <Column field="id"  header="Id" sortable></Column>
                                            <Column field="name" header="Name" sortable></Column>
                                            <Column field="email" header="Email"></Column>
                                            <Column field="gender" header="Gender" sortable></Column>
                                            <Column field="isActive" header="Is Active" sortable></Column>
                                            <Column field="on_project" header="Project Name" sortable></Column>
                                            <Column field="manager_id" header="Manager Id" sortable></Column>
                                        </DataTable>
                                    </div>
                                </div>
                            </> }
            </div>
                
        </>
    )
}

export default Employee;