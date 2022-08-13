export default class Mode {
  constructor(dark, light, modeHandler) {
    // state
    this.dark_mode = dark;
    this.light_mode = light;
    this.current = light;

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
    document
      .querySelector(".mode")
      .addEventListener("click", () => this.changeMode());
    document
      .querySelector(".mode")
      .addEventListener("click", () => this.renderMode());
  }

  changeMode() {
    if (this.current === this.light_mode) {
      this.current = this.dark_mode;
    } else {
      this.current = this.light_mode;
    }
  }

  renderMode() {
    this.mode_handler(this.current, this.dark_mode, this);
  }
}
