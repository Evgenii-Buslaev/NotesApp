let removedSample = {
  removed: false,
};

export function addNote(className) {
  let note = new className(
    document.getElementById("input-text").value,
    document.querySelector(".note")
  );
  note.generateNote();
  note.renderNote(document.querySelector(".notes"));

  let notesCollection = document.querySelectorAll(".note");
  console.log(notesCollection);

  if (removedSample.removed === false) {
    notesCollection[0].remove();
    removedSample.removed = true;
  }

  document.getElementById("notes-background")?.remove();

  document.getElementById("input-text").value = "";
}

export function removeInput() {
  document.getElementById("input-text").value = "";
}
