import React from 'react'

import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {Edit} from '@mui/icons-material'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

function Single() {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            <Edit style={{fontSize : 15}} />
                            Edit
                        </div>
                        <h1 className="title">
                            Information
                        </h1>
                        <div className="item">
                            <img 
                                className="itemImage"
                                alt=""
                                src="https://images.pexels.com/photos/5262452/pexels-photo-5262452.jpeg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+1 213 453 67</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">Elton St. 234 Garden Yd. Network</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                        
                        </div>
                    </div>

                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending" />
                    </div>
                </div>

                <div className="bottom">
                    <h1 className="title">
                        Last Transactions
                    </h1>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single
