import React, { ReactElement, useState } from 'react';
import Button from '@material-ui/core/Button';
// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/compat/app';
import {  Container } from '@material-ui/core';

import { validateEmail } from './utils';
import './login.css';


// const provider = new firebase.auth.GoogleAuthProvider();
// 	provider.setCustomParameters({
// 		hd: 'mydomain.com'
// 	});

export const LoginScreen = (): ReactElement => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    return console.log(validateEmail(email))
  };
  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
    return console.log(pass);
  }

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  //   alert('i be pressed');
  // };



  // const googleLogin = ():any => {
  //   const validAccount = (userEmail: String ) : Boolean => {
  //     return userEmail.split('@')[1] == 'hexagon.com';
  //   }

  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   provider.setCustomParameters({
  //     hd: 'hexagonwireless.com'
  //   });

  //   const providers = firebase.auth();
  //   console.log(providers)


  //   firebase.auth()
  //   .signInWithPopup(provider)
  // }


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

        <Button id="login-button" onClick={() => {validateEmail(email)?alert(`You have the hex domian ${email}`):alert('Im sorry, u are not authenticated') }}>
    
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

