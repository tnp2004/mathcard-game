import React, { useState, useEffect } from 'react';

const Stopwatch = (props) => {
    const [count, setCount] = useState();
    const [running, setRunning] = useState(true);

    const Counter = () => {
        let counterTimer;
        if (running && count > 0) {
            counterTimer = setTimeout(() => {
                setCount(count - 1)
            }, 1000);
        }else {
            clearTimeout(counterTimer)
        }
    }

    useEffect(() => {
        setCount(props.time)
    }, [props])

   return (
    <div>
        <p>{count} seconds</p>
    </div>
   )
};

export default Stopwatch;
