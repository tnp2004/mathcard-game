import { NavLink } from "react-router-dom"
import arrow from "../Images/down-arrow.png"
import { Howl } from "howler"
import congratulationSfx from "../Soundeffects/Congratulations.mp3"

const sfx = {
    Congratulations: new Howl({
      src: [
        congratulationSfx
      ],
      volume: 0.3
    })
}

const Cleardisplay = () => {
    
    sfx.Congratulations.play()

    return (
        <div className="mx-auto text-center">
            <h1 className="my-20 h-40 font-extrabold text-transparent text-5xl md:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Congratulations</h1>
            <h1 className="my-20  text-3xl xl:text-5xl">Now you have cleared the last stage.</h1>
            <img className="mx-auto animate-bounce my-12" src={arrow} />
            <NavLink className="inline-block mx-12" to="/">
                <button className="drop-shadow-xl py-2 px-3 bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold rounded-md shadow focus:outline-none">Homepage</button>
            </NavLink>
        </div>
    )
}

export default Cleardisplay