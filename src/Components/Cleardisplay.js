import { NavLink } from "react-router-dom"
import arrow from "../Images/down-arrow.png"

const Cleardisplay = () => {
    return (
        <div className="mx-auto text-center text-5xl">
            <h1 className="my-20">Now you have cleared the last stage.</h1>
            <p>you can back to play any stage.</p>
            <img className="mx-auto animate-bounce my-12" src={arrow} />
            <NavLink className="inline-block mx-12" to="/">
                <button className="drop-shadow-xl py-2 px-3 bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold rounded-md shadow focus:outline-none">Homepage</button>
            </NavLink>
        </div>
    )
}

export default Cleardisplay