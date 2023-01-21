import Questiondisplay from "./Questiondisplay";
import Enemydisplay from "./Enemydisplay";
import Cardpicker from "./Cardpicker";
import Stageselecter from "./Stageselecter";
import Playerhealthbar from "./Playerhealthbar";
import data from "../Questions.json";
import { useEffect, useState } from "react";
import Lazyload from "./Lazyload";

const enemy1 = {name:"monster1", health: 100}

const random = (data) => data[Math.floor(Math.random() * data.length)];

const Gamedisplay = () => {
  // question
  const questions_level_1 = data.filter((data) => data.level === 1);
  const questions_level_2 = data.filter((data) => data.level === 2);
  const questions_level_3 = data.filter((data) => data.level === 3);
  const [question, setQuestion] = useState();
  const [choices, setChoice] = useState();

  //attack damage
  const enemies_attackDamage = [21, 22, 23, 24, 25]
  const player_attackDamage = [21, 22, 23, 24, 25]

  // enemies systems
  const [enemyHealth, setEnemyHealth] = useState(enemy1.health)
  const [enemiesDamage, setEnemiesDamage] = useState(random(enemies_attackDamage))

  // player systems
  const [playerHealth, setPlayerHealth] = useState(100)
  const [playerDamage, setPlayerDamage] = useState(random(player_attackDamage))
  
  const decreaseHealth = (health, setHealth, attackDamage, damage, setDamage) => {
    const newDamage = random(attackDamage)
    setDamage(newDamage)
    const currentHealth = health - damage
    setHealth(currentHealth)
    if (currentHealth <= 0) {
      died(setHealth)
    }
  }
  
  const died = (setHealth) => {
    setHealth(0)
    alert("died")
  }
  
  const getPlayerAns = (playerAnswer) => {
    if (playerAnswer == question.answer) {
      // enemies decrease health
      decreaseHealth(enemyHealth, setEnemyHealth, player_attackDamage, playerDamage, setPlayerDamage)

    } else {
      // player decrease health
      decreaseHealth(playerHealth, setPlayerHealth, enemies_attackDamage, enemiesDamage, setEnemiesDamage)
    }
  }

  useEffect(() => {
    setQuestion(random(questions_level_1));
  }, []);
  
  useEffect(() => {
    if (question) setChoice(question.choices);
  }, [question]);

  if (question) {
    return (      
      <div className="container mx-auto w-3/4 text-center p-1">
        <Playerhealthbar health={playerHealth} />
        <div className="flex gap-1">
          <Questiondisplay
            question={{
              title: question.title,
              question: question.question,
              time: question.time,
            }}
          />
          <Enemydisplay name={enemy1.name} health={enemyHealth} />
        </div>
        <Cardpicker choices={choices} getPlayerAns={getPlayerAns} />
        <Stageselecter />
      </div>
    );
  }

  return <Lazyload />;
};

export default Gamedisplay;
