
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import MicIcon from"@material-ui/icons/Mic"
import "./Chat.css"
import axios from "./axios"

function Chat({messages}) {
 const [input,setInput]=useState("")

  const sendMessage= async function(e){
      e.preventDefault();
      
      await axios.post("/message/new",{
        "message": input,
        "name": "Mani",
        "timestamp": "Just now",
        "received": false
      })
      setInput("");
  }


    return (
        <div className="chat">
           <div className="chat_header">
            <Avatar/>
               <div className="chat_headerInfo">
                  <h3>Sam</h3>
                  <p>Last Seen  at ...</p>
               </div>
               <div className="chat_headerright">
                   <IconButton>
                       <SearchOutlined/>
                   </IconButton>
                   <IconButton>
                       <AttachFile/>
                   </IconButton>
                   <IconButton>
                       <MoreVert/>
                   </IconButton>
               </div>
           </div>
           <div className="chat_body">
               {messages.map(message => (
               <p 
               className={`chat_message  ${message.received && 'chat_receive'}`}
               >
               <span className="chat_name">{message.name}</span>
                  {message.message}
                <span className="chat_timestamp">
                  {messages.timestamp}</span>
                  </p>
                  
                ) )}
               


               
             {/**  <p className=" chat_message chat_receive">
                    <span className="chat_name">Mani</span>
                        This is a message
                     <span className="chat_timestamp">
                       {new Date().toUTCString()}</span>
               </p>
            **/}
 
                </div>
                <div className="chat_footer">
                   <InsertEmoticon/>
                   <form>
                       <input value={input} onChange={e => setInput(e.target.value)} placeholder="Typ the Message"
                       type="text"/>
                       <button  onClick={sendMessage} type="submit">Send a Message</button>
                   </form>
                   <MicIcon/>
               </div>
              
               </div>
               

       
    )
}

export default Chat
