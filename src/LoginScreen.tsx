import React, { ReactElement, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {  Container } from '@material-ui/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { validateEmail } from './utils';
import './login.css';





export const LoginScreen = (): ReactElement => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  let navigate = useNavigate();


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  }


  const firebaseConfig = {
    apiKey: "AIzaSyDd9bLD7ap7yOl5mCwQVJC6gqtKvirmK7k",
    authDomain: "ferry-auth.firebaseapp.com",
    projectId: "ferry-auth",
    storageBucket: "ferry-auth.appspot.com",
    messagingSenderId: "1052001856811",
    appId: "1:1052001856811:web:a886bf5fc31606c89fe96e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) {
      navigate('/about', { replace: true })
      } else {
    return 
    }
  });

const  authenticateUser = async (email: string, pass: string)=>{
  await firebaseApp.auth().signInWithEmailAndPassword(email, pass).catch(function(error){
      alert(error.message);
  },)}



  return (
    
    <Container  id="login-container" >
      <Container >
      <label id='label'>Email  </label><br></br>

        <input id="email"   required   onChange={handleEmailChange} />
        </Container>
        <Container>
        <label id='label'>Password  </label><br></br>

        <input  id="password" type='password' name="email" required   onChange={handlePassChange} />
        </Container>
        <Container >

        <Button id="login-button" onClick={() => {authenticateUser(email, pass)}}>
    
      <img   style={styles.googleButton} alt="Google sign-in"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
      Login with Google
    </Button>




        </Container>
      </Container>

  );
};
const styles = {
  googleButton: {
marginBottom:3, 
marginRight:5,
width:20
  }
}

