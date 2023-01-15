import Enemy_1 from "../Images/monster_1.png"

const Enemydisplay = () => {
    return (
        <div className="border-solid border-2 border-sky-500 bg-green-200 flex-auto">
            <div className="my-5">
                <div className="border-2 border-black mx-auto bg-green-500 w-3/4">health bar</div>
                <img className="mx-auto" src={Enemy_1} />
            </div>
        </div>
    )
}

export default Enemydisplay