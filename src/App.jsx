import TodoApp from "./components/TodoApp"
import Header from "./components/Header"
import Notes from "./components/Notes"
import Stopwatch from "./components/Stopwatch"
import HabitTracker from "./components/HabitTracker"




function App() {
  

  return (
    <>
      <Header/>
    <div  className="flex flex-wrap ml-9 lg:ml-27 gap-3 lg:gap-7 ">
    
      <TodoApp />
        <Notes />
        <Stopwatch />
        <HabitTracker/>
        
  </div>
  </>
      
   
  
  )
}

export default App
