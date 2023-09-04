import firebase from "firebase/compat/app"; 
import "firebase/compat/auth";
import "firebase/compat/firestore";
//firebaseが使えるようになる。importしたファイルでしか使えない

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxT2bpzqPy3ap6rhE5qUP_zKKC0oYoNmk",
  authDomain: "line-clone-tutorial-b8bdd.firebaseapp.com",
  projectId: "line-clone-tutorial-b8bdd",
  storageBucket: "line-clone-tutorial-b8bdd.appspot.com",
  messagingSenderId: "910589012951",
  appId: "1:910589012951:web:fcbe3ce354cd6dfb09b992"
});

//初期化が完了した
//今回使いたいのはfirebaseのデータベース機能
const db = firebaseApp.firestore();
//今回使いたいのは認証情報
const auth = firebase.auth();

export { db, auth };