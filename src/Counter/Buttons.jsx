function Buttons({ increment, reset }) {
    return (
        <div className="flex flex-row gap-4">
            <button onClick={increment} className="bg-white text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded">
                Count
            </button>
            <button onClick={reset} className="bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-500 font-bold py-2 px-4 rounded">
                Reset
            </button>
        </div>
    )
}
 
export default Buttons