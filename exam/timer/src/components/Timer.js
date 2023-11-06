import { useEffect,useState } from "react";
function Timer(){
    const [countdown,setCountDown] = useState(10);
    useEffect(()=>{
        const countdowning = setInterval(()=>{
            if(countdown===0){
                clearInterval(countdowning);
                alert("Time's up!");
            }else {
                setCountDown(countdown - 1);
            }
        },100)
    return()=>{
        clearInterval(countdowning);
    }
    })
    return (
        <div>
            <h3>Count down: {countdown}</h3>
        </div>
    );
}
export default Timer;