import React, { useState } from "react";

function CreateArea(props) {

  const [fullNote , setFullNote]=useState({
    title : "",
    content : ""
  });

  function handleOnChange(event){
    const {name , value } = event.target ; 

    console.log("hhhh");

    setFullNote((prevValue)=>{
      console.log(prevValue);
      return{
        ...prevValue,
        [name] : value,
      }
    })
  }

  function handleAddNote(event){

    //To prevent the default action
    event.preventDefault();

    //To add the note
    props.onAdd(fullNote);

    //To reset the form
    setFullNote({
      title : "",
      content : ""
    });

  }

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <input name="title" placeholder="Title Of Your Blog" onChange={handleOnChange} value={fullNote.title}/>
        <textarea name="content" placeholder="Write Your Content here..." rows="3" onChange={handleOnChange} value={fullNote.content} />
        <button type="submit" >Post</button>
      </form>
    </div>
  );
}

export default CreateArea;
