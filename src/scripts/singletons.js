import Mode from "./Classes/Mode.js";
import Sections from "./Classes/Sections.js";
import Note from "./Classes/Note.js";

import {
  areaCont,
  storage,
  fullfilledStorageSection,
  collectionBackground,
  removedElementsBackground,
} from "./constants.js";

import { renderModeHandler } from "./handlers/mode.js";
import { addNote, removeInput } from "./handlers/notes.js";

let mode = new Mode("dark", "light", renderModeHandler);

let sections = new Sections(
  areaCont,
  storage,
  fullfilledStorageSection,
  collectionBackground.outerHTML,
  removedElementsBackground.outerHTML,
  () => addNote(Note),
  () => removeInput()
);

export { sections, mode };
