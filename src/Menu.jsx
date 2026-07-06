function Menu({ setIsMenuOpen, isMenuOpen, setSelectedMenuItem }) {
    const menu_list = ['Counter']
    return (
        <div className="shadow-gray-20 shadow-xs w-screen">
            <ul className="list-none flex flex-row flex-wrap ">
                {menu_list.map((item) => (
                    <li className="py-4 px-12 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => { setIsMenuOpen(!isMenuOpen); setSelectedMenuItem(item); }} key={item}>
                        <h2>{item}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu