import { useState, useEffect } from "react"

const Playerhealthbar = (props) => {
    const [health, setHealth] = useState(100)
    const healthProgress = {width: health + "%"}

    useEffect(() => {
        setHealth(props.health)
    }, [props])

    return (
        <div className="border-2 border-black my-1">
            <div className="bg-green-500" style={healthProgress}>
                {health}%
            </div>
        </div>
    )
}

export default Playerhealthbar