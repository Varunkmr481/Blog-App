import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes , setNewNote] = useState([]);

  function addNote(newNote){
    
    setNewNote((prevValue)=>{
      console.log(`The previous value passed to app.jsx : ${JSON.stringify(prevValue)}`);
      return ([...prevValue , newNote]);
    })

    
  }

  function deleteNote(id){

    console.log("Item deleted !");
    console.log(`The index of the deleted item : ${id}`);

    setNewNote(
      notes.filter((item,index)=>{
        return (
          id!==index
        );
      })
    )
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onChecked={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
