import { closeBtn, notes, searchBar, searchInput } from "../constants.js";
import Note from "./Note.js";

export default class PopupWithSearch {
  constructor() {
    this.element = searchBar;
    this.input = searchInput;
    this.clear = closeBtn;
  }

  _setHandler() {
    this.input.addEventListener("change", this.searchNotes.bind(this));
    this.input.addEventListener("click", this.openPopup.bind(this));
    this.clear.addEventListener("click", this.clearInput.bind(this));
  }

  openPopup() {
    if (window.screen.width <= 500) {
      this.element.style.width = "80vw";
      this.element.style.backgroundColor = "#ffffff";
      this.input.style.width = "80vw";
    }
  }

  searchNotes() {
    Note._notesCollection.forEach((elem) => {
      if (elem.value.indexOf(this.input.value) != -1) {
        console.log(elem);
      }
    });
    Note._folderCollection.forEach((elem) => {
      if (elem.value.indexOf(this.input.value) != -1) {
        console.log(elem);
      }
    });
    Note._removedCollection.forEach((elem) => {
      if (elem.value.indexOf(this.input.value) != -1) {
        console.log(elem);
      }
    });
  }

  clearInput() {
    this.input.value = "";
  }
}
