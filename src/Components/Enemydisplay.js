import { useEffect, useState } from "react"

const Enemydisplay = (props) => {
    const [health, setHealth] = useState()
    const { name, image } = props
    const healthProgress = {width: health + "%"}
    
    useEffect(() => {
        setHealth(props.health)
    }, [props])
    
    console.log(image)
    return (
        <div className="border-solid border-2 border-sky-500 bg-green-200 flex-auto">
            <div className="my-5">
                <label>{name}</label>
                <div className="border-2 border-black mx-auto w-3/5">
                    <div className="bg-rose-500 block" style={healthProgress}>{health}%</div>
                </div>
                <img className="mx-auto" src={require(`../Images/${image}.png`)} />
            </div>
        </div>
    )
}

export default Enemydisplay