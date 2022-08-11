import Note from "../scripts/Note.js";
import { renderSavedItems } from "./handlers.js";

export default class Sections {
  constructor(
    parent,
    storageSection,
    fullfieldStorageSection,
    notificationsSection,
    recycleBinSection,
    confirmHandler,
    clearHandler
  ) {
    // html section elems
    this.parent = parent;
    this.storage = storageSection;
    this.fullfieldStorage = fullfieldStorageSection;
    this.notifications = notificationsSection;
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
    if (Note._notesCollection.length === 0) {
      this.parent.innerHTML = this.storage;
    } else {
      this.parent.innerHTML = this.fullfieldStorage;
      renderSavedItems(Note._notesCollection);
    }
  }

  renderNotificationsSection() {
    if (Note._notificationCollection.length === 0) {
      this.parent.innerHTML = this.notifications;
      console.log(Note._notificationCollection.length);
    } else {
      this.parent.innerHTML = this.fullfieldStorage;
      renderSavedItems(Note._notificationCollection);
    }
  }

  renderRemovedElemsSection() {
    if (Note._removedCollection.length === 0) {
      this.parent.innerHTML = this.recycleBin;
      console.log(Note._removedCollection.length);
    } else {
      this.parent.innerHTML = this.fullfieldStorage;
      renderSavedItems(Note._removedCollection);
    }
  }
}
