import { NavLink } from "react-router-dom";
import logo from "../Images/logo-cardgame.png";
import mountain1 from "../Images/mountain-1.png";
import mountain2 from "../Images/mountain-2.png";
import plus from "../Images/plus.png";
import minus from "../Images/minus.png";
import Howtoplay from "./Howtoplay";

const Homepage = () => {
  return (
    <div>
      <div className="container-fluid mx-auto text-center h-screen box-border">
        <div className="absolute flex top-0 justify-between mx-auto w-full px-32">
          <img src={plus} />
          <img src={minus} />
        </div>
        <div className="flex justify-between mx-auto">
          <img src={mountain1} />
          <div className="my-52 static">
            <img className="mx-auto bg-zinc-400 rounded-full p-5" src={logo} />
            <NavLink to="/game">
              <button className="bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-700 hover:to-violet-900 drop-shadow-2xl text-white mt-52 font-bold py-2 px-4 rounded w-2/6 h-12">
                Play
              </button>
            </NavLink>
          </div>
          <img src={mountain2} />
        </div>
      </div>
      <Howtoplay/>
    </div>
  );
};

export default Homepage;
