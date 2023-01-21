import Questiondisplay from "./Questiondisplay";
import Enemydisplay from "./Enemydisplay";
import Cardpicker from "./Cardpicker";
import Stageselecter from "./Stageselecter";
import Playerhealthbar from "./Playerhealthbar";
import data from "../Questions.json";
import { useEffect, useState } from "react";
import Lazyload from "./Lazyload";

const enemy1 = {name:"monster1", health: 100}

const Gamedisplay = () => {
  const questions_level_1 = data.filter((data) => data.level === 1);
  const questions_level_2 = data.filter((data) => data.level === 2);
  const questions_level_3 = data.filter((data) => data.level === 3);
  const [question, setQuestion] = useState();
  const [choices, setChoice] = useState();
  const [damageToEnemy, setDamageToEnemy] = useState()
  const attackDamage = [21, 22, 23, 24, 25]
  const [enemyHealth, setEnemyHealth] = useState(enemy1.health)
  
  const getPlayerAns = async (playerAnswer) => {
    if (playerAnswer == question.answer) {
      const health = enemyHealth - damageToEnemy
      const damage = random(attackDamage)
      setDamageToEnemy(damage)
      setEnemyHealth(health)
      console.log("1 "+health)
      console.log("2 "+enemyHealth)
      console.log("3 "+damageToEnemy)
    }
    // console.log("incorrect")
  }
  
  const random = (data) => data[Math.floor(Math.random() * data.length)];
  
  useEffect(() => {
    setQuestion(random(questions_level_1));
  }, []);
  
  useEffect(() => {
    if (question) setChoice(question.choices);
  }, [question]);

  if (question) {
    return (      
      <div className="container mx-auto w-3/4 text-center p-1">
        <Playerhealthbar />
        <div className="flex gap-1">
          <Questiondisplay
            question={{
              title: question.title,
              question: question.question,
              time: question.time,
            }}
          />
          <Enemydisplay health={enemyHealth} />
        </div>
        <Cardpicker choices={choices} getPlayerAns={getPlayerAns} />
        <Stageselecter />
      </div>
    );
  }

  return <Lazyload />;
};

export default Gamedisplay;
