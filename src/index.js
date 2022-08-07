import Note from "./scripts/Note.js";

// constants

import {
  notesContainer,
  noteElem,
  noteValue,
  confirmNote,
  storage,
} from "./scripts/constants.js";

confirmNote.addEventListener("click", () => {
  let note = new Note(noteValue.value, noteElem, storage);
  note.generateNote();
  note.renderNote(notesContainer);
  console.log(storage);
});
