import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { useLocalStorage } from 'usehooks-ts'

function Notes() {
    const [note, setNote] = useLocalStorage("note","")
  
    function handleCopy() {
        navigator.clipboard.writeText(note)
        alert("copied to clipboard")
    }
  return (
          <div>
      <Card   title={
    <div className="flex items-center gap-32">
      Notepad
      <span> <FontAwesomeIcon icon={faBook} /></span>
    </div>
  }
>
              
              <textarea
                  className="rounded-md w-full border border-gray-300 h-40 outline-none text-lg p-2"
                  placeholder="write your notes here..." 
                  value={note}
              onChange={(e)=>setNote(e.target.value)}/>
              
    <button className="text-[#4684e9] active:scale-125" onClick={handleCopy}><FontAwesomeIcon icon={faCopy} /></button>
              
    </Card > 

    </div>
  )
}

export default Notes