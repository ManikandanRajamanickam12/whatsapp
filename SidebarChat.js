import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
    return (
        <div className="sidebarchats">
          <Avatar/> 
          <div className="sidebarchat_info">
              <h2>Sam</h2>
              <p>Busy</p>
              </div> 
        </div>
    )
}

export default SidebarChat
