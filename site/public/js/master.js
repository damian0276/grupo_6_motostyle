window.addEventListener("load", () => {
  if (document.getElementById("boton")) {
    //captura de elementos
    let checkBoxNavBar = document.getElementById("boton");
    let primerMenu = document.getElementById("primer-menu");
    let navBar = document.getElementById("navbar-lateral");

    checkBoxNavBar.addEventListener("change", () => {
      if (checkBoxNavBar.checked) {
        navBar.classList.add("blur");
        primerMenu.classList.add("open");
      } else {
        navBar.classList.remove("blur");
        primerMenu.classList.remove("open");
      }
    });
    /*
    navBar.addEventListener("click", () => {
      if (navBar.classList.contains("blur")) {
        checkBoxNavBar.checked = false;
        navBar.classList.remove("blur");
        primerMenu.classList.remove("open");
      }
    });*/
  }
});
