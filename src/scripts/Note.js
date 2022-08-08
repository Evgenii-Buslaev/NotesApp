export default class Note {
  constructor(value, noteElement, storage) {
    // note-object properties
    this.value = value;
    this._note = noteElement;
    this.id = Math.random();
    // after creating an element add it to storage
    storage.push(this);
  }

  generateNote() {
    this.element = this._note.cloneNode(true);
    this.element.querySelector(".note-value").children[0].innerText =
      this.value;
  }

  renderNote(parent) {
    parent.appendChild(this.element);
  }

  /*  deleteNote(storage) {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].id === this.id) {
        storage.splice(i, 1);
      }
    }
  } */
}
