import { useEffect, useState } from "react"
import Cardelement from "./Cardelement"
import Lazyload from "./Lazyload"

const Cardpicker = (props) => {
    const [choices, setChoices] = useState([])
    const getPlayerAns = props.getPlayerAns

    useEffect(() => {
        setChoices(props.choices)
    }, [props])
    if (choices) {
    const shuffledChoices = choices.sort((a, b) => 0.5 - Math.random())
    
    return (
        <div className="border-solid border-2 border-sky-500 my-1 p-2 bg-green-200 flex justify-items-center items-center gap-5">
            {shuffledChoices.map((value, index) => <Cardelement key={index} answer={value} getPlayerAns={getPlayerAns} />)}
        </div>
    )
   }

   return <Lazyload/>
}

export default Cardpicker