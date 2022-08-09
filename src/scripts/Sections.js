export default class Sections {
  constructor(
    parent,
    storageSection,
    notificationsSection,
    recycleBinSection,
    handlerInputClick
  ) {
    // html section elems
    this.parent = parent;
    this.storage = storageSection;
    this.notifications = notificationsSection;
    this.recycleBin = recycleBinSection;

    this._storageElems = [];
    this._notificationsElems = [];
    this._removedElems = [];
  }

  renderStorageSection() {
    this.parent.innerHTML = this.storage;
  }
  _setStorageHandler() {}

  renderNotificationsSection() {
    this.parent.innerHTML = this.notifications;
  }

  renderRemovedElemsSection() {
    this.parent.innerHTML = this.recycleBin;
  }
}
