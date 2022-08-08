import Note from "./scripts/Note.js";

// constants

import {
  notesContainer,
  noteElem,
  noteValue,
  confirmNote,
  storage,
  menuBtns,
  menuCont,
} from "./scripts/constants.js";

// menu-navigation
menuCont.addEventListener("click", (event) => {
  if (event.target.classList.value.includes("menu-nav-btn")) {
    event.target.classList.toggle("active");
    menuBtns.forEach((elem) => {
      if (elem !== event.target) {
        elem.classList.remove("active");
      }
    });
  }
});

// note from note-input
confirmNote.addEventListener("click", () => {
  let note = new Note(noteValue.value, noteElem, storage);
  note.generateNote();
  note.renderNote(notesContainer);
  console.log(storage);

  console.log(storage);
});
