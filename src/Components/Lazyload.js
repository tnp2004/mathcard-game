import spinner from "../Images/loading.png"

const Lazyload = () => {
    return (
        <div className="mx-auto text-center cursor-wait my-56">
            <img src={spinner} className="animate-spin mx-auto cursor-wait" />
            <label className="text-6xl animate-pulse cursor-wait">Loading</label>
        </div>
    )
}

export default Lazyload