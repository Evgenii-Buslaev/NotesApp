export default class Mode {
  constructor(dark, light, modeHandler, modeBtn) {
    // state
    this.dark_mode = dark;
    this.light_mode = light;
    this.current = light;
    this.toggle_button = modeBtn;

    // values
    this.light_background_colors = {
      body: "rgb(190, 190, 190)",
      src: "icons/options-bar/mode/dark.png",
      items_color: "rgb(168, 175, 140)",
    };
    this.dark_background_colors = {
      body: "rgb(78, 76, 76)",
      src: "icons/options-bar/mode/light.png",
      items_color: "rgb(67, 94, 112)",
    };

    // handlers
    this.mode_handler = modeHandler;
  }

  _setHandler() {
    this.toggle_button.addEventListener("click", () => this.changeMode());
    this.toggle_button.addEventListener("click", () => this.renderMode());
  }

  changeMode() {
    if (this.current === this.light_mode) {
      this.current = this.dark_mode;
    } else {
      this.current = this.light_mode;
    }
    this.refreshLocalStorage();
  }

  renderMode() {
    this.mode_handler(this.current, this.dark_mode, this);
  }

  refreshLocalStorage() {
    if (localStorage.getItem("mode")) {
      localStorage.removeItem("mode");
    }
    localStorage.setItem("mode", this.current);
  }
}
