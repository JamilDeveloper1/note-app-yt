import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteProvider';

import {FaTrash} from 'react-icons/fa'

function Notes() {
    const {notes,setNotes,searchTerm,setSearchTerm} = useContext(NoteContext);



    const removeNotes = (id) => {
        const newNote = notes.filter((item,index) => index !== id);
        setNotes(newNote);
    }


    if(notes.length == ""){
        return(
            <div className='flex flex-col gap-1 items-center justify-center mt-20 sm:mt-40'>
                <p className='text-xl'>No Notes.</p>
                <p>Add Notes</p>
            </div>
        )
    }

  return (
    <div className='flex flex-wrap gap-3 '> 
        {
            notes.filter((val) =>{
                if(searchTerm == ""){
                    return val;
                }else if(val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val;
                }
            })
            .map((item,index) => (
                <div key={index} style={{background : item.color}} className='p-3  bg-white rounded-md shadow-md shadow-[#0000004d] w-full   md:w-1/3 flex flex-col gap-3'>
                    <div className='flex items-center justify-between'>
                    <p className='text-xl'>{item.title}</p>
                    <FaTrash onClick={() =>removeNotes(index)} className='text-xl cursor-pointer text-red-500'/>
                    </div>
                    <p>{item.content}</p>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm'>{item.myDate}</p>
                        <input type="color" onChange={(e) =>{
                            const newColor = e.target.value;
                            const newNote = [...notes];
                            newNote[index].color = newColor;
                            setNotes(newNote);
                        }} />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Notes
