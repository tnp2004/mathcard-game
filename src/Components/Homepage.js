import { NavLink } from "react-router-dom";
import logo from "../Images/icon-mathcard.png";
import Howtoplay from "./Howtoplay";
import arrow from "../Images/down-arrow.png"
import backround from "../Images/math-pic.png"
import 'animate.css';

const Homepage = () => {
  return (
    <div>
      <div className="bg h-screen container-fluid box-border bg-gradient-to-b from-amber-200 p-5" style={{backgroundImage: `url(${backround})`}}>
        <div className="text-center">
          <img className="mx-auto drop-shadow-xl animate__animated animate__rubberBand" src={logo} alt="logo" />
          <NavLink to="/game">
            <button className="animate__animated animate__bounceIn drop-shadow-xl my-56 py-2 px-3 bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold rounded-md shadow focus:outline-none">Play a game</button>
          </NavLink>
          <div className="animate-bounce drop-shadow-xl">
           <a href="#howToPlay">
            <label>how to play ?</label>
            <img className="mx-auto" src={arrow} alt="how to play" />
           </a>
          </div>
        </div>
      </div>
      <Howtoplay/>
    </div>
  );
};

export default Homepage;
