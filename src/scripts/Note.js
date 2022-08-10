export default class Note {
  static _notesCollection = [];
  static _notificationCollection = [];
  static _removedCollection = [];

  constructor(
    value,
    noteElement,
    _toNotifHandler,
    _editHandler,
    _removeHandler
  ) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();

    // handlers
    this.move_note = _toNotifHandler;
    this.edit_note = _editHandler;
    this.remove_note = _removeHandler;
  }

  _setHandlers() {
    document.getElementById(this.id).addEventListener("click", this.move_note);
    document.getElementById(this.id).addEventListener("click", this.edit_note);
    document
      .getElementById(this.id)
      .addEventListener("click", this.remove_note);
  }

  generateNote() {
    this.element = this._note.cloneNode(true);
    this.element.querySelector("p").innerText = this.value;
    this.element.id = this.id;
  }

  renderNote(parent) {
    parent.appendChild(this.element);
  }

  moveToNotification() {
    _notificationCollection.push(this);
  }

  editNote() {
    console.log(1);
  }

  removeNote() {
    _removedCollection.push(this);
  }
}
