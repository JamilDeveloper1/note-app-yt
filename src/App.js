import React, { useContext } from 'react'
import { NoteContext } from './context/NoteProvider'
import Notes from './components/Notes';
import {FaSearch} from 'react-icons/fa'

function App() {

    const {title,content,color,notes,setTitle,setContent,setNotes,addNote,openNote,handleClick,searchTerm,setSearchTerm} = useContext(NoteContext);

  return (
    <div className='flex flex-col gap-5 p-5'>
        <h1 className='text-2xl font-bold'>Note App</h1>
        <div className='flex items-center gap-1 border border-slate-400 p-1 rounded-2xl'>
<FaSearch/>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search Notes...' className='w-11/12 outline-none bg-transparent' />
        </div>
<button onClick={handleClick} className='fixed bottom-3 right-3 font-bold w-[50px] flex items-center justify-center text-white text-3xl h-[50px] rounded-full bg-slate-400 '>+</button>
        <div className={` ${openNote ? 'scale-100' : 'scale-0'} duration-300 transition-all
         bg-white shadow-md shadow-[#00000057] p-3 w-4/5 sm:w-2/3 md:1/2 
         rounded-md flex flex-col gap-3 absolute left-1/2 top-1/2 
         -translate-x-1/2 -translate-y-1/2 `
         }>
           <h1 className='text-xl '>Add Note</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title...' type="text" className='outline-none p-1 border-b border-slate-400' />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Content...' className='outline-none resize-none p-1 ' cols="30" rows="10"></textarea>
            <button onClick={addNote} className='w-1/5  border border-slate-400 p-1 rounded-md'>Add</button>
        </div>
        <Notes />



    </div>
  )
}

export default App