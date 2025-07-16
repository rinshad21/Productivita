
import { useState } from "react"
import Card from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import {faList } from "@fortawesome/free-solid-svg-icons"
import { useLocalStorage } from 'usehooks-ts'

function TodoApp() {
 const [task, setTask] = useLocalStorage('tasks', []);//saving to local storage
  const [newTask, setNewTask] = useState("")

  function handleInputChange(e) {
    setNewTask(e.target.value)
  }
  function addTask() {
    if (newTask.trim() !== "") {
        setTask(t => [...t,{text: newTask, completed: false}]);
    setNewTask("")
    }
    
  }
  function DeleteTask(index) {
    const Updatedtasks = task.filter((element, i) => i !== index)
    setTask(Updatedtasks);
    
  }
  function CompleteTask(index) {
    const Updatedtasks = [...task]
    Updatedtasks[index].completed=!Updatedtasks[index].completed
    setTask(Updatedtasks)
  }
 
  return (
    <div>
      <Card   title={
    <div className="flex items-center gap-32">
      To-Do List
      <span> <FontAwesomeIcon icon={faList} /></span>
    </div>
  }
>
     <ol className="bg-[#FFFEFF] w-90% h-auto rounded-xl">
    {task.map((tasks, index) =>(
      <li key={index} className="flex justify-between items-center ml-3 mr-7 mb-2">
      <span className={`text-lg ${tasks.completed ? "line-through text-gray-400" : ""}`}>
        {tasks.text}</span>
   <div className="flex gap-3 ml-5">
    <button
      className="text-m text-[#4684e9] active:scale-150 font-semibold"
      onClick={() => CompleteTask(index)}>
     <FontAwesomeIcon icon={faCheckDouble} />
    </button>

    <button
      className="text-m text-[#e91d1d] active:scale-150 font-semibold"
      onClick={() => DeleteTask(index)}
    >
      X
    </button>
  </div>
            </li>
             ))}
       </ol>
        <button className="text-2xl font-semibold ml-2 active:scale-125" onClick={addTask}>+</button>
        <input className="text-lg border-transparent  w-auto ml-1.5 outline-0" type="text"
          placeholder="Add task" value={newTask} onChange={handleInputChange} />
        
    </Card >
    </div>
  
  
  
  )
}

export default TodoApp