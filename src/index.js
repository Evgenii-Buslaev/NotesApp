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
  if (localStorage.getItem("notes_collection")) {
    Note._notesCollection = JSON.parse(
      localStorage.getItem("notes_collection")
    );
    sections.renderStorageSection();
    sections._setStorageHandlers();
    mode.renderMode();
  }
});
