import {
  //Home,
  FORM,
  MENU,
  formcontainer,
  //Ftitle,
  //Fsubtitle,
  //btncontainer,
  //signUpbtn,
  //signInbtn,
  //signOutbtn,
  //App,
  deviceW,
  deviceH,
  //BaseW,
  //BaswH,
  Wratio,
  username
  //Hratio,
} from "./js-data";
import "./css-form.css";
//------------------------------------------------------------------------------------------
renderform();
function renderform() {//FORM.style.display = "none";
//MENU.style.display = "flex";
  if (deviceH > deviceW) {
    formcontainer.style.fontSize = `${Wratio * 2.8}em`;

    MENU.style.fontSize = `${Wratio * 3.5}em`;
  } else {
    formcontainer.style.fontSize = `${Wratio}em`;
  }
  /* UI Alternating command line */

  /* UI Alternating command line */
  console.log(`${deviceW} || ${deviceH}`);
}
//------------------------------------------------------------------------------------------

window.openNav = function openNav() {
  document.getElementById("menuNav").style.width = "14em";
};

window.closeNav = function closeNav() {
  document.getElementById("menuNav").style.width = "0";
};

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
