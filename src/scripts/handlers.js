export function addNote(className) {
  let note = new className(
    document.getElementById("input-text").value,
    document.querySelector(".note")
  );
  note.generateNote();
  note.renderNote(document.querySelector(".notes"));
}
