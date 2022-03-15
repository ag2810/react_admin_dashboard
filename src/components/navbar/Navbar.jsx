import React, {useContext} from 'react'
import "./navbar.scss"
import { WbSunny, SearchOutlined, DarkModeOutlined, NotificationsNoneOutlined, LanguageOutlined, FullscreenExitOutlined, ChatBubbleOutlineOutlined, ListOutlined } from '@mui/icons-material'
import { DarkModeContext } from "../../context/darkModeContext"

function Navbar() {

    const {darkMode, dispatch} = useContext(DarkModeContext);
    
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search...." />
                    <SearchOutlined />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icons" />
                    </div>
                    <div className="item">
                        {
                            darkMode 
                                ? <WbSunny className="icons" onClick={() => dispatch({type: "TOGGLE"})} />
                                : <DarkModeOutlined className="icons" onClick={() => dispatch({type: "TOGGLE"})} />
                        }
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icons" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icons" />
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icons" />
                    </div>
                    <div className="item">
                        <ListOutlined className="icons" />
                    </div>
                    <div className="item">
                        <img 
                            src="https://images.pexels.com/photos/5012112/pexels-photo-5012112.jpeg"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar