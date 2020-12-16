import {
  //Home,
  FORM,
  MENU,
  formcontainer,
  deviceW,
  deviceH,
  //BaseW,
  //BaswH,
  Wratio,
  username,
  Ulabel,
  Elabel,
  Plabel,
  email,
  password
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
username.addEventListener("focus", () => {
  username.classList.remove("error");
  Ulabel.classList.remove("error");
})
email.addEventListener("focus", () => {
  email.classList.remove("error");
  Elabel.classList.remove("error");
})
password.addEventListener("focus", () => {
  password.classList.remove("error");
  Plabel.classList.remove("error");
})
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
