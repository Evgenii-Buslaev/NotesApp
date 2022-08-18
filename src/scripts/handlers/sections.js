import Note from "../Classes/Note.js";

import { sections, mode, menuPopup } from "../singletons.js";
import { menuCont, menuBtns, areaCont } from "../constants.js";
import { renderSavedItems } from "./notes.js";

// menu-navigation
menuCont.addEventListener("click", (e) => {
  if (menuPopup.expanded === true) {
    menuPopup.expandMenu();
  }
  menuActiveSections(e.target);
});

export function moveItemsBetweenSections(
  fromSectionOne,
  fromSectionTwo,
  targetSection
) {
  if (
    this.current_section === "recycle-bin" &&
    targetSection === Note._removedCollection
  ) {
    return;
  }
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

  setTimeout(() => {
    // buttons appearance
    if (targetSection == Note._folderCollection) {
      this.element.querySelector("#pin-btn").style.display = "block";
      this.element.querySelector("#pin-btn").style.opacity = "1";
      this.element.querySelector("#to-collection").style.display = "none";
      this.element.querySelector("#to-storage").style.display = "block";
      this.element.querySelector("#delete").style.display = "block";
      this.current_section = "folder";
      this.date = null;
    }
    if (targetSection == Note._notesCollection) {
      this.element.querySelector("#pin-btn").style.display = "block";
      this.element.querySelector("#pin-btn").style.opacity = "1";
      this.element.querySelector("#to-collection").style.display = "block";
      this.element.querySelector("#delete").style.display = "block";
      this.element.querySelector("#to-storage").style.display = "none";
      this.current_section = "notes";
      this.date = null;
    }
    if (targetSection == Note._removedCollection) {
      this.element.querySelector("#to-storage").style.display = "block";
      this.element.querySelector("#to-collection").style.display = "block";
      this.element.querySelector("#pin-btn").style.display = "none";
      this.current_section = "recycle-bin";
      this.date = new Date().getDate();
      this.current_date = new Date().getDate();

      // deleting a note from recycle bin after 7 days automatically
      let check = setInterval(() => {
        this.current_date = new Date().getDate();
        if (this.current_date - this.date === 7) {
          for (let i = 0; i < Note._removedCollection.length; i++) {
            if (Note._removedCollection[i].id === this.id) {
              Note._removedCollection.splice(i, 1);
            }
          }
          Note.refreshLocalStorage();
          sections.renderStorageSection();
          clearInterval(check);
        }
      }, 1000);
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
