import Note from "../scripts/Note.js";
import { body, modeIcon, searchBar, storageBtn, notes } from "./constants.js";

// mode part
export function renderModeHadler(currentMode, dark, mode) {
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

// input part
export function addNote(className) {
  if (document.getElementById("input-text").value === "") {
    alert("Заметка не может быть пустой");
    return;
  }
  let note = new className(
    document.getElementById("input-text").value,
    document.querySelector(".note"),
    moveItemsBetweenSections
  );
  note.generateNote();
  note.renderNote(document.querySelector(".notes"));
  note._setHandlers();

  let notesCollection = document.querySelectorAll(".note");
  if (className._notesCollection.length === 0) {
    notesCollection[0].remove();
  }

  document.getElementById("notes-background")?.remove();

  document.getElementById("input-text").value = "";

  className._notesCollection.push(note);
  if (localStorage.getItem("notes_collection")) {
    localStorage.removeItem("notes_collection");
  }
  localStorage.setItem(
    "notes_collection",
    JSON.stringify(className._notesCollection)
  );
}

export function removeInput() {
  document.getElementById("input-text").value = "";
}

// sections part
export function moveItemsBetweenSections(
  fromSectionOne,
  fromSectionTwo,
  targetSection
) {
  targetSection.push(this);
  for (let i = 0; i < fromSectionOne.length; i++) {
    if (this.id === fromSectionOne[i].id) {
      fromSectionOne[i].element.style.opacity = "0";
      fromSectionOne.splice(i, 1);
      Note.changedState = fromSectionOne;
    }
  }
  for (let i = 0; i < fromSectionTwo.length; i++) {
    if (this.id === fromSectionTwo[i].id) {
      fromSectionTwo[i].element.style.opacity = "0";
      fromSectionTwo.splice(i, 1);
      Note.changedState = fromSectionTwo;
    }
  }
  setTimeout(() => {
    renderSavedItems(Note.changedState);
  }, 500);
}

// items part
export function renderSavedItems(itemsArray) {
  if (itemsArray !== Note._notesCollection) {
    document.getElementById("note-container").style.opacity = "0";
  } else {
    if (!itemsArray.length) {
      storageBtn.click();
    }
  }
  document.querySelector(".notes").innerHTML = "";
  for (let i = 0; i < itemsArray.length; i++) {
    document.querySelector(".notes").appendChild(itemsArray[i].element);
    itemsArray[i].element.style.opacity = "1";
  }
}

export function pinHandler(note) {
  console.log("pin");
}
