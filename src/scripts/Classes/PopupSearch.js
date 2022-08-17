import Sections from "./Sections.js";
import Note from "./Note.js";
import { closeBtn, searchBar, searchInput, storageBtn } from "../constants.js";
import { mode } from "../singletons.js";
import { renderSavedItems } from "../handlers/notes.js";

export default class PopupWithSearch {
  static foundItems = [];
  constructor() {
    this.element = searchBar;
    this.input = searchInput;
    this.clear = closeBtn;
    this.popup = "closed";
  }

  _setHandler() {
    this.input.addEventListener("click", this.renderSearchArea.bind(this));
    this.input.addEventListener("change", this.searchNotes.bind(this));
    this.element.children[0].addEventListener(
      "click",
      this.openPopup.bind(this)
    );
    this.clear.addEventListener("click", this.clearInput.bind(this));
  }

  renderSearchArea() {
    if (Sections.currentSection !== "notes") {
      storageBtn.click();
    }
  }

  openPopup() {
    if (window.screen.width <= 500) {
      if (this.popup === "closed") {
        this.popup = "opened";
        this.element.style.width = "80vw";
        this.element.style.backgroundColor = "rgb(94, 93, 93)";
        this.input.style.width = "80vw";
        this.clear.style.opacity = "1";
      } else {
        return;
      }
    }
  }

  searchNotes() {
    if (this.input.value === "") {
      alert("Введите что-нибудь");
      return;
    }
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
      this.renderSearchArea();
    } else {
      renderSavedItems(PopupWithSearch.foundItems);
      if (Note._notesCollection.length === 0) {
        document.getElementById("notes-background").style.display = "none";
      }
      this.clearInput();
    }
  }

  clearInput() {
    this.input.value = "";
    PopupWithSearch.foundItems.length = 0;
    this.renderSearchArea();
    if (window.screen.width <= 500) {
      if (this.popup === "opened") {
        this.popup = "closed";
        this.element.style.width = "20vw";
        this.element.style.backgroundColor = "rgb(94, 93, 93)";
        this.input.style.width = "0";
        this.clear.style.opacity = "0";
        mode.renderMode();
      }
    }
  }
}
