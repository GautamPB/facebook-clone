import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import VideoIcon from '@material-ui/icons/OndemandVideo'
import MarketIcon from '@material-ui/icons/Storefront'
import FlagIcon from '@material-ui/icons/Flag'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ChatIcon from '@material-ui/icons/Chat'
import BellIcon from '@material-ui/icons/Notifications'
import DropDownIcon from '@material-ui/icons/ArrowDropDown'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://freepngimg.com/thumb/facebook/62487-bluetie-icons-computer-facebook-login-icon-email-thumb.png"
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header__middle">
                <div
                    className="header__option
                header__option--active"
                >
                    <HomeIcon />
                </div>

                <div className="header__option">
                    <FlagIcon />
                </div>

                <div className="header__option">
                    <VideoIcon />
                </div>

                <div className="header__option">
                    <MarketIcon />
                </div>

                <div className="header__option">
                    <GroupIcon />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Gautam</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <BellIcon />
                </IconButton>
                <IconButton>
                    <DropDownIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
