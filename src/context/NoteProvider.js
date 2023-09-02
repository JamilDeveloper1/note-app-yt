import { createContext, useEffect, useState } from "react";

export const NoteContext = createContext();


export const NoteProvider = ({children}) =>{


    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [color,setColor] = useState('');
    const [notes,setNotes] = useState([]);

    const [openNote,setOpenNote] = useState(false);

    const [searchTerm,setSearchTerm] = useState("");

    const handleClick = () =>{
        setOpenNote(!openNote);
    }


    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
    },[])
    
    

useEffect(() =>{
        localStorage.setItem('notes',JSON.stringify(notes))
    
},[notes])
    



    const addNote = () => {
        const myDate = new Date().toDateString();
        if(title.trim() !== '' && content.trim() !== ''){
            setNotes([...notes,{title,content,color,myDate}])
        }
        setTitle('');
        setContent('');
        setColor('');
        handleClick();
    }





    return(
        <NoteContext.Provider value={{
            title,
            content,
            color,
            notes,
            setTitle,
            setContent,
            setNotes,
            addNote,
            openNote,
            handleClick,
            searchTerm,setSearchTerm
            }}>
            {children}
        </NoteContext.Provider>
    )
}