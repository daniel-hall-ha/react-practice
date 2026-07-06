import { useEffect } from "react";

function Countdown({ countdownActive, count, setCount, inputValue, setInputValue }) {

    useEffect(() => {

        if (!countdownActive) {
            return;
        }

        if (count <= 0) {
            return;
        }

        const timer = setInterval(() => {
            setCount(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    },[countdownActive, count, setCount]);

    if (!countdownActive && count === 0) {
        return <input type="number" placeholder="Enter countdown number." className="border border-gray-300 p-2 w-fit" value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value) || 0)} />;
    }

    return <h1 className="text-5xl font-medium">{count}</h1>;
}

export default Countdown;