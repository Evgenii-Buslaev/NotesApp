// menu buttons
const menuBtns = document.querySelectorAll(".menu-nav-btn");
const menuCont = document.getElementById("menu-container");

// section elems
const backgroundCont = document.getElementById("area-container");
const storageBackground = document.getElementById("notes-background");
const notificationsBackground = document.getElementById(
  "notifications-background"
);
const removedElementsBackground = document.getElementById(
  "recycle-bin-background"
);

// input-note
const notesContainer = document.querySelector(".notes");
const notesInputElem = document.getElementById("note-container");
const noteElem = document.querySelector(".note");
const noteValue = document.getElementById("input-text");
const confirmNote = document.getElementById("confirm");

export {
  menuBtns,
  menuCont,
  backgroundCont,
  storageBackground,
  notificationsBackground,
  removedElementsBackground,
  notesContainer,
  notesInputElem,
  noteElem,
  noteValue,
  confirmNote,
};
