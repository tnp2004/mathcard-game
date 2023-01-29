import { useEffect, useState } from "react"

const Questiondisplay = (props) => {
    const data = props.question
    const [title, setTitle] = useState()
    const [question, setQuestion] = useState()

    useEffect(() => {
        setTitle(data.title)
        setQuestion(data.question)
    }, [props])

    return (
        <div className="border-4 rounded  border-black bg-zinc-50 flex-auto justify-items-center items-center">
            <h1 className="text-4xl my-10">{title}</h1>
            <div className="text-6xl my-24">
              <p>{question}</p>
            </div>
        </div>
    )
}

export default Questiondisplay