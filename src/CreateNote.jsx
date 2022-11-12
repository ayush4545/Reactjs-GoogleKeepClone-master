import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNote=(props) => {
    const[expand,setExpand]=useState(false)
    const [note,setNote]=useState({
        title:'',
        content:'',
    })

  const inputEvent=(event)=>{
      const {name,value}=event.target;
      setNote((prevData)=>{
        return{
            ...prevData,
            [name]:value

        }
      })

  }  

  const addEvent= ()=>{
     props.passNote(note)

     setNote({
         title:'',
         content:'',
     })
  }

  const expandIt=()=>{
    setExpand(true)
  }
  const shrink=()=>{
    setExpand(false)
  }
  return (
    <>
   <div className="main_note">
     <form>
 { expand?<input type="text" name="title" placeholder="Title" autoComplete='off' value={note.title} onChange={inputEvent}/>: null}
         <textarea rows='' cols='' name="content"placeholder='Write a note...' value={note.content} onChange={inputEvent} onClick={expandIt} onDoubleClick={shrink}>
  
         </textarea> 
         {expand?<Button className='btn' onClick={addEvent}><AddIcon  className='plus_sign'/></Button>: null}
     </form>


   </div>


    </>
  );
}

export default CreateNote;