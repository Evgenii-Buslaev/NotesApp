export default class Note {
  constructor(value, noteElement) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();
  }

  generateNote() {
    this.element = this._note.cloneNode(true);
    console.log(this.element);
  }

  renderNote(parent) {
    parent.appendChild(this.element);
  }
}
