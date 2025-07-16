import TodoApp from "./components/TodoApp"
import Header from "./components/Header"
import Notes from "./components/Notes"
import Stopwatch from "./components/Stopwatch"
import HabitTracker from "./components/HabitTracker"




function App() {
  

  return (
    <>
      <Header/>
    <div  className="flex flex-wrap  ml-7 lg:ml-27 gap-3 md:ml-27 lg:gap-7 p-4">
    
      <TodoApp />
        <Notes />
        <Stopwatch />
        <HabitTracker/>
        
  </div>
  </>
      
   
  
  )
}

export default App
