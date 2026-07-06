function Buttons({
    countdownActive,
    setCountdownActive,
    inputValue,
    setCount
}) {
    function handleClick() {
        if (!countdownActive) {
            setCount(inputValue);      // Start from the input
        } else {
            setCount(0);                // Reset to 0 when stopping
        }

        setCountdownActive(prev => !prev);
    }

    return (
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 mt-8">
            {countdownActive ? "Stop" : "Start"}
        </button>
    );
}

export default Buttons;