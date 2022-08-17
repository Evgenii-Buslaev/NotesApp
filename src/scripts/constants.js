// elems for mode
const body = document.querySelector("body");
const modeIcon = document.querySelector('img[id="mode"]');
const notes = document.getElementsByClassName("note");

// menu section
const menuBtns = document.querySelectorAll(".menu-nav-btn");
const menuCont = document.getElementById("menu-container");

const menuHeadBtn = document.querySelector(".menu-btn");

// search section
const searchInput = document.getElementById("search");
const searchBar = document.querySelector(".search-bar");
const closeBtn = document.getElementById("close-btn");

// section elems
const areaCont = document.getElementById("area-container");

// sections
const notesInputElem = document.getElementById("note-container");
const noteCont = document.querySelector(".notes");
const storageBackground = document.getElementById("notes-background");

let storage =
  notesInputElem.outerHTML + noteCont.outerHTML + storageBackground.outerHTML;
const storageBtn = document.querySelector(".storage");

let fullfilledStorageSection = notesInputElem.outerHTML + noteCont.outerHTML;

const collectionBackground = document.getElementById("collection-background");
const removedElementsBackground = document.getElementById(
  "recycle-bin-background"
);

export {
  body,
  modeIcon,
  notes,
  searchBar,
  searchInput,
  closeBtn,
  menuBtns,
  menuCont,
  menuHeadBtn,
  storageBtn,
  areaCont,
  storage,
  fullfilledStorageSection,
  collectionBackground,
  removedElementsBackground,
};
