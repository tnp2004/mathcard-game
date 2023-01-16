import Questiondisplay from "./Questiondisplay";
import Enemydisplay from "./Enemydisplay";
import Cardpicker from "./Cardpicker";
import Stageselecter from "./Stageselecter";
import Playerhealthbar from "./Playerhealthbar";
import data from "../Questions.json"
import { useEffect, useState } from "react";
import Lazyload from "./Lazyload";

const Gamedisplay = () => {
  const questions_level_1 = data.filter(data => data.level === 1)
  const questions_level_2 = data.filter(data => data.level === 2)
  const questions_level_3 = data.filter(data => data.level === 3)
  const [question, setQuestion] = useState()

  const random_question = (data) => data[Math.floor(Math.random() * data.length)]

  useEffect(() => {
    setQuestion(random_question(questions_level_1))
  }, [])
    if (question) {
    return (
      <div className="container mx-auto w-3/4 text-center p-1">
        <Playerhealthbar/>
        <div className="flex gap-1">
          <Questiondisplay question={{"title": question.title, "question": question.question, "time": question.time}} />
          <Enemydisplay/>
        </div>
        <Cardpicker/>
        <Stageselecter/>
      </div>
    );
  }

  return (
    <Lazyload/>
  )
};

export default Gamedisplay;
