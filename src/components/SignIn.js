// "rfce"で最初の雛形が生成できる

import React from 'react';
import firebase from "firebase/compat/app"; 
import { auth } from "../firebase.js";
import Button from '@mui/material/Button';

function SignIn() {
  function signInWithGoogle() {
    //googleに簡単に入れる関数
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>グーグルでログイン</Button>
    </div>
  );
}

export default SignIn;

//ユーズオースステート(??)firebaseのフックスが用意している
//ログイン状態をtrue or falseで確認できる