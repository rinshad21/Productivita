import { useState,useEffect,useRef } from "react";
import Card from "./Card"

function Stopwatch() {
    const [isrunning, setIsrunning] = useState(false)
    const [elapsedtime, setElapsedtime] = useState(0)//holds total timee
    const intervalIdRef = useRef(null)
    const startTimeref = useRef(0)
    useEffect(() => {
        if (isrunning) {
            intervalIdRef.current= setInterval(() => {
                setElapsedtime(Date.now() - startTimeref.current)
            }, 10)
            return () => {
            clearInterval(intervalIdRef.current)
        }
        }
    },[isrunning])
    
    function start() {
        setIsrunning(true);
        startTimeref.current=Date.now()-elapsedtime
        
    }
    function stop() {
        setIsrunning(false)
        
    }
    function reset() {
        setElapsedtime(0)
        setIsrunning(false)

        
    }


    function Time() {
        let minutes = Math.floor((elapsedtime / (1000 * 60 ))% 60)
        let seconds = Math.floor((elapsedtime / 1000)% 60)
        let milliseconds = Math.floor((elapsedtime % 1000) / 10)//to display 2 digitts

        minutes = String(minutes).padStart(2, '0')
        seconds = String(seconds).padStart(2, '0')
        milliseconds=String(milliseconds).padStart(2, '0')
        return `${minutes}:${seconds}:${milliseconds}`
    

    }


  return (
      <div>
    <Card   title={
    <div className="flex items-center gap-32">
      StopWatch
    </div>
  }>
              <div className="bg-[#4684e9] p-11 ml-8 mt-5 text-5xl pt-18 pl-4 font-semibold w-52 h-50 text-white rounded-full">
                  {Time()}</div>
              <div className="font-semibold  ml-5  p-5">
              <button className="hover:bg-[#4684e9] hover:text-white bg-[hsl(0,13%,94%)] w-15  text-xl hover:scale-x-115 rounded-sm mr-3"onClick={start}>Start</button>
                  <button className=" hover:bg-[#4684e9] hover:text-white  bg-[hsl(0,13%,94%)] w-15 mr-3 hover:scale-x-115 text-xl rounded-sm" onClick={stop}>Stop</button>
                   <button className="hover:bg-[#4684e9] hover:text-white  bg-[hsl(0,13%,94%)]  w-15 hover:scale-x-115 text-xl rounded-sm"onClick={reset}>Reset</button>
            </div>
</Card>

    </div>
  )
}

export default Stopwatch