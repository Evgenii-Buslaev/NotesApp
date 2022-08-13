import Mode from "./scripts/Mode.js";
import Sections from "./scripts/Sections.js";
import Note from "./scripts/Note.js";

// variables
import {
  body,
  modeIcon,
  notes,
  searchBar,
  menuBtns,
  menuCont,
  areaCont,
  storage,
  fullfilledStorageSection,
  notificationsBackground,
  removedElementsBackground,
} from "./scripts/constants.js";

// handlers
import { addNote, removeInput, renderModeHadler } from "./scripts/handlers.js";

// default mode
let mode = new Mode("dark", "light", renderModeHadler);
mode._setHandler();

// default main area content
let sections = new Sections(
  areaCont,
  storage,
  fullfilledStorageSection,
  notificationsBackground.outerHTML,
  removedElementsBackground.outerHTML,
  () => addNote(Note),
  () => removeInput()
);

sections.renderStorageSection();
sections._setStorageHandlers();

// working with localStorage
localStorage.clear();

window.addEventListener("load", () => {
  if (localStorage.getItem("notes_collection")) {
    Note._notesCollection = JSON.parse(
      localStorage.getItem("notes_collection")
    );
    console.log(Note._notesCollection);
    sections.renderStorageSection();
    sections._setStorageHandlers();
  }
});

// menu-navigation

// render backgrounds function
function renderBackgrounds(clickedElement) {
  areaCont.style.opacity = "0";
  if (clickedElement.classList.value.includes("storage")) {
    setTimeout(() => {
      sections.renderStorageSection();
      sections._setStorageHandlers();
      areaCont.style.opacity = "1";
    }, 500);
  }

  if (clickedElement.classList.value.includes("notifications")) {
    setTimeout(() => {
      sections.renderNotificationsSection();
      areaCont.style.opacity = "1";
    }, 500);
  }

  if (clickedElement.classList.value.includes("recycle-bin")) {
    setTimeout(() => {
      sections.renderRemovedElemsSection();
      areaCont.style.opacity = "1";
    }, 500);
  }
}

// menu-events
menuCont.addEventListener("click", (event) => {
  if (event.target.classList.value.includes("menu-nav-btn")) {
    event.target.classList.toggle("active");
    menuBtns.forEach((elem) => {
      if (elem !== event.target) {
        elem.classList.remove("active");
      }
    });
    renderBackgrounds(event.target);
  } else {
    if (event.target.id !== "menu-container") {
      event.target.parentNode.classList.toggle("active");
      menuBtns.forEach((elem) => {
        if (elem !== event.target.parentNode) {
          elem.classList.remove("active");
        }
      });
      renderBackgrounds(event.target.parentNode);
    }
  }
});
