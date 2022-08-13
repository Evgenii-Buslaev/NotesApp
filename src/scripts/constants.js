// elems for mode 
const body = document.querySelector('body')
const note = document.querySelector('.note')

// menu buttons
const menuBtns = document.querySelectorAll(".menu-nav-btn");
const menuCont = document.getElementById("menu-container");

// section elems
const areaCont = document.getElementById("area-container");

// sections
const notesInputElem = document.getElementById("note-container");
const noteCont = document.querySelector(".notes");
const storageBackground = document.getElementById("notes-background");

let storage =
  notesInputElem.outerHTML + noteCont.outerHTML + storageBackground.outerHTML;
const storageBtn = document.querySelector(".storage");

let fullfilledStorageSection = notesInputElem.outerHTML + noteCont.outerHTML;

const notificationsBackground = document.getElementById(
  "notifications-background"
);
const removedElementsBackground = document.getElementById(
  "recycle-bin-background"
);

export {
  body, 
  note,
  menuBtns,
  menuCont,
  storageBtn,
  areaCont,
  storage,
  fullfilledStorageSection,
  notificationsBackground,
  removedElementsBackground,
};
