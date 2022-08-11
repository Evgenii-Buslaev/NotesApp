import Note from "../scripts/Note.js";

export function addNote(className) {
  if (document.getElementById("input-text").value === "") {
    alert("Заметка не может быть пустой");
    return;
  }
  let note = new className(
    document.getElementById("input-text").value,
    document.querySelector(".note"),
    pinHandler,
    moveHandler,
    removeHandler
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
  console.log(className._notesCollection);
}

export function removeInput() {
  document.getElementById("input-text").value = "";
}

export function renderSavedItems(itemsArray) {
  if (itemsArray !== Note._notesCollection) {
    document.getElementById("note-container").style.opacity = "0";
  }

  for (let i = 0; i < itemsArray.length; i++) {
    let noteSample;

    if (i > 0) {
      noteSample = document.querySelector(".note").cloneNode(true);
      noteSample.querySelector("p").innerText = itemsArray[i].value;
      noteSample.id = itemsArray[i].id;
      document.querySelector(".notes").appendChild(noteSample);
    } else {
      noteSample = document.querySelector(".note");
      noteSample.querySelector("p").innerText = itemsArray[i].value;
      noteSample.id = itemsArray[i].id;
    }
  }
}

export function pinHandler(note) {
  console.log("pin");
}

export function moveHandler(note) {
  console.log("move");
}

export function editHandler(note) {
  console.log("edit");
}

export function removeHandler(note) {
  console.log("remove");
}
