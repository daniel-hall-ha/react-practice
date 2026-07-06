import Counter from './Counter.jsx';

function Content({selectedMenuItem}) {

    if (selectedMenuItem && selectedMenuItem.toLowerCase() === 'counter') {
        return (
            <div className="fixed inset-0 z-40">
                <Counter />
            </div>
        )
    }

}

export default Content