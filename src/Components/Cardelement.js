import { Howl } from "howler"
import clickSfx from "../Soundeffects/Click.wav"

const sfx = {
    click: new Howl({
      src: [
        clickSfx
      ],
      volume: 0.3
    })
  }

const Cardelement = ({answer, getPlayerAns}) => {
    return (
        <div onClick={() => {
            getPlayerAns(answer)
            sfx.click.play()
            }}  className="border-4 border-violet-900 bg-white group cursor-pointer hover:border-dashed rounded-xl mx-auto drop-shadow-md w-56 h-80">
            <div className="text-violet-500 group-hover:text-violet-700 group-hover:underline underline-offset-2 text-4xl my-28">{answer}</div>
        </div>
    )
}

export default Cardelement