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

  // deleting from static props of Note class
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
  console.log(Note._notesCollection);
  console.log(Note._folderCollection);
  console.log(Note._removedCollection);
  setTimeout(() => {
    // buttons and methods
    if (targetSection == Note._folderCollection) {
      this.element.querySelector(".collection-button").children[0].src =
        "icons/storage/storage.png";
      this.element.children[0].classList.remove("collection-button");
      this.element.children[0].classList.add("storage-button");
    }
    if (targetSection == Note._notesCollection) {
      this.element.querySelector(".collection-button").children[0].src =
        "icons/collection/collection.png";
      this.element.children[0].classList.remove("storage-button");
      this.element.children[0].classList.add("collection-button");
    }
    if (targetSection == Note._removedCollection) {
      this.element.querySelector(".note-functions").children[0].style.display =
        "none";
    }

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

  if (clickedElement.classList.value.includes("collection")) {
    setTimeout(() => {
      sections.renderCollectionSection();
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
