const menuBtns = document.querySelectorAll(".menu-nav-btn");
const menuCont = document.getElementById("menu-container");

// input-note
const notesContainer = document.querySelector(".notes");
const noteElem = document.querySelector(".note");
const noteValue = document.getElementById("input-text");
const confirmNote = document.getElementById("confirm");

let storage = [];

export {
  notesContainer,
  noteElem,
  noteValue,
  confirmNote,
  storage,
  menuBtns,
  menuCont,
};
