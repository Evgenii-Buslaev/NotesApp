import { renderSavedItems } from "./handlers.js";

export default class Note {
  static _notesCollection = [];
  static _notificationCollection = [];
  static _removedCollection = [];
  static changedState = Note._notesCollection;

  constructor(value, noteElement) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();
  }

  generateNote() {
    this.element = this._note.cloneNode(true);
    this.element.querySelector("p").innerText = this.value;
    this.element.id = this.id;
  }

  _setHandlers() {
    this.buttons = this.element.querySelectorAll("div");
    this.buttons.forEach((elem) => {
      if (elem.id === "pin-btn") {
        elem.addEventListener("click", this.pin_note);
      }
      if (elem.id === "to-notifications") {
        elem.addEventListener("click", this.moveToNotification.bind(this));
      }
      if (elem.id === "delete") {
        elem.addEventListener("click", this.removeNote.bind(this));
      }
      if (elem.id === "edit") {
        elem.addEventListener("click", this.editNote.bind(this));
      }
    });
  }

  renderNote(parent) {
    parent.appendChild(this.element);
  }

  editNote() {
    this.element.querySelector("p").setAttribute("contenteditable", "true");
    this.element.querySelector("p").addEventListener("blur", () => {
      this.element.querySelector("p").removeAttribute("contenteditable");
      this.value = this.element.querySelector("p").innerText;
    });
  }

  moveToNotification() {
    Note._notificationCollection.push(this);
    for (let i = 0; i < Note._notesCollection.length; i++) {
      if (this.id === Note._notesCollection[i].id) {
        Note._notesCollection[i].element.style.opacity = "0";
        Note._notesCollection.splice(i, 1);
        Note.changedState = Note._notesCollection;
      }
    }
    for (let i = 0; i < Note._removedCollection.length; i++) {
      if (this.id === Note._removedCollection[i].id) {
        Note._removedCollection[i].element.style.opacity = "0";
        Note._removedCollection.splice(i, 1);
        Note.changedState = Note._removedCollection;
      }
    }
    setTimeout(() => {
      console.log(Note.changedState);
      renderSavedItems(Note.changedState);
    }, 500);
  }

  removeNote() {
    Note._removedCollection.push(this);
    for (let i = 0; i < Note._notesCollection.length; i++) {
      if (this.id === Note._notesCollection[i].id) {
        Note._notesCollection[i].element.style.opacity = "0";
        Note._notesCollection.splice(i, 1);
        Note.changedState = Note._notesCollection;
      }
    }
    for (let i = 0; i < Note._notificationCollection.length; i++) {
      if (this.id === Note._notificationCollection[i].id) {
        Note._notificationCollection[i].element.style.opacity = "0";
        Note._notificationCollection.splice(i, 1);
        Note.changedState = Note._notificationCollection;
      }
    }
    setTimeout(() => {
      console.log(Note.changedState);
      renderSavedItems(Note.changedState);
    }, 500);
  }
}
