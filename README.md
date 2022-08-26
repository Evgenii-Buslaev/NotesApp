# Notes Application

## Desctiption

This is my new application for creating notes. I developed this project to improve my OOP skills: ES6 syntax(classes), using JS and CSS modules, creating independent web-components.

- #### Technologies
  - HTML
  - CSS
  - Pure JavaScript (using modules, classes)

* #### Programming paradigm

  Object-oriented programming

* #### Arcitectural particular qualities

  - There are two singletons. One of them is for mode, the second one is for section. So, there objects contain state of application. Which mode is used and in which section the user is now.
  - The is one factory class called 'Note'. When users want to create a note, they actually create instance of Note class.
  - There are also two independent classes for popups.

* #### App features

  There are three main components: options bar, menu and notes section.

  1. At the options bar you can open the menu, open searching notes popup and also change the mode (dark or light).

  2. Using the menu buttons you can switch between sections, there are also three: creating notes section, collection (as a certain folder) and recycle bin.

  3. Notes section can be creating, collection or recycle bin. A single note is an instance of Task class. This object has some features, like editing, moving to collection, creation section or recycle bin. Notes features can be changed depending on in which section the note is at the moment. For example, you cannot pin note in the recycle bin. You are able to do this only in creation section or collection.

* #### Deployment
  You can try using my app by the following link: https://evgenii-buslaev.github.io/NotesApp/src

Thank you for checking the app out!
