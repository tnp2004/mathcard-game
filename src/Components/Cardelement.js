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
            }}  className="border-2 md:border-4 border-violet-900 bg-white group cursor-pointer hover:border-dashed rounded-xl mx-auto drop-shadow-xl w-28 h-32 md:w-48 md:h-64">
            <div className="text-violet-500 group-hover:text-violet-700 group-hover:underline underline-offset-2 text-xl my-12 md:text-4xl md:my-28">{answer}</div>
        </div>
    )
}

export default Cardelement