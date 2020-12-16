import "./css-form.css";
import "./css-style.css";
import firebase, { auth, db } from "./js-firebase.js";
import {
  FORM,
  MENU,
  username,
  email,
  password,
  accountsRef,
  Ulabel,
  Elabel,
  Plabel
} from "./js-data";
//------------------------------------------------------------------------------------------
//Local Data
let connection = "success";
//------------------------------------------------------------------------------------------
window.onbeforeunload = () => {
  auth.signOut();
}
//------------------------------------------------------------------------------------------
//  time function
/*function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}*/
//------------------------------------------------------------------------------------------
//  SingUp
window.signUp = function signUp() {
  let SignUpStatus = "success" //  by default
  //  prevent No Information SignUp
  if(username.value == "" || email.value == "" || password.value == "") {
    SignUpStatus = "fail"
    alert("Required information is missing");
  } else {
    if(SignUpStatus == "success") {
      accountsRef.where("username","==",username.value).get().then(function(snapshot) {
        snapshot.forEach(function () {
          SignUpStatus = "fail";
          username.classList.add("error");
          Ulabel.classList.add("error");
          alert("Username is taken")
        })
        accountsRef.where("email","==",email.value).get().then(function(snapshot) {
          snapshot.forEach(function () {
            SignUpStatus = "fail";
            email.classList.add("error");
            Elabel.classList.add("error");
            alert("Email adress is already in use")
          })
          if(SignUpStatus == "success") {
            alert("yay!");
          }
        })
      })
    }
  }
};
//  Auth SignUp
function authSignUp() {
  let authSignUpStatus = "success"; //  by default
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => {
    authSignUpStatus = "fail"
    email.classList.add("error");
    Elabel.classList.add("error");
  })
  if(authSignUpStatus == "success") {
    //success => proceding to Database_SignUp
    databaseSignUp();
  }  
}
//  Database SignUp
function databaseSignUp() {
  accountsRef.doc(username.value).set({
    credits: 0,
    username: username.value,
    email: email.value,
    password: password.value,
    rank: "bronze_I",
    role: "user",
    ref: `/accounts/${username.value}`
  });
  //success => proceding to Define_User_Data
  //setUserData();
}
// Define user account informations
function setUserData() {
  const userRef = db.doc(`accounts/${username.value}`);

  const Fusername = userRef.getString("username");
  const Femail = userRef.getString("email");
  const Frank = userRef.getString("rank");
  const Frole = userRef.getString("role");
  const Fcredits = userRef.getString("credits");

  console.info(Fusername+"  "+Femail+"  "+Frank+"  "+Frole+"  "+Fcredits)
}
//------------------------------------------------------------------------------------------
//  SingIn
window.signIn = function signIn() {
  //  check if { username+email+password } match
  /*if (
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
  }*/
};
//------------------------------------------------------------------------------------------
//  SingOut
window.signOut = function signOut() {
  auth.signOut();
  FORM.style.display = "flex";
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
