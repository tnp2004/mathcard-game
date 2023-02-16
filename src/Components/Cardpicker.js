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
        <div className="border-4 border-black rounded-b-xl my-1 p-1 sm-p-2 lg:p-5 bg-green-100 bg-opacity-70 flex justify-items-center items-center gap-1 lg:gap-5">
            {shuffledChoices.map((value, index) => <Cardelement key={index} answer={value} getPlayerAns={getPlayerAns} />)}
        </div>
    )
   }

   return <Lazyload/>
}

export default Cardpicker