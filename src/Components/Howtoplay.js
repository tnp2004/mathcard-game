import howtoplayImage from "../Images/howtoplay.png"

const Howtoplay = () => {
    return (
        <div className="h-screen">
           <div className="container mx-auto p-5">
           <h1 className="text-center text-8xl">How to play</h1>
            <div>
                <img src={howtoplayImage} />
            </div>
           </div>
        </div>
    )
}

export default Howtoplay