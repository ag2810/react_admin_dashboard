import React, {useContext} from 'react'
import "./sidebar.scss"
import {Dashboard, People, Inventory, BorderOuter, LocalShipping, Assessment, NotificationsActive, Psychology, Settings, AccountCircle, Logout} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext"


function Sidebar() {

    const {dispatch} = useContext(DarkModeContext);

    return (
        <div className="sidebar">
            <Link to="/" style={{textDecoration : "none"}}>
                <div className="top">
                    <span className="logo">Admin</span>
                </div>
            </Link>
            <hr />
            <div className="center">
                <ul>
                    <p className ="title">MAIN</p>
                    <Link to="/" style={{textDecoration : "none"}}>
                        <li>
                            <Dashboard className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className ="title">LISTS</p>
                    <Link to='/users' className="link">
                        <li>
                            <People className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{textDecoration : "none"}}>
                        <li>
                            <Inventory className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <BorderOuter className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className ="title">USEFUL</p>

                    <li>
                        <Assessment className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActive className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className ="title">SETTING</p>

                    <li>
                        <Settings className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <Psychology className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <Settings className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className ="title">USER</p>
                    <li>
                        <AccountCircle className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <Logout className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})} ></div>
                <div className="colorOption" onClick={() => dispatch({type: "DARK"})} ></div>
            </div>
        </div>
    )
}

export default Sidebar