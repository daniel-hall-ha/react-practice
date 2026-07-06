import Buttons from './Buttons'

function increment() {
    document.querySelector('span').textContent++
}

function reset() {
    document.querySelector('span').textContent = 0
}

function Counter() {
    return (
        <div className="ml-auto mr-auto mt-64 pl-8 pr-8 pt-8 pb-8 flex flex-col justify-center items-center border border-gray-300 rounded-md w-fit">
            <h2 className="text-3xl">Counter</h2>
            <p className="mt-4 mb-4"><span className="text-2xl">0</span></p>
            <Buttons increment={increment} reset={reset} />
        </div>
    )
}

export default Counter