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
    this.clear.addEventListener("click", this.clearInput.bind(this));
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
