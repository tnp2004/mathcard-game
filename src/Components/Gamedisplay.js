import Questiondisplay from "./Questiondisplay";
import Enemydisplay from "./Enemydisplay";
import Cardpicker from "./Cardpicker";
import Stageselecter from "./Stageselector";
import Playerhealthbar from "./Playerhealthbar";
import data from "../Questions.json";
import { useEffect, useState } from "react";
import Lazyload from "./Lazyload";
import {Howl} from 'howler';
import Swal from 'sweetalert2'
import bgm from "../Soundeffects/Bgm.mp3"
import Bgmbutton from "./Bgmbutton";
import passSfx from "../Soundeffects/Pass.mp3"
import deathSfx from "../Soundeffects/Death.mp3"
import playerhurtSfx from "../Soundeffects/playerHurt.wav"
import Cleardisplay from "./Cleardisplay";
import { NavLink } from "react-router-dom";
import 'animate.css';

const enemy1 = {name:"Flowerpod", health: 100, img:"flowerboy", bg:"forest-dirtpath"}
const enemy2 = {name:"Cacty", health: 100, img:"cacty", bg:"desert"}
const enemy3 = {name:"Strawberer", health: 100, img:"strawberer", bg:"mountain"}
const enemy4 = {name:"Mushroo", health: 100, img:"mushroom", bg:"cave"}

const random = (data) => data[Math.floor(Math.random() * data.length)];

const sfx = {
  bgm: new Howl({
    src: [
      bgm
    ],
    loop: true
  }),
  pass: new Howl ({
    src: [
      passSfx
    ]
  }),
  death: new Howl ({
    src: [
      deathSfx
    ]
  }),
  playerHurt: new Howl ({
    src: [
      playerhurtSfx
    ],
    volume: 0.5
  })
}

const Gamedisplay = () => {

  // bgm
  const [currentBgm, setCurrnetBgm] = useState()

  // question
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
  
  // get question from json
  const getQuestion = () => data.filter((problem) => problem.level === currentLevel && !problem.isPass)

  // get enemy
  const enemy = () => {
    switch(currentLevel) {
      case 1:
        return enemy1
      case 2:
        return enemy2
      case 3:
        return enemy3
      case 4:
        return enemy4
      default:
        return enemy1
    }
  }

  // decrease health systems
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
  }

  
  const playerDied = () => {
    sfx.death.play()
    Swal.fire({
      icon: "warning",
      title: `You are defeated by ${currentEnemy.name}`,
      showDenyButton: true,
      confirmButtonText: "Retry",
      denyButtonText: "Mainmenu"
    }).then(result => {
      if (result.isConfirmed) currentPage(currentLevel)
      else if (result.isDenied || result.dismiss) window.location = "/"
    })
  }
  
  const enemyDied = () => {
    sfx.pass.play()
    Swal.fire({
      icon: "success",
      title: `Congratulations!`,
      text: `You have defeated ${currentEnemy.name}`,
      showDenyButton: true,
      confirmButtonText: "Next stage",
      denyButtonText: "Mainmenu"
    }).then(result => {
        if (result.isConfirmed) currentPage(currentLevel + 1)
        else if (result.isDenied || result.dismiss) window.location = "/"
      })
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
        sfx.playerHurt.play()
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
    
    const isBgm = (value) => {
      setCurrnetBgm(value)
      if (value) {
        sfx.bgm.play()
      }else {
        sfx.bgm.pause()
      }
    }

    const timesOut = () => {
      decreaseHealth(playerHealth, setPlayerHealth, enemies_attackDamage, enemiesDamage, setEnemiesDamage)
      sfx.playerHurt.play()
      question.time += 1
    }

    // check is player died ?
    useEffect(() => {
      if (playerHealth === 0) playerDied()
    }, [playerHealth])
  
    // check is enemy died ?
    useEffect(() => {
      if (enemyHealth === 0) enemyDied()
    }, [enemyHealth])
    
    useEffect(() => {
      if (window.location.pathname == "/") sfx.bgm.stop()
    }, [window.location])
    
    useEffect(() => {
    if (currentLevel > 4) return // if clear all stages
    setQuestion(random(getQuestion()));
    setCurrentEnemy(enemy())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, currentLevel]);
  
  useEffect(() => {
    if (question) setChoice(question.choices);
  }, [question]);
  
  if (currentLevel > 4) {
    return (
      <Cleardisplay/>
      )
  }

  if (question) {
    console.log("re rendering")
    return (      
      <div className="sm:container sm:w-3/4 sm:my-5 mx-auto text-center p-1 drop-shadow-lg animate__animated animate__bounceIn">
        <NavLink to="/">
          <button className="bg-violet-500 hover:bg-violet-500 text-white hover:text-black rounded p-2 absolute left-0 drop-shadow-md">back</button>
        </NavLink>
        <Bgmbutton bgm={isBgm} currentBgm={currentBgm} />
        <Playerhealthbar health={playerHealth} />
        <div className="flex gap-1">
          <Questiondisplay
            question={{
              title: question.title,
              question: question.question,
              time: question.time,
            }}

            timesout={timesOut}
            playerhealth={playerHealth}
          />
          <Enemydisplay name={currentEnemy.name} image={currentEnemy.img} background={currentEnemy.bg} health={enemyHealth} />
        </div>
        <Cardpicker choices={choices} getPlayerAns={getPlayerAns} />
        <Stageselecter getCurrentPage={currentPage} currentLevel={currentLevel} />
      </div>
    );
  }

  return <Lazyload />;
};

export default Gamedisplay;
