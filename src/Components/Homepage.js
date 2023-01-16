import { NavLink } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="container mx-auto text-center">
            <h1>Home page</h1>
                <NavLink to="/game">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Play</button>
                </NavLink>
        </div>
    )
}

export default Homepage