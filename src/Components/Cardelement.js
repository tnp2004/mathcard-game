const Cardelement = ({answer, getPlayerAns}) => {
    return (
        <div onClick={() => getPlayerAns(answer)} className="border-4 border-gray-800 bg-white group hover:bg-slate-50 cursor-pointer hover:border-dashed rounded-xl mx-auto drop-shadow-xl w-56 h-80">
            <div className="text-black group-hover:text-gray-800 text-4xl my-28">{answer}</div>
        </div>
    )
}

export default Cardelement