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
        elem.addEventListener("click", this.move_note);
      }
      if (elem.id === "delete") {
        elem.addEventListener("click", this.remove_note);
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
    _notificationCollection.push(this);
  }

  editNote() {
    this.element.querySelector("p").setAttribute("contenteditable", "true");
    this.element.querySelector("p").addEventListener("blur", () => {
      this.element.querySelector("p").removeAttribute("contenteditable");
      this.value = this.element.querySelector("p").innerText;
    });
  }

  removeNote() {
    _removedCollection.push(this);
  }
}
