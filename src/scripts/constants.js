// menu buttons
const menuBtns = document.querySelectorAll(".menu-nav-btn");
const menuCont = document.getElementById("menu-container");

// section elems
const areaCont = document.getElementById("area-container");
const storageBackground = document.getElementById("notes-background");
const notificationsBackground = document.getElementById(
  "notifications-background"
);
const removedElementsBackground = document.getElementById(
  "recycle-bin-background"
);

const noteCont = document.querySelector(".notes");

const notesInputElem = document.getElementById("note-container");

export {
  menuBtns,
  menuCont,
  areaCont,
  storageBackground,
  notificationsBackground,
  removedElementsBackground,
  notesInputElem,
  noteCont,
};
