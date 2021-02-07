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

    useEffect(() => {
        const token = window.sessionStorage.getItem("access_token")
        axios.get("/api/employee", {
            "headers": {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(result => {
            setInfo(result.data.payload)
            setLoader(false)
        })
        .catch(err => {
            setLoader(false)
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
                                        <DataTable value={info} scrollable scrollHeight="65vh" emptyMessage="Nothing Found"
                                                paginator rows={10} rowsPerPageOptions={[10, 20, 30, 40]}
                                            >
                                            <Column field="id"  header="Id" filter filterPlaceholder="Search By Id" sortable></Column>
                                            <Column field="name" header="Name" filter filterPlaceholder="Search By Name" sortable></Column>
                                            <Column field="email" header="Email"></Column>
                                            <Column field="gender" header="Gender" filter filterPlaceholder="Search By Gender" sortable></Column>
                                            <Column field="isActive" header="Is Active" sortable></Column>
                                            <Column field="on_project" header="Project Name" filter filterPlaceholder="Search By Project" sortable></Column>
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