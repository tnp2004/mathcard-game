import howtoplayImage from "../Images/howtoplay.png"

const Howtoplay = () => {
    return (
        <div id="howToPlay" className="container-fluid h-screen">
           <div className="container mx-auto p-5">
           <h1 className="text-center text-8xl drop-shadow-xl my-1 underline underline-offset-5">How to play</h1>
           <img src={howtoplayImage} />
           </div>
           <div className="mx-auto w-1/2 font-bold text-violet-900 text-3xl p-5 leading-relaxed drop-shadow-2xl">
                <h1>1. Choose a stage what you want to play.</h1>
                <h1>2. Look at the question.</h1>
                <h1>3. Pick a card that you think is correct.</h1>
                <h1>4. If time runs out, you will be attacked by enemies and time will count down again.</h1>
                <h1>5. If you pick the correct card You will attack the enemy, if not you will be attacked by the enemy.</h1>
           </div>
        </div>
    )
}

export default Howtoplay