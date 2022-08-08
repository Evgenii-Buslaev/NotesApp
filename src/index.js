import Sections from "./scripts/Sections.js";
import Note from "./scripts/Note.js";

// constants
import {
  menuBtns,
  menuCont,
  areaCont,
  storageBackground,
  notificationsBackground,
  removedElementsBackground,
  notesInputElem,
  noteCont,
} from "./scripts/constants.js";

// default main area content
let sections = new Sections();
sections.renderBackground(
  areaCont,
  storageBackground,
  noteCont,
  notesInputElem
);

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
      sections.renderBackground(
        areaCont,
        storageBackground,
        noteCont,
        notesInputElem
      );
      areaCont.style.opacity = "1";
    }, 500);
  }

  if (clickedElement.classList.value.includes("notifications")) {
    setTimeout(() => {
      sections.renderBackground(areaCont, notificationsBackground);
      areaCont.style.opacity = "1";
    }, 500);
  }

  if (clickedElement.classList.value.includes("recycle-bin")) {
    setTimeout(() => {
      sections.renderBackground(areaCont, removedElementsBackground);
      areaCont.style.opacity = "1";
    }, 500);
  }
}
