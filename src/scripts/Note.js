export default class Note {
  constructor(value, noteElem) {
    this.value = value;
    this._note = noteElem;
  }
  generateNote() {
    this.note = this._note.cloneNode(true);
  }

  renderNote(parent) {
    parent.appendChild(this.note);
  }
}
