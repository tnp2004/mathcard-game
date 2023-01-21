import { useEffect, useState } from "react"
import Enemy_1 from "../Images/monster_1.png"

const Enemydisplay = (props) => {
    const [health, setHealth] = useState()
    const { name } = props
    const healthProgress = {width: health + "%"}
    
    useEffect(() => {
        setHealth(props.health)
    }, [props])
 
    return (
        <div className="border-solid border-2 border-sky-500 bg-green-200 flex-auto">
            <div className="my-5">
                <label>{name}</label>
                <div className="border-2 border-black mx-auto w-3/5">
                    <div className="bg-rose-500 block" style={healthProgress}>{health}%</div>
                </div>
                <img className="mx-auto" src={Enemy_1} />
            </div>
        </div>
    )
}

export default Enemydisplay