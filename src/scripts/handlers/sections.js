import Note from "../Classes/Note.js";

import { sections, mode } from "../singletons.js";
import { menuCont, menuBtns, areaCont } from "../constants.js";
import { renderSavedItems } from "./notes.js";

// menu-navigation

menuCont.addEventListener("click", (e) => {
  menuActiveSections(e.target);
});

export function moveItemsBetweenSections(
  fromSectionOne,
  fromSectionTwo,
  targetSection
) {
  targetSection.push(this);
  for (let i = 0; i < fromSectionOne.length; i++) {
    if (this.id === fromSectionOne[i].id) {
      fromSectionOne[i].element.style.opacity = "0";
      fromSectionOne.splice(i, 1);
      Note.changedState = fromSectionOne;
    }
  }
  for (let i = 0; i < fromSectionTwo.length; i++) {
    if (this.id === fromSectionTwo[i].id) {
      fromSectionTwo[i].element.style.opacity = "0";
      fromSectionTwo.splice(i, 1);
      Note.changedState = fromSectionTwo;
    }
  }
  setTimeout(() => {
    renderSavedItems(Note.changedState);
  }, 500);
}

export function menuActiveSections(clickedMenuBtn) {
  if (clickedMenuBtn.classList.value.includes("menu-nav-btn")) {
    clickedMenuBtn.classList.toggle("active");
    menuBtns.forEach((elem) => {
      if (elem !== clickedMenuBtn) {
        elem.classList.remove("active");
      }
    });
    renderBackgrounds(clickedMenuBtn);
  } else {
    if (clickedMenuBtn.id !== "menu-container") {
      clickedMenuBtn.parentNode.classList.toggle("active");
      menuBtns.forEach((elem) => {
        if (elem !== clickedMenuBtn.parentNode) {
          elem.classList.remove("active");
        }
      });
      renderBackgrounds(clickedMenuBtn.parentNode);
    }
  }
}

export function renderBackgrounds(clickedElement) {
  areaCont.style.opacity = "0";
  if (clickedElement.classList.value.includes("storage")) {
    setTimeout(() => {
      clickedElement.classList.add("active");
      sections.renderStorageSection();
      sections._setStorageHandlers();
      mode.renderMode();
      areaCont.style.opacity = "1";
    }, 500);
  }

  if (clickedElement.classList.value.includes("notifications")) {
    setTimeout(() => {
      sections.renderNotificationsSection();
      mode.renderMode();
      areaCont.style.opacity = "1";
    }, 500);
  }

  if (clickedElement.classList.value.includes("recycle-bin")) {
    setTimeout(() => {
      sections.renderRemovedElemsSection();
      mode.renderMode();
      areaCont.style.opacity = "1";
    }, 500);
  }
}
