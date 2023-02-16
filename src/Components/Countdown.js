import { useEffect, useState } from "react"
import clockIcon from "../Images/clock.png"

const Countdown = (props) => {
    const {seconds, timesout} = props
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
        handleReset()
        setTimeout(() => {
            handleReDeclare()
            handleStart()
        }, 1000);
    }, [props])

    useEffect(() => {
      if (isRunning && timeLeft > 0) {
        setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      }
    }, [timeLeft, isRunning]);

    useEffect(() => {
        if (props.playerhealth <= 0) {
          handleStop()
        }
        if (timeLeft <= 0) {
          timesout()
        }
    }, [timeLeft])
  
    const handleReset = () => {
      setTimeLeft();
      setIsRunning(false);
    };
  
    const handleReDeclare = () => {
      setTimeLeft(seconds);
      setIsRunning(false);
    };
  
    const handleStop = () => {
      setIsRunning(false);
    };
  
    const handleStart = () => {
      setIsRunning(true);
    };
  
    return (
      <div>
        <img src={clockIcon} className="inline w-12" /> <p className="font-bold text-sm lg:text-lg">{timeLeft} seconds</p>
      </div>
    );
}

export default Countdown