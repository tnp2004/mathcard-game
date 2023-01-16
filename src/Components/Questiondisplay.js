import { useEffect, useState } from "react"
import Stopwatch from "./Stopwatch"

const Questiondisplay = (props) => {
    const data = props.question
    const [title, setTitle] = useState()
    const [question, setQuestion] = useState()
    const [time, setTime] = useState()

    useEffect(() => {
        setTitle(data.title)
        setQuestion(data.question)
        setTime(data.time)
    }, [props])

    return (
        <div className="border-solid border-2  border-sky-500 bg-green-200 flex-auto justify-items-center items-center">
            <h1 className="text-4xl my-10">{title}</h1>
            <Stopwatch time={time} />
            <div className="text-6xl my-10">
              <p>{question}</p>
            </div>
        </div>
    )
}

export default Questiondisplay