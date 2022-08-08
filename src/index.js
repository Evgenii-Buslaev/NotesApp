/* import Note from "./scripts/Note.js"; */
import Sections from "./scripts/Sections.js";

// constants

import {
  /* notesContainer,
  noteElem,
  noteValue,
  confirmNote,
  storage, */
  menuBtns,
  menuCont,
  backgroundCont,
  storageBackground,
  notificationsBackground,
  removedElementsBackground,
} from "./scripts/constants.js";

// choosing section

let sections = new Sections();
sections.renderBackground(backgroundCont, storageBackground);

// menu-navigation
menuCont.addEventListener("click", (event) => {
  if (event.target.classList.value.includes("menu-nav-btn")) {
    event.target.classList.toggle("active");
    menuBtns.forEach((elem) => {
      if (elem !== event.target) {
        elem.classList.remove("active");
      }
    });

    backgroundCont.style.opacity = "0";
    if (event.target.classList.value.includes("storage")) {
      setTimeout(() => {
        sections.renderBackground(backgroundCont, storageBackground);
        backgroundCont.style.opacity = "1";
      }, 500);
    }

    if (event.target.classList.value.includes("notifications")) {
      setTimeout(() => {
        sections.renderBackground(backgroundCont, notificationsBackground);
        backgroundCont.style.opacity = "1";
      }, 500);
    }

    if (event.target.classList.value.includes("recycle-bin")) {
      setTimeout(() => {
        sections.renderBackground(backgroundCont, removedElementsBackground);
        backgroundCont.style.opacity = "1";
      }, 500);
    }
  }
});

// note from note-input
/* confirmNote.addEventListener("click", () => {
  let note = new Note(noteValue.value, noteElem, storage);
  note.generateNote();
  note.renderNote(notesContainer);
  console.log(storage);

  console.log(storage);
});
 */
