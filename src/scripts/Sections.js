export default class Sections {
  constructor(storageSection, notificationsSection, recycleBinSection) {
    // html section elems
    this.storage = storageSection;
    this.notifications = notificationsSection;
    this.recycleBin = recycleBinSection;

    this._storageElems = [];
    this._notificationsElems = [];
    this._removedElems = [];
  }

  renderBackground(
    parent,
    backgroundElement,
    templateElem = "",
    inputNode = ""
  ) {
    if (inputNode !== "" && templateElem !== "") {
      parent.innerHTML =
        inputNode.outerHTML +
        templateElem.outerHTML +
        backgroundElement.outerHTML;
    } else {
      parent.innerHTML = backgroundElement.outerHTML;
    }
  }

  addNote(elem) {
    this._storageElems.push(elem);
  }

  addNotification(elem) {
    this._notificationsElems.push(elem);
  }

  addRemoved(elem) {
    this._removedElems.push(elem);
  }
}
