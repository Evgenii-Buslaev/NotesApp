import Note from "./scripts/Classes/Note.js";

// singletons
import { sections, mode } from "./scripts/singletons.js";

// default mode
mode._setHandler();

// default main area content
sections.renderStorageSection();
sections._setStorageHandlers();

// working with localStorage
localStorage.clear();

window.addEventListener("load", () => {
  if (localStorage.getItem("itemsArray")) {
    Note._notesCollection = JSON.parse(localStorage.getItem("itemsArray"))[0];
    Note._folderCollection = JSON.parse(localStorage.getItem("itemsArray"))[1];
    Note._removedCollection = JSON.parse(localStorage.getItem("itemsArray"))[2];
    console.log(Note._notesCollection);
    console.log(Note._folderCollection);
    console.log(Note._removedCollection);

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
