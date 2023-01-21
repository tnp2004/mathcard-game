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
    return (
        <div className="border-solid border-2 border-sky-500 my-1 p-2 bg-green-200 flex justify-items-center items-center gap-5">
            {choices.map((value, index) => <Cardelement key={index} answer={value} getPlayerAns={getPlayerAns} />)}
        </div>
    )
   }

   return <Lazyload/>
}

export default Cardpicker