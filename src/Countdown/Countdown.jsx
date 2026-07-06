import { useState } from 'react';
import Buttons from './Buttons.jsx';
import CountdownInfo from './CountdownInfo.jsx';

function Countdown() {

    const [countdownActive, setCountdownActive] = useState(false);
    const [count, setCount] = useState('');
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="ml-auto mr-auto mt-64 pl-8 pr-8 pt-8 pb-8 flex flex-col justify-evenly items-center border border-gray-300 rounded-md w-1/4 h-1/3">
            <h1 className="text-3xl mb-8">Countdown</h1>
            <CountdownInfo countdownActive={countdownActive} count={count} setCount={setCount} inputValue={inputValue} setInputValue={setInputValue} />
            <Buttons countdownActive={countdownActive} setCountdownActive={setCountdownActive} inputValue={inputValue} setCount={setCount} />
        </div>
    )
}

export default Countdown