// menu buttons
const menuBtns = document.querySelectorAll(".menu-nav-btn");
const menuCont = document.getElementById("menu-container");

// section elems

const areaCont = document.getElementById("area-container");

// storage
const notesInputElem = document.getElementById("note-container");
const inputValue = document.getElementById("input-text");
const storageBackground = document.getElementById("notes-background");
const noteCont = document.querySelector(".notes");

const storage =
  notesInputElem.outerHTML + noteCont.outerHTML + storageBackground.outerHTML;

const notificationsBackground = document.getElementById(
  "notifications-background"
);
const removedElementsBackground = document.getElementById(
  "recycle-bin-background"
);

export {
  menuBtns,
  menuCont,
  areaCont,
  storage,
  notificationsBackground,
  removedElementsBackground,
};
