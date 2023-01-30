import { useEffect, useState } from "react"
import musicIcon from "../Images/musical-note.png"

const Bgmbutton = ({bgm, currentBgm}) => {
    const [isPlay, setIsPlay] = useState(currentBgm)

    useEffect(() => {
        setIsPlay(currentBgm)
    }, [currentBgm])

    return (
        <button onClick={() => {
            setIsPlay(!isPlay)
            bgm(!isPlay)
        }} className={`${isPlay ? "bg-violet-400 hover:bg-violet-500" : "bg-violet-400/50 hover:bg-violet-500/50"} drop-shadow-2xl border-4 rounded-full w-12 h-12 p-2 sticky left-full`}>
            <img className={`${isPlay ? "opacity-100" : "opacity-50"}`} src={musicIcon} />
        </button>
    )
}

export default Bgmbutton