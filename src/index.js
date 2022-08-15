import Note from "./scripts/Classes/Note.js";

import { moveItemsBetweenSections } from "./scripts/handlers/sections.js";
// singletons
import { sections, mode } from "./scripts/singletons.js";

// default mode
mode._setHandler();

// default main area content
sections.renderStorageSection();
sections._setStorageHandlers();

// working with localStorage
/* localStorage.clear(); */

window.addEventListener("load", () => {
  // creating note items from localStorage
  if (localStorage.getItem("itemsArray")) {
    Note._notesCollection = JSON.parse(localStorage.getItem("itemsArray"))[0];
    for (let i = 0; i < Note._notesCollection.length; i++) {
      let note = new Note(
        Note._notesCollection[i].value,
        document.querySelector(".note"),
        moveItemsBetweenSections
      );
      Note._notesCollection.splice(i, 1, note);
      note.generateNote();
      note.renderNote(document.querySelector(".notes"));
      note._setHandlers();
    }

    Note._folderCollection = JSON.parse(localStorage.getItem("itemsArray"))[1];
    for (let i = 0; i < Note._folderCollection.length; i++) {
      let note = new Note(
        Note._folderCollection[i].value,
        document.querySelector(".note"),
        moveItemsBetweenSections
      );
      Note._folderCollection.splice(i, 1, note);
      note.generateNote();
      note.renderNote(document.querySelector(".notes"));
      note._setHandlers();
    }

    Note._removedCollection = JSON.parse(localStorage.getItem("itemsArray"))[2];
    for (let i = 0; i < Note._removedCollection.length; i++) {
      let note = new Note(
        Note._removedCollection[i].value,
        document.querySelector(".note"),
        moveItemsBetweenSections
      );
      Note._removedCollection.splice(i, 1, note);
      note.generateNote();
      note.renderNote(document.querySelector(".notes"));
      note._setHandlers();
    }

    sections.renderStorageSection();
    sections._setStorageHandlers();
    mode.renderMode();
  }
});

// working with layout
let checking = setInterval(() => {
  if (window.innerWidth < 920) {
    mode.renderMode();
  }
  if (window.innerWidth <= 500) {
    mode.renderMode();
    clearInterval(checking);
  }
}, 500);
