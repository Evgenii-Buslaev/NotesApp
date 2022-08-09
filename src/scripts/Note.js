export default class Note {
  constructor(value, noteElement) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();
  }

  generateNote() {
    this.element = this._note.cloneNode(true);
    this.element.querySelector("p").innerText = this.value;
  }

  renderNote(parent) {
    parent.appendChild(this.element);
  }
}
