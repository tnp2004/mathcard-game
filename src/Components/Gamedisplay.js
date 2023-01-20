import Questiondisplay from "./Questiondisplay";
import Enemydisplay from "./Enemydisplay";
import Cardpicker from "./Cardpicker";
import Stageselecter from "./Stageselecter";
import Playerhealthbar from "./Playerhealthbar";
import data from "../Questions.json"
import { useContext, useEffect, useState } from "react";
import Lazyload from "./Lazyload";
import DataContext from "../Data/DataContext";

const Gamedisplay = () => {
  const questions_level_1 = data.filter(data => data.level === 1)
  const questions_level_2 = data.filter(data => data.level === 2)
  const questions_level_3 = data.filter(data => data.level === 3)
  const [question, setQuestion] = useState()
  let [choices, setChoice] = useState()

  const random_question = (data) => data[Math.floor(Math.random() * data.length)]

  const useCheckAnswer = () => {
    const ans = useContext(DataContext)
    if (ans === question.answer) {
      alert("correct")
    }
  }
  
  useEffect(() => {
    setQuestion(random_question(questions_level_1))
  }, [])

  useEffect(() => {
    if (question) setChoice(question.choices)
  }, [question])

    if (question) {
    return (
      <div className="container mx-auto w-3/4 text-center p-1">
        <Playerhealthbar/>
        <div className="flex gap-1">
          <Questiondisplay question={{"title": question.title, "question": question.question, "time": question.time}} />
          <Enemydisplay/>
        </div>
        <Cardpicker choices={choices}/>
        <Stageselecter/>
      </div>
    );
  }

  return (
    <Lazyload/>
  )
};

export default Gamedisplay;
