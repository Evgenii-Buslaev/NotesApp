import Note from "../scripts/Note.js";

export function addNote(className) {
  if (document.getElementById("input-text").value === "") {
    alert("Заметка не может быть пустой");
    return;
  }
  let note = new className(
    document.getElementById("input-text").value,
    document.querySelector(".note"),
    moveHandler,
    editHandler,
    removeHandler
  );
  note.generateNote();
  note.renderNote(document.querySelector(".notes"));
  note._setHandlers();
  console.log(note);

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

export function renderSavedNotes() {
  for (let i = 0; i < Note._notesCollection.length; i++) {
    let noteSample;

    if (i > 0) {
      noteSample = document.querySelector(".note").cloneNode(true);
      noteSample.querySelector("p").innerText = Note._notesCollection[i].value;
      noteSample.id = Note._notesCollection[i].id;
      document.querySelector(".notes").appendChild(noteSample);
    } else {
      noteSample = document.querySelector(".note");
      noteSample.querySelector("p").innerText = Note._notesCollection[i].value;
      noteSample.id = Note._notesCollection[i].id;
    }
  }
}
export function moveHandler(note) {
  console.log(1);
}

export function editHandler(note) {
  console.log(1);
}

export function removeHandler(note) {
  console.log(1);
}
