import { useEffect, useState } from "react"
import { Howl } from "howler"
import hitSfx from "../Soundeffects/Hit.wav"

const sfx = {
    hit: new Howl({
      src: [
        hitSfx
      ],
      volume: 0.3
    })
  }

const Enemydisplay = (props) => {
    const [health, setHealth] = useState()
    const [isAnimate, setIsAnimate] = useState()
    const { name, image, background } = props
    const healthProgress = {width: health + "%"}
    
    useEffect(() => {
        setHealth(props.health)
    }, [props])

    useEffect(() => {
        bounceEnemy()
    }, [health])

    const bounceEnemy = () => {
        if (health && health !== 100) {
            sfx.hit.play()
            setIsAnimate(true)
            setTimeout(() => {
              return setIsAnimate(false)
          }, 500);
        }
    }
    
    return (
        <div className="border-solid border-4 border-black bg-green-200 flex-auto bg-auto bg-center bg-no-repeat rounded-tr-xl" style={{backgroundImage: `url(${require(`../Images/backgrounds/${background}.png`)})`}}>
            <div className="my-12">
                <label className="relative font-bold text-xl text-rose-600 bg-slate-900 bg-opacity-40 rounded-lg p-1 inline">
                    <img src={require("../Images/evil.png")} className="inline mx-1 w-5" />
                    {name}
                </label>
                <div className={`animate__animated ${isAnimate ? "animate__headShake" : ''} border-4 border-black bg-slate-100 bg-opacity-30 rounded-2xl xl:w-3/5 mx-auto my-2`}>
                    <div className="bg-gradient-to-l from-rose-500 to-rose-600 font-bold rounded-xl duration-300 " style={healthProgress}>{health}%</div>
                </div>
                <img className={`mx-auto ${isAnimate ? "enemyBounce" : ''}`} src={require(`../Images/monsters/${image}.png`)} />
            </div>
        </div>
    )
}

export default Enemydisplay