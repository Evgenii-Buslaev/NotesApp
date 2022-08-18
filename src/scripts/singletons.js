import PopupWithMenu from "./Classes/PopupMenu.js";
import PopupWithSearch from "./Classes/PopupSearch.js";
import Mode from "./Classes/Mode.js";
import Sections from "./Classes/Sections.js";
import Note from "./Classes/Note.js";

import {
  modeBtn,
  menuHeadBtn,
  menuBtns,
  areaCont,
  storage,
  fullfilledStorageSection,
  collectionBackground,
  removedElementsBackground,
  searchBar,
  searchInput,
  closeBtn,
  storageBtn,
} from "./constants.js";

import { renderModeHandler } from "./handlers/mode.js";
import { addNote, removeInput } from "./handlers/notes.js";

let searchPopup = new PopupWithSearch(
  { searchBar, searchInput, closeBtn },
  storageBtn,
  menuBtns
);

let menuPopup = new PopupWithMenu(menuHeadBtn, menuBtns);

let mode = new Mode("dark", "light", renderModeHandler, modeBtn);

let sections = new Sections(
  areaCont,
  storage,
  fullfilledStorageSection,
  collectionBackground.outerHTML,
  removedElementsBackground.outerHTML,
  () => addNote(Note),
  () => removeInput()
);

export { sections, mode, menuPopup, searchPopup };
