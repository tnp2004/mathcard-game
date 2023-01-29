import { useState, useEffect } from "react"

const Playerhealthbar = (props) => {
    const [health, setHealth] = useState(100)
    const healthProgress = {width: health + "%"}

    useEffect(() => {
        setHealth(props.health)
    }, [props])

    return (
        <div className="border-4 rounded-2xl bg-slate-100 bg-opacity-30 border-black my-1">
            <div className="bg-gradient-to-l from-green-400 to-green-500 font-bold rounded-xl duration-300" id="myBar" style={healthProgress}>
                {health}%
            </div>
        </div>
    )
}

export default Playerhealthbar