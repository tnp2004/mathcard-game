import { useEffect, useState } from "react"

const Stageselector = ({getCurrentPage}) => {
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        getCurrentPage(currentPage)
    }, [currentPage])

    return (
        <div className="border-2 border-black p-1">
           <div className="flex">
            <button className={`${currentPage == 1 ? "bg-rose-500" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold w-10 h-10 rounded-full mx-auto`} onClick={() => setCurrentPage(1)}>1</button>
            <button className={`${currentPage == 2 ? "bg-rose-500" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold w-10 h-10 rounded-full mx-auto`} onClick={() => setCurrentPage(2)}>2</button>
            <button className={`${currentPage == 3 ? "bg-rose-500" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold w-10 h-10 rounded-full mx-auto`} onClick={() => setCurrentPage(3)}>3</button>
            <button className={`${currentPage == 4 ? "bg-rose-500" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold w-10 h-10 rounded-full mx-auto`} onClick={() => setCurrentPage(4)}>4</button>
           </div>
        </div>
    )
}

export default Stageselector