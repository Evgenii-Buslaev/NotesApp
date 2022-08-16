import Note from "./scripts/Classes/Note.js";
import { moveItemsBetweenSections } from "./scripts/handlers/sections.js";
import {
  sections,
  mode,
  menuPopup,
  searchPopup,
} from "./scripts/singletons.js";

// search popup
searchPopup._setHandler();

// menu popup
menuPopup._setHandler();

// default mode
mode._setHandler();

// default main area content
sections.renderStorageSection();
sections._setStorageHandlers();

// working with localStorage
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
      if (Note._notesCollection[i].pinned === true) {
        note.pinned === false;
        Note._notesCollection.splice(i, 1, note);
        note.generateNote();
        note.renderNote(document.querySelector(".notes"));
        note._setHandlers();
        note.pinNote();
      } else {
        Note._notesCollection.splice(i, 1, note);
        note.generateNote();
        note.renderNote(document.querySelector(".notes"));
        note._setHandlers();
        note.element.querySelector(".note-functions").style.display = "flex";
      }
      note.element.querySelector("#to-collection").style.display = "block";
      note.element.querySelector("#delete").style.display = "block";
      note.element.querySelector("#to-storage").style.display = "none";
      note.element.querySelector("#pin-btn").style.opacity = "1";
      note.current_section = "notes";
    }

    Note._folderCollection = JSON.parse(localStorage.getItem("itemsArray"))[1];
    for (let i = 0; i < Note._folderCollection.length; i++) {
      let note = new Note(
        Note._folderCollection[i].value,
        document.querySelector(".note"),
        moveItemsBetweenSections
      );
      if (Note._folderCollection[i].pinned === true) {
        note.pinned === false;
        Note._folderCollection.splice(i, 1, note);
        note.generateNote();
        note.renderNote(document.querySelector(".notes"));
        note._setHandlers();
        note.pinNote();
      } else {
        Note._folderCollection.splice(i, 1, note);
        note.generateNote();
        note.renderNote(document.querySelector(".notes"));
        note._setHandlers();
        note.element.querySelector(".note-functions").style.display = "flex";
      }
      note.element.querySelector("#to-collection").style.display = "none";
      note.element.querySelector("#to-storage").style.display = "block";
      note.element.querySelector("#delete").style.display = "block";
      note.element.querySelector("#pin-btn").style.opacity = "1";
      note.current_section = "folder";
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
      note.current_section = "recycle-bin";
    }
  }
  sections.renderStorageSection();
  sections._setStorageHandlers();
  mode.renderMode();
  if (localStorage.getItem("mode")) {
    if (localStorage.getItem("mode") !== mode.current) {
      mode.changeMode();
      mode.renderMode();
    } else {
      mode.renderMode();
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
