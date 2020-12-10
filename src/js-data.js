import style from "./css-form.css";
import { db, snapshot } from "./js-firebase";
import { FieldPath } from "firebase";
// My Data (html)
export var Home = document.getElementById("Home");
export var FORM = document.getElementById("FORM");
export var MENU = document.getElementById("MENU");
export var formcontainer = document.getElementById("formcontainer");
export var Ftitle = document.getElementById("title");
export var Fsubtitle = document.getElementById("subtitle");
export var btncontainer = document.getElementById("btncontainer");
export var signUpbtn = document.getElementById("signUpbtn");
export var signInbtn = document.getElementById("signInbtn");
export var signOutbtn = document.getElementById("signOutbtn");
export var menuNav = document.getElementById("menuNav");
//-----------------------------------------------------------
export let App = document.getElementById("App");
export var deviceW = window.innerWidth;
export var deviceH = window.innerHeight;
export var BaseW = 1536;
export var BaseH = 722;
export var Wratio = `${deviceW / BaseW}`;
export var Hratio = `${deviceH / BaseH}`;

export var email = document.getElementById("email");
export var password = document.getElementById("password");
export var username = document.getElementById("username");
export var UserID = Math.floor(Math.random() * 1000000) + 100000;

export var SignUpStatus = "success";
//export var authSignUpStatus = "success"

export let accountsRef = db.collection("accounts");

//export { snapshot } from "firebase"
