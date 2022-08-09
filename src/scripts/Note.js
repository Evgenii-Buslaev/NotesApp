export default class Note {
  constructor(value, noteElement) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();

    // collection array
    this._notesCollection = [];
  }

  generateNote() {
    this.element = this._note.cloneNode(true);
    this.element.querySelector("p").innerText = this.value;

    this._notesCollection.push(this.element);
  }

  renderNote(parent) {
    parent.appendChild(this.element);
  }
}
