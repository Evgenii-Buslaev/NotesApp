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

      note.element.querySelector("#to-collection").style.display = "block";
      note.element.querySelector("#delete").style.display = "block";
      note.element.querySelector("#to-storage").style.display = "none";
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

      note.element.querySelector("#to-collection").style.display = "none";
      note.element.querySelector("#to-storage").style.display = "block";
      note.element.querySelector("#delete").style.display = "block";
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

      note.element.querySelector("#to-storage").style.display = "block";
      note.element.querySelector("#to-collection").style.display = "block";
      note.element.querySelector("#delete").style.display = "none";
    }

    sections.renderStorageSection();
    sections._setStorageHandlers();
    mode.renderMode();
    if (localStorage.getItem("mode")) {
      let savedMode = localStorage.getItem("mode");
      console.log(savedMode);
      console.log(mode.current);
      if (savedMode !== mode.current) {
        mode.changeMode();
        mode.renderMode();
      } else {
        mode.renderMode();
      }
    }
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
