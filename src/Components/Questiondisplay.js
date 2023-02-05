import { useEffect, useState } from "react"
import Countdown from "./Countdown"

const Questiondisplay = (props) => {
    const data = props.question
    const [title, setTitle] = useState()
    const [question, setQuestion] = useState()

    const [time, setTime] = useState(data.time)

    useEffect(() => {
        setTitle(data.title)
        setQuestion(data.question)
        setTime(data.time)
    }, [props])

    return (
        <div className="border-4 rounded-tl-xl  border-black bg-zinc-50 flex-auto justify-items-center items-center">
            <h1 className="text-4xl my-10 font-bold">{title}</h1>
            <div>
                {time ? <Countdown seconds={time} timesout={props.timesout} playerhealth={props.playerhealth} /> : ""}
            </div>
            <div className="text-6xl my-24">
              <p>{question}</p>
            </div>
        </div>
    )
}

export default Questiondisplay