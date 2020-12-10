//import { render } from "react-dom";
//import React, { Component } from "react";
import "./css-form.css";
import "./css-style.css";
import firebase, { auth, db } from "./js-firebase.js";
import {
  FORM,
  MENU,
  username,
  email,
  password,
  SignUpStatus,
  accountsRef,
  Usernames,
  authSignUpStatus
} from "./js-data";
import { exists } from "firebase";
//------------------------------------------------------------------------------------------
//Local Data
let connection = "success";
//------------------------------------------------------------------------------------------
window.onbeforeunload = () => {
  firebase.auth().signOut();
};
//------------------------------------------------------------------------------------------
//  SingUp
window.signUp = function signUp() {
  let SignUpStatus = "success"; //  by default
  //  prevent No Information SignUp
  if (username.value == "" || email.value == "" || password.value == "") {
    SignUpStatus = "fail";
    alert("Required informations missing");
  } else if (SignUpStatus == "success") {
    //  make lowercase (to do)
    //  check if username exists
    accountsRef
      .where("username", "==", username.value)
      .get()
      .then(function (snapshot) {
        snapshot.forEach(function (data) {
          //forEach does not matter => only 1 at a time should exist
          SignUpStatus = "fail";
          alert("Username is already taken");
        });
      });
  } else if (SignUpStatus == "success") {
    //  check if email exists
    accountsRef
      .where("email", "==", email.value)
      .get()
      .then(function (snapshot) {
        snapshot.forEach(function (data) {
          //forEach does not matter => only 1 at a time should exist
          SignUpStatus = "fail";
          alert("Email Adress is already assigned to an account");
        });
      });
  } else {
    if (SignUpStatus == "success") {
      authSignUp();
    }
  }
};
//  Auth SignUp
function authSignUp() {
  var authSignUpStatus = "success"; //  by default
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => {
    authSignUpStatus = "fail";
    alert(e.message);
  });

  //alert("Signed Up")
  /*
    setUserData();//  call userdata function
    */
}
// Define user account informations
/*function setUserData() {
    .once('value').then(function(snapshot) {
      const Fusername = snapshot.getString('username);
      const Femail = snapshot.child('email').val();
      const Frank = snapshot.child('rank').val();
      const Fcredits = snapshot.child('credits').val();
      console.log(Fusername+"  "+Femail+"  "+Frank+"  "+Fcredits)
      databaseSignUp();// call database SignUp function
    })
};*/
//  Database SignUp
/*function databaseSignUp() {
    REFaccounts.child(username.value).set({
      username: username.value,
      email: email.value,
      password: password.value,
      credits: 10,
      rank: "bronze_I"
    });
  }*/
//------------------------------------------------------------------------------------------
//  SingIn
/*window.signIn = function signIn() {
  //  check if { username+email+password } match
  if (
    REFuser.child("username").equalTo(username.value) &&
    REFuser.child("email").equalTo(email.value) &&
    REFuser.child("password").equalTo(password.value)
  ) {
    // Informations -> Verified
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => alert(e.message));
  } else {
    alert("informations do NOT match")
  }
};*/
//------------------------------------------------------------------------------------------
//  SingOut
window.signOut = function signOut() {
  auth.signOut();
  FORM.style.display = "block";
  MENU.style.display = "none";
  alert("Signed Out");
};
//------------------------------------------------------------------------------------------
//  (No)User Active
auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    alert("Active User " + email);
    LoginSuccess();
    console.log("connection = " + connection);
    // signed in
  } else {
    //alert("No Active User");
    LoginFail();
    console.log("connection = " + connection);
    //no user is signed in
  }
  //console.log(Connection)
});
//------------------------------------------------------------------------------------------
//  LogSuccess / LogFail
console.log(`(TEST)connection = ${connection}`);

function LoginSuccess() {
  connection = "success";
  FORM.style.display = "none";
  MENU.style.display = "flex";
}
function LoginFail() {
  connection = "fail";
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
