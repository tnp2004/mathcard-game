import Cardelement from "./Cardelement"

const Cardpicker = () => {
    return (
        <div className="border-solid border-2 border-sky-500 my-1 p-2 bg-green-200 flex justify-items-center items-center gap-5">
            <Cardelement/>
            <Cardelement/>
            <Cardelement/>
            <Cardelement/>
            <Cardelement/>
        </div>
    )
}

export default Cardpicker