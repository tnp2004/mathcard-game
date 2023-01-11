import Questiondisplay from "./Questiondisplay"
import Enemydisplay from "./Enemydisplay"

const Gamedisplay = () => {
    return (
        <div className="flex gap-1 h-96">
            <Questiondisplay/>
            <Enemydisplay/>
        </div>
    )
}

export default Gamedisplay