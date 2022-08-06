import Note from "./scripts/Note.js";

// constants

import {
  notesContainer,
  noteElem,
  noteValue,
  confirmNote,
} from "./scripts/constants.js";

confirmNote.addEventListener("click", () => {
  let note = new Note(noteValue.value, noteElem);
  note.generateNote();
  note.renderNote(notesContainer);
});
