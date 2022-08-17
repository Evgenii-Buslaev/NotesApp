import { closeBtn, searchBar, searchInput, storageBtn } from "../constants.js";
import { renderSavedItems } from "../handlers/notes.js";
import { sections } from "../singletons.js";
import Note from "./Note.js";

export default class PopupWithSearch {
  static foundItems = [];
  constructor() {
    this.element = searchBar;
    this.input = searchInput;
    this.clear = closeBtn;
  }

  _setHandler() {
    this.input.addEventListener("click", this.renderSearchArea.bind(this));
    this.element
      .querySelector("img")
      .addEventListener("click", this.searchNotes.bind(this));
    this.element.children[0].addEventListener(
      "click",
      this.openPopup.bind(this)
    );
    this.clear.addEventListener("click", this.clearInput.bind(this));
  }

  renderSearchArea() {
    storageBtn.click();
  }

  openPopup() {
    if (window.screen.width <= 500) {
      this.element.style.width = "80vw";
      this.element.style.backgroundColor = "rgb(94, 93, 93)";
      this.input.style.width = "80vw";
    }
  }

  searchNotes() {
    Note._notesCollection.forEach((elem) => {
      if (elem.value.indexOf(this.input.value) != -1) {
        PopupWithSearch.foundItems.push(elem);
      }
    });
    Note._folderCollection.forEach((elem) => {
      if (elem.value.indexOf(this.input.value) != -1) {
        PopupWithSearch.foundItems.push(elem);
      }
    });
    Note._removedCollection.forEach((elem) => {
      if (elem.value.indexOf(this.input.value) != -1) {
        PopupWithSearch.foundItems.push(elem);
      }
    });
    if (PopupWithSearch.foundItems.length === 0) {
      alert("Таких заметок не найдено.");
      this.clearInput();
      return;
    }
    renderSavedItems(PopupWithSearch.foundItems);
  }

  clearInput() {
    this.input.value = "";
    PopupWithSearch.foundItems.length = 0;
    sections.renderStorageSection();
    sections._setStorageHandlers();
    /*  if (window.screen.width <= 500) {
      this.element.style.width = "80vw";
      this.element.style.backgroundColor = "rgb(94, 93, 93)";
      this.input.style.width = "80vw";
    } */
  }
}
