import Questiondisplay from "./Questiondisplay";
import Enemydisplay from "./Enemydisplay";
import Cardpicker from "./Cardpicker";
import Stageselecter from "./Stageselector";
import Playerhealthbar from "./Playerhealthbar";
import data from "../Questions.json";
import { useEffect, useState } from "react";
import Lazyload from "./Lazyload";
import {Howl} from 'howler';

const enemy1 = {name:"Flowerpod", health: 100, img:"flowerboy"}
const enemy2 = {name:"monster2", health: 100, img:"monster_1"}
const enemy3 = {name:"monster2", health: 100, img:"monster_1"}
const enemy4 = {name:"monster2", health: 100, img:"monster_1"}

const random = (data) => data[Math.floor(Math.random() * data.length)];

const sfx = {
  push: new Howl({
    src: [
      "../Soundeffects/Bubble-1.mp3"
    ],
    onend: console.log("finished")
  })
}

const Gamedisplay = () => {
  // question
  const questions_level_1 = data.filter((data) => data.level === 1 && !data.isPass);
  const questions_level_2 = data.filter((data) => data.level === 2 && !data.isPass);
  const questions_level_3 = data.filter((data) => data.level === 3 && !data.isPass);
  const questions_level_4 = data.filter((data) => data.level === 4 && !data.isPass);
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentEnemy, setCurrentEnemy] = useState(enemy1)
  const [question, setQuestion] = useState();
  const [choices, setChoice] = useState();
  const [points, setPoints] = useState(0);
  
  //attack damage
  const enemies_attackDamage = [21, 22, 23, 24, 25]
  const player_attackDamage = [21, 22, 23, 24, 25]

  // enemies systems
  const [enemyHealth, setEnemyHealth] = useState(currentEnemy.health)
  const [enemiesDamage, setEnemiesDamage] = useState(random(enemies_attackDamage))

  // player systems
  const [playerHealth, setPlayerHealth] = useState(100)
  const [playerDamage, setPlayerDamage] = useState(random(player_attackDamage))
  
  // decrease health systems
  const decreaseHealth = (health, setHealth, attackDamage, damage, setDamage) => {
    const newDamage = random(attackDamage)
    setDamage(newDamage)
    const currentHealth = health - damage
    setHealth(currentHealth)
    if (currentHealth <= 0) {
      died(setHealth)
      console.log("enemy= " +enemyHealth)
      isEnemyDied()
    }
    console.log(enemyHealth)
  }
  
  const died = (setHealth) => {
    setHealth(0)
    alert("died")
  }

  const isEnemyDied = () => {
    if (points === 4 || points === 5) {
      currentPage(currentLevel + 1)
      console.log("level = " + currentLevel)
    }
  }
  
  const getPlayerAns = (playerAnswer) => {
    if (playerAnswer === question.answer) {
      // enemies decrease health
      decreaseHealth(enemyHealth, setEnemyHealth, player_attackDamage, playerDamage, setPlayerDamage)
      if (question) question.isPass = true
      setPoints(points + 1)
    } else {
      // player decrease health
      decreaseHealth(playerHealth, setPlayerHealth, enemies_attackDamage, enemiesDamage, setEnemiesDamage)
    }
  }

  const resetQuestions = () => {
    data.forEach(val => {
      val.isPass = false
    })
  }

  const currentPage = (val) => {
    setCurrentLevel(val)
    resetQuestions()
    setPoints(0)
    setEnemyHealth(currentEnemy.health)
    setPlayerHealth(100)
  }

useEffect(() => {
  setQuestion(random(eval(`questions_level_${currentLevel}`)));
  setCurrentEnemy(eval(`enemy${currentLevel}`))
  }, [points, currentLevel]);
  
  useEffect(() => {
    if (question) setChoice(question.choices);
  }, [question]);

  if (question) {
    return (      
      <div className="sm:container sm:w-3/4 sm:my-5 mx-auto text-center p-1">
        <Playerhealthbar health={playerHealth} />
        <div className="flex gap-1">
          <Questiondisplay
            question={{
              title: question.title,
              question: question.question,
              time: question.time,
            }}
          />
          <Enemydisplay name={currentEnemy.name} image={currentEnemy.img} health={enemyHealth} />
        </div>
        <Cardpicker choices={choices} getPlayerAns={getPlayerAns} />
        <Stageselecter getCurrentPage={currentPage} currentLevel={currentLevel} />
      </div>
    );
  }

  return <Lazyload />;
};

export default Gamedisplay;
