import React, {useRef, useState, useEffect} from 'react';
// sreekanth u made mowayya bro

const AndomTextGenerator = () => {


    const texts = [
       "apple",
       "banana",
       "crocodiel",
       "mango",
       "fruity"
    ]
    const intervalref = useRef(null);
    const [currenttext, setcurrenttext] = useState("");
    const [isRunning, setIsRunning]= useState(true);



    const generateRandomtext = () => {

        const randomIndex = Math.floor(Math.random() * texts.length);
        setcurrenttext(texts[randomIndex]);

    };

    

   
    useEffect(()=>{
        if(isRunning){
            intervalref.current = setInterval(generateRandomtext, 1000);
        }
        return ()=> clearInterval(intervalref.current);
        setIsRunning(false);

         

    },[isRunning]);

    // functoon to stopt the timer interval;

    const stopInterval = () => {
        clearInterval(intervalref.current);
        setIsRunning(false);

    }

   const startInterval =() => {
    setIsRunning(true);
   }


    return (
        <div>
            <h1>Random Text GENERATOR PLS</h1>
            
<p>{currenttext}</p>
<button onClick={generateRandomtext}> Generate Random TEXT</button>

{
isRunning? (
<button style={{color:"green", backgroundColor:"green", marginLeft:"5px"}} onClick={stopInterval}>stop</button>
) : (
    <button style={{color:"black", backgroundColor:"black", marginLeft:"5px", border:"2px solid black"}} onClick={startInterval}>start</button>

)

}
        </div>
    )



};

export default AndomTextGenerator;
