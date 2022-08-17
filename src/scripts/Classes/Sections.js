import Note from "./Note.js";
import { renderSavedItems } from "../handlers/notes.js";
import { mode } from "../singletons.js";

export default class Sections {
  static currentSection = "notes";
  constructor(
    parent,
    storageSection,
    fullfieldStorageSection,
    collectionSection,
    recycleBinSection,
    confirmHandler,
    clearHandler
  ) {
    // html section elems
    this.parent = parent;
    this.storage = storageSection;
    this.fullfieldStorage = fullfieldStorageSection;
    this.notifications = collectionSection;
    this.recycleBin = recycleBinSection;

    this._confirm = confirmHandler;
    this._clear = clearHandler;
  }

  _setStorageHandlers() {
    this._confirmBtn = document.getElementById("confirm");
    this._confirmBtn.addEventListener("click", this._confirm);

    this._clearBtn = document.getElementById("clear");
    this._clearBtn.addEventListener("click", this._clear);
  }

  renderStorageSection() {
    Sections.currentSection = "notes";
    if (Note._notesCollection.length === 0) {
      this.parent.innerHTML = this.storage;
    } else {
      this.parent.innerHTML = this.fullfieldStorage;
      renderSavedItems(Note._notesCollection);
    }
    mode.renderMode();
  }

  renderCollectionSection() {
    Sections.currentSection = "collection";
    if (Note._folderCollection.length === 0) {
      this.parent.innerHTML = this.notifications;
    } else {
      this.parent.innerHTML = this.fullfieldStorage;
      renderSavedItems(Note._folderCollection);
    }
    mode.renderMode();
  }

  renderRemovedElemsSection() {
    Sections.currentSection = "recycle-bin";
    if (Note._removedCollection.length === 0) {
      this.parent.innerHTML = this.recycleBin;
    } else {
      this.parent.innerHTML = this.fullfieldStorage;
      renderSavedItems(Note._removedCollection);
    }
    mode.renderMode();
  }
}
