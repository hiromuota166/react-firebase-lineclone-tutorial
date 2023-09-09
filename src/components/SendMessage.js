import React, { useState } from 'react';
import { db,auth } from '../firebase.js';
import firebase from "firebase/compat/app"; 
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


function SendMessage() {
  // messagesという名前の状態を作成し、それを変更するための方法（setMessages）も提供
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();

    // 現在ログインしているメンバーのユーザーidと画像をとってきた
    const { uid,photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }
  return (
    <div>
      {/* onSubmitはenterキーを押したらと言う意味 */}
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          {/* e.target.valueはinputに入る文字列のこと */}
        <Input 
        style={{
          width: "78%",
          fontSize: "15px",
          fontWeight: "550",
          marginLeft: "5px",
          marginBottom: "-3px",
        }}
        placeholder='メッセージを入力してください' 
        type='text' 
        onChange={(e) => setMessage(e.target.value)} 
        value={message}/>
        <SendIcon />
        </div>
      </form>
    </div>
  )
}

export default SendMessage;