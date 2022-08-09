export default class Sections {
  constructor(
    parent,
    storageSection,
    notificationsSection,
    recycleBinSection,
    confirmHandler,
    clearHandler
  ) {
    // html section elems
    this.parent = parent;
    this.storage = storageSection;
    this.notifications = notificationsSection;
    this.recycleBin = recycleBinSection;

    this._confirm = confirmHandler;
    this._clear = clearHandler;

    this._storageElems = [];
    this._notificationsElems = [];
    this._removedElems = [];
  }

  _setStorageHandlers() {
    this._confirmBtn = document.getElementById("confirm");
    this._confirmBtn.addEventListener("click", this._confirm);

    this._clearBtn = document.getElementById("clear");
    this._clearBtn.addEventListener("click", this._clear);
  }

  renderStorageSection() {
    this.parent.innerHTML = this.storage;
  }

  renderNotificationsSection() {
    this.parent.innerHTML = this.notifications;
  }

  renderRemovedElemsSection() {
    this.parent.innerHTML = this.recycleBin;
  }
}
