import  React, {ReactElement,useState, useRef} from 'react';


const Solution = (): ReactElement => {
   const  [time, setTime]= useState(0);
    const timerId = useRef(0);
    const start =() => {
        timerId.current = setInterval(()=>{
            console.log('time', time)
            setTime(prev => prev +1)
          
        },1000);
    }
    const pause =() => {

        if(timerId.current){
            clearInterval(timerId.current)
            timerId.current=null
        }else {
            timerId.current=setInterval(()=>{
                setTime((prev)=> {
                    console.log('prev', prev)
                    return prev +1
                })
            })
        }
    }
    const reset =() => {
setTime(0)
clearInterval(timerId.current)
    }
    const stop =() => {
clearInterval(timerId.current)
    }
   

  return (
    <div>
     <h1>{time}</h1>
     <button onClick={()=> start()}>start</button>
     <button onClick={()=> pause()}>pause</button>
     <button onClick={()=> reset()}>reset</button>
     <button onClick={()=> stop()}>stop</button>
    </div>
  )
}

export default Solution
