import { sections } from "../singletons.js";

export default class Note {
  static _notesCollection = [];
  static _folderCollection = [];
  static _removedCollection = [];
  static changedState = Note._notesCollection;

  static refreshLocalStorage() {
    if (localStorage.getItem("itemsArray")) {
      localStorage.removeItem("itemsArray");
    }
    localStorage.setItem(
      "itemsArray",
      JSON.stringify([
        Note._notesCollection,
        Note._folderCollection,
        Note._removedCollection,
      ])
    );
    console.log(JSON.parse(localStorage.getItem("itemsArray")));
  }

  constructor(value, noteElement, _movementHandler) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();
    this.current_section = "notes";
    this.pinned = false;
    // movment handler
    this.movement_handler = _movementHandler;
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
        elem.addEventListener("click", this.pinNote.bind(this));
      }
      if (elem.id === "to-storage") {
        elem.addEventListener("click", this.moveToMain.bind(this));
      }
      if (elem.id === "to-collection") {
        elem.addEventListener("click", this.moveToFolder.bind(this));
      }
      if (elem.id === "delete") {
        elem.addEventListener("click", this.removeNote.bind(this));
        elem.addEventListener("click", this.deleteNote.bind(this));
      }
      if (elem.id === "edit") {
        elem.addEventListener("click", this.editNote.bind(this));
      }
    });
  }

  renderNote(parent) {
    parent.appendChild(this.element);
  }

  pinNote() {
    if (this.pinned === false) {
      this.element.querySelector(".note-functions").style.display = "none";
      this.buttons.forEach((elem) => {
        if (elem.id === "pin-btn") {
          elem.children[0].src = "icons/note/pinned.png";
        }
      });
      this.pinned = true;
    } else {
      this.element.querySelector(".note-functions").style.display = "flex";
      this.buttons.forEach((elem) => {
        if (elem.id === "pin-btn") {
          elem.children[0].src = "icons/note/pin.png";
        }
      });
      this.pinned = false;
    }
    Note.refreshLocalStorage();
  }

  editNote() {
    this.element.querySelector("p").setAttribute("contenteditable", "true");
    this.element.querySelector("p").addEventListener("blur", () => {
      this.element.querySelector("p").removeAttribute("contenteditable");
      this.value = this.element.querySelector("p").innerText;
    });
    Note.refreshLocalStorage();
  }

  moveToFolder() {
    this.movement_handler(
      Note._notesCollection,
      Note._removedCollection,
      Note._folderCollection
    );
    Note.refreshLocalStorage();
  }

  moveToMain() {
    this.movement_handler(
      Note._folderCollection,
      Note._removedCollection,
      Note._notesCollection
    );
    Note.refreshLocalStorage();
  }

  removeNote() {
    this.movement_handler(
      Note._notesCollection,
      Note._folderCollection,
      Note._removedCollection
    );
    Note.refreshLocalStorage();
  }

  deleteNote() {
    if (this.current_section === "recycle-bin") {
      this.checking = confirm("Вы уверены, что хотите удалить эту заметку?");
      if (this.checking === true) {
        for (let i = 0; i < Note._removedCollection.length; i++) {
          if (Note._removedCollection[i].id === this.id) {
            Note._removedCollection.splice(i, 1);
          }
        }
        sections.renderRemovedElemsSection();
        Note.refreshLocalStorage();
      }
    }
  }
}
