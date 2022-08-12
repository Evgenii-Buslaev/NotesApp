import Note from "../scripts/Note.js";

export function addNote(className) {
  if (document.getElementById("input-text").value === "") {
    alert("Заметка не может быть пустой");
    return;
  }
  let note = new className(
    document.getElementById("input-text").value,
    document.querySelector(".note")
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

export function renderSavedItems(itemsArray) {
  if (itemsArray !== Note._notesCollection) {
    document.getElementById("note-container").style.opacity = "0";
  }

  document.querySelector(".notes").innerHTML = "";
  for (let i = 0; i < itemsArray.length; i++) {
    document.querySelector(".notes").appendChild(itemsArray[i].element);
    itemsArray[i].element.style.opacity = "1";
    itemsArray[i]._setHandlers();
  }
  console.log(document.querySelector(".notes").children);
}

export function pinHandler(note) {
  console.log("pin");
}
