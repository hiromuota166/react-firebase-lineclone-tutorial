import React,{ useEffect,useState,useRef } from 'react';
import SignOut from './SignOut.js';
import { db,auth } from "../firebase.js";
import SendMessage from './SendMessage.js';

function Line() {
  // messagesという名前の状態を作成し、それを変更するための方法（setMessages）も提供
  const scroll = useRef();
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
        {messages.map(({id,text,photoURL,uid}) =>(
          <div>
            <div 
              key={id}
              className = {`msg ${ 
                uid === auth.currentUser.uid ? "sent" : "received"}`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll}/>
      <div ref={scroll}></div>
    </div>
  );
}

export default Line;