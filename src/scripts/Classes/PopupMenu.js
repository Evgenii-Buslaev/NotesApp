export default class PopupWithMenu {
  constructor(menuLogoBtn, menuButtons) {
    this.expanded = false;
    this.menu_logo = menuLogoBtn;
    this.menu_buttons = menuButtons;

    this.area_cont = document.getElementById("area-container");
    this.menu_cont = document.getElementById("menu-container");

    this.menu_headings = document.querySelectorAll(".menu-heading");
  }

  _setHandler() {
    this.menu_logo.addEventListener("click", this.expandMenu.bind(this));
  }

  expandMenu() {
    if (window.screen.width <= 750) {
      if (this.expanded === false) {
        this.expanded = true;
        this.area_cont.style.opacity = "0";
        this.menu_cont.style.zIndex = "10";
        for (let i = 0; i < this.menu_buttons.length; i++) {
          this.menu_buttons[i].style.width = "60vw";
        }
        this.menu_headings.forEach((elem) => {
          elem.style.opacity = "1";
          elem.style.fontSize = "1rem";
          elem.style.width = "30vw";
        });
      } else {
        this.expanded = false;
        this.area_cont.style.opacity = "1";
        for (let i = 0; i < this.menu_buttons.length; i++) {
          this.menu_buttons[i].style.width = "50px";
        }
        this.menu_headings.forEach((elem) => {
          elem.style.opacity = "0";
          elem.style.fontSize = "0";
          elem.style.width = "0";
        });
      }
    } else {
      for (let i = 0; i < this.menu_buttons.length; i++) {
        this.menu_buttons[i].style.width = "20vw";
      }
      this.menu_headings.forEach((elem) => {
        elem.style.opacity = "1";
        elem.style.fontSize = "1rem";
        elem.style.width = "30vw";
      });
    }
  }
}
