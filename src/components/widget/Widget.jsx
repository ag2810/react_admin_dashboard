import React from 'react'

import "./widget.scss"
import { KeyboardArrowUp, PersonOutlined, ShoppingCartOutlined, MonetizationOnOutlined, AccountBalanceWalletOutlined } from '@mui/icons-material'

function Widget({ type }) {

    let data;

    const amount = 100;
    const diff = 20;

    switch(type) {
        case "user" : 
            data = {
                title : "USERS",
                isMoney : false,
                link : "See all Users",
                icon : (
                    <PersonOutlined 
                        className="icon" 
                        style={{
                            color: "red",
                            backgroundColor: "rgba(255, 0, 0, 0.2)"
                        }}
                    />
                )
            }
            break;

        case "order" : 
            data = {
                title : "ORDERS",
                isMoney : false,
                link : "See all Orders",
                icon : (
                    <ShoppingCartOutlined 
                        className="icon" 
                        style={{
                            color: "rgb(2, 158, 124)",
                            backgroundColor: "rgba(2, 158, 124, 0.2)"
                        }}    
                    />
                )
            }
            break;

        case "earning" : 
            data = {
                title : "EARNINGS",
                isMoney : true,
                link : "See all Earnings",
                icon : (
                    <MonetizationOnOutlined 
                        className="icon" 
                        style={{
                            color: "rgb(0, 128, 255)",
                            backgroundColor: "rgba(0, 128, 255, 0.2)"
                        }}    
                    />
                )
            }
            break;

        case "balance" : 
            data = {
                title : "BALANCE",
                isMoney : true,
                link : "See Details",
                icon : (
                    <AccountBalanceWalletOutlined 
                        className="icon" 
                        style={{
                            color: "rgb(252, 177, 3)",
                            backgroundColor: "rgba(252, 177, 3, 0.2)"
                        }}
                    />
                )
            }
            break;

        default :
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
