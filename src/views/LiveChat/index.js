import React from 'react'
import { useState, useEffect } from 'react';
import Messages from '../../LiveChat/Messages';
import MessageInput from "../../LiveChat/MessageInput";
import io from 'socket.io-client';
function LiveChat() {

    const [socket, setSocket] = useState(null);

    useEffect(() => {
      const newSocket = io(`http://${window.location.hostname}:3000`);
      setSocket(newSocket);
      return () => newSocket.close();
    }, [setSocket]);
  return (
    <div>
        <div className="App">
     <header className="app-header">
       Disaster Live Chat
     </header>

  { socket ? (
         <div className="chat-container">
          <Messages socket={socket} />
         <MessageInput socket={socket} />
        </div>
      ) : (
         <div>Not Connected</div>
      )}

    </div>
    </div>
  )
}

export default LiveChat