export default class Note {
  static _notesCollection = [];
  static _notificationCollection = [];
  static _removedCollection = [];

  constructor(
    value,
    noteElement,
    _pinHandler,
    _moveHandler,
    _editHandler,
    _removeHandler
  ) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();

    // handlers
    this.pin_note = _pinHandler;
    this.move_note = _moveHandler;
    this.remove_note = _removeHandler;
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

  moveToNotification() {
    Note._notificationCollection.push(this);
    for (let i = 0; i < Note._notesCollection.length; i++) {
      if (this.id === Note._notesCollection[i].id) {
        Note._notesCollection.splice(i, 1);
      }
    }
    console.log(Note._notesCollection);
    console.log(Note._notificationCollection);
  }

  editNote() {
    this.element.querySelector("p").setAttribute("contenteditable", "true");
    this.element.querySelector("p").addEventListener("blur", () => {
      this.element.querySelector("p").removeAttribute("contenteditable");
      this.value = this.element.querySelector("p").innerText;
    });
  }

  removeNote() {
    Note._removedCollection.push(this);
    for (let i = 0; i < Note._notesCollection.length; i++) {
      if (this.id === Note._notesCollection[i].id) {
        Note._notesCollection.splice(i, 1);
      }
    }
    console.log(Note._notesCollection);
    console.log(Note._removedCollection);
  }
}
