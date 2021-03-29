import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar,IconButton } from '@material-ui/core';
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
                <div className="sidebar_header">
                  <Avatar src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/breaking-bad-poster.jpg?itok=qdiOblkE"/>
                <div className="sidebar_headerright">
                <IconButton>
                 <DonutLargeIcon/>
                 </IconButton>
                 <IconButton>
                     <ChatIcon/>
                 </IconButton>
                 <IconButton>
                     <MoreVertIcon/>
                 </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchcontainer">
                    <SearchOutlined/>
                    <input placeholder="Search or Start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar_chat">
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
