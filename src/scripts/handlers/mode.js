import { body, modeIcon, searchBar, notes } from "../constants.js";

export function renderModeHandler(currentMode, dark, mode) {
  if (currentMode === dark) {
    body.style.backgroundColor = mode.dark_background_colors.body;

    for (let i = 0; i < notes.length; i++) {
      notes[i].style.backgroundColor = mode.dark_background_colors.items_color;
    }

    modeIcon.src = mode.dark_background_colors.src;

    if (window.screen.width <= 870) {
      searchBar.style.backgroundColor = mode.dark_background_colors.body;
    } else {
      searchBar.style.backgroundColor = "rgb(94, 93, 93)";
    }
  } else {
    body.style.backgroundColor = mode.light_background_colors.body;

    for (let i = 0; i < notes.length; i++) {
      notes[i].style.backgroundColor = mode.light_background_colors.items_color;
    }

    modeIcon.src = mode.light_background_colors.src;

    if (document.documentElement.clientWidth <= 870) {
      searchBar.style.backgroundColor = mode.light_background_colors.body;
    } else {
      searchBar.style.backgroundColor = "rgb(94, 93, 93)";
    }
  }
}
