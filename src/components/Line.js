import React,{ useEffect,useState } from 'react';
import SignOut from './SignOut.js';
import { db } from "../firebase.js";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
      });
  },[]);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      {/* firebase上のmessagesの情報をここからhtmlとして出していく */}
      <div className='msgs'>
        {/* photoURLはGoogleで使われているアイコン */}
        {/* map関数は配列になっていないと使えない */}
        {messages.map(({id,text,photoURL}) =>(
          <div>
            <div key={id}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Line;