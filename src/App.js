import React, { useEffect } from "react";
import "./App.css";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import Router from "./router";
import { Provider } from "react-redux";

import configureStore from "./store";




const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  emailProvider: new firebase.auth.EmailAuthProvider(),
};

const initialState = {};
const store = configureStore(initialState);

function App(props) {
  const { user, signOut, signInWithGoogle, signInWithEmailAndPassword, createUserWithEmailAndPassword } = props;

  return (
    <Provider store={store}>
      <div className="App">
        <Router
          user={user}
          signInWithEmailAndPassword={signInWithEmailAndPassword}
          signInWithGoogle={signInWithGoogle}
          signOut={signOut}
          createUserWithEmailAndPassword={createUserWithEmailAndPassword}
        
           
              
            
        />
      </div>
    </Provider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
