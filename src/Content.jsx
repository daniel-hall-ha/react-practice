import Counter from './Counter/Counter.jsx';
import Countdown from './Countdown/Countdown.jsx';

function Content({selectedMenuItem}) {

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'counter') {
        return (
            <div className="fixed inset-0 z-40">
                <Counter />
            </div>
        )
    }

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'countdown') {
        return (
            <div className="fixed inset-0 z-40">
                <Countdown />
            </div>
        )
    }

}

export default Content