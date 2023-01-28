import { useEffect, useState } from "react"

const Stageselector = ({getCurrentPage, currentLevel}) => {
    const [currentPage, setCurrentPage] = useState(currentLevel)
    useEffect(() => {
        getCurrentPage(currentPage)
    }, [currentPage])

    useEffect(() => {
        setCurrentPage(currentLevel)
    }, [currentLevel])

    return (
        <div className="flex relative box-border">
            <div className="absolute my-4 w-full border-2 border-black z-0"></div>
            <button className={`${currentPage === 1 ? "bg-rose-500" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold w-10 h-10 rounded-full mx-auto z-10`} onClick={() => setCurrentPage(1)}>1</button>
            <button className={`${currentPage === 2 ? "bg-rose-500" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold w-10 h-10 rounded-full mx-auto z-10`} onClick={() => setCurrentPage(2)}>2</button>
            <button className={`${currentPage === 3 ? "bg-rose-500" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold w-10 h-10 rounded-full mx-auto z-10`} onClick={() => setCurrentPage(3)}>3</button>
            <button className={`${currentPage === 4 ? "bg-rose-500" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold w-10 h-10 rounded-full mx-auto z-10`} onClick={() => setCurrentPage(4)}>4</button>
        </div>
    )
}

export default Stageselector