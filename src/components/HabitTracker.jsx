import Card from "./Card"
import { useState } from "react"
import { useLocalStorage } from 'usehooks-ts'


function HabitTracker() {
  const Week = ["S", "M", "T", "W", "T", "F", "S"]
  const daysofWeek = ["S", "M", "T", "W", "T", "F", "S"]
  //i used uselocalStorage intialy i use usestaate,then update further 
  const [habits, setHabits] =useLocalStorage('habit',[
    
  ])
  //for adding new habits
  const [newHabit, setNewHabit] = useState("")
  //here i flipped chebox true or false
  function toggleDay(habitIndex,dayIndex){
    const updatedHabits = [...habits]
    updatedHabits[habitIndex].days[dayIndex] = !updatedHabits[habitIndex].days[dayIndex]
    setHabits(updatedHabits)
    
  }
  function addHabbit() {
    if (newHabit) {
      setHabits([...habits,
        {
          name: newHabit,
          days: Array(7).fill(false)
        }
       
      ]);
      setNewHabit(""); 
   }
  }
  function deleteHabbit(index) {
    setHabits(habits.filter((_, i) => i !== index))
  }


  return (
      <div>
          <Card  title={
    <div className="flex items-center gap-32">
      Habit Tacker 
        </div>
  }>
  
        {/* Weekday label */}
  <div className="flex justify-end mb-2">
          <div className="grid grid-cols-7 gap-2">
      
      {Week.map((day, index) => (
        <span key={index} className="text-xs text-gray-500 text-center w-3.5">
          {day}
        </span>
      ))}
    </div>
        </div>
        
        {/* habit tracking rows */}
        {habits.map((habit, habitIndex)=>(
          <div
            key={habitIndex}
            className="flex justify-between items-center mb-3"
          ><span> <button className="text-m  text-[#e91d1d]  active:scale-150 font-semibold"
                onClick={()=> deleteHabbit(habitIndex)}>X</button></span>
            <span className="capitalize font-medium w-26">
              {habit.name}
            </span>
        
        
        
          {/* creating  columns */}
          <div className="grid grid-cols-7 gap-2">
              
         
              {daysofWeek.map((day, dayIndex) =>
             <label className="gap-1 ">
            
             <input 
               key={dayIndex} 
               type="checkbox"
               checked={habit.days[dayIndex]}
               onChange={() => toggleDay(habitIndex, dayIndex)}
               className="peer absolute opacity-0 w-0 h-0"
             />
             <div className="w-3.5 h-5 bg-green-200 rounded border-none peer-checked:bg-green-500" />
                  
                  </label>
            )}
          
          
          </div>
           
            </div>
            ))}
             <div className="flex items-center mt-4">
       <button className="text-2xl font-semibold ml-2 hover:scale-125" onClick={addHabbit}>+</button>
        <input className="text-lg border-transparent  w-auto ml-1.5 outline-0" type="text"
          placeholder="Add New Habit" value={newHabit} onChange={(e) => setNewHabit(e.target.value)} />
        
              
</div>
              
    </Card>
    </div>
  )
}

export default HabitTracker