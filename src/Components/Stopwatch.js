import { useEffect, useState } from "react"

const Stopwatch = (props) => {
    const [time, setTime] = useState()

    useEffect(() => {
        setTime(props.time)
    }, [props])
    
    return (
        <div>
            <p className="text-xl">{time} seconds</p>
        </div>
    )
}

export default Stopwatch