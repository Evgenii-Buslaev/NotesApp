export default class Note {
  static _notesCollection = [];
  static _folderCollection = [];
  static _removedCollection = [];
  static changedState = Note._notesCollection;

  constructor(value, noteElement, _movementHandler) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();
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
        elem.addEventListener("click", this.pin_note);
      }
      if (elem.classList.value === "collection-button") {
        elem.addEventListener("click", this.moveToFolder.bind(this));
      }
      if (elem.classList.value === "storage-button") {
        elem.addEventListener("click", this.moveToMain.bind(this));
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

  moveToFolder() {
    this.movement_handler(
      Note._notesCollection,
      Note._removedCollection,
      Note._folderCollection
    );
  }

  moveToMain() {
    this.movement_handler(
      Note._folderCollection,
      Note._removedCollection,
      Note._notesCollection
    );
  }

  removeNote() {
    this.movement_handler(
      Note._notesCollection,
      Note._folderCollection,
      Note._removedCollection
    );
  }
}
