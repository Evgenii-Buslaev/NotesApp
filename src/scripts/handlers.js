import Note from "../scripts/Note.js";
import { storageBtn } from "./constants.js";

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

export function pinHandler(note) {
  console.log("pin");
}
