import Questiondisplay from "./Questiondisplay";
import Enemydisplay from "./Enemydisplay";
import Cardpicker from "./Cardpicker";
import Stageselecter from "./Stageselecter";
import Playerhealthbar from "./Playerhealthbar";

const Gamedisplay = () => {
  return (
    <div className="container mx-auto w-3/4 text-center">
       <Playerhealthbar/>
      <div className="flex gap-1">
       <Questiondisplay/>
       <Enemydisplay/>
      </div>
      <Cardpicker/>
      <Stageselecter/>
    </div>
  );
};

export default Gamedisplay;
