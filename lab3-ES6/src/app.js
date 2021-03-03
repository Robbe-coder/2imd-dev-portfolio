
class Note {
    constructor(title) {
      this.title = title;
      this.notes = [];
      // HINT🤩 this.element = this.createElement(title);
    }
  
    createElement(title) {
      let newNote = document.createElement("li");
      newNote.innerHTML=title;
      newNote.addEventListener('click', this.remove.bind(newNote));
      
      // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));
  
      return newNote;
    }
  
    add() {
        
       
        app.taskList.appendChild(this.createElement(this.title));
      // HINT🤩
      // this function should append the note to the screen somehow
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
        
        let note;

       if (localStorage.getItem("notes")=== null){
           note= [];
           note.push(this.title);
           localStorage.setItem("notes",JSON.stringify(note));
           console.log(note);
        }
        else{
            note = localStorage.getItem("notes");
            note = JSON.parse(note);
            note.push(this.title);
            localStorage.setItem("notes",JSON.stringify(note));
            console.log(note);

        }
      
    }
  
    remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      app.taskList.removeChild(this);
    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
        this.taskList = document.querySelector("#taskList");
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
        this.txtTodo = document.querySelector("#taskInput");
        this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      // this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
    }
  
    createNote(e) {
        if(e.key === "Enter"){
            e.preventDefault();
            let note = new Note(this.txtTodo.value);
            note.add();
            this.reset();
            note.saveToStorage();
            
        
        }
        
      // this function should create a new note by using the Note() class
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // clear the text field with .reset in this class
      // if (e.key === "Enter")
    }
  
    reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value="";
    }
  }
  
  let app = new App();

  
  