import Sections from "./scripts/Sections.js";
import Note from "./scripts/Note.js";

// constants
import {
  menuBtns,
  menuCont,
  areaCont,
  storage,
  notificationsBackground,
  removedElementsBackground,
} from "./scripts/constants.js";

// handlers
import { addNote, removeInput } from "./scripts/handlers.js";

// default main area content
let sections = new Sections(
  areaCont,
  storage,
  notificationsBackground.outerHTML,
  removedElementsBackground.outerHTML,
  () => addNote(Note),
  () => removeInput()
);

sections.renderStorageSection();
sections._setStorageHandlers();

// menu-navigation
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

// render backgrounds
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
