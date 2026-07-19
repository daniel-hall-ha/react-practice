import Menu from './Menu.jsx'

function Banner({ setIsMenuOpen, isMenuOpen, setSelectedMenuItem }) {

    return(
        <div className="z-10 sticky">
            <div className="p-4 bg-blue-500 text-white flex flex-row justify-between items-center w-screen">
              <div>
                <h1 className="text-base font-bold">Hello World</h1>
                <p>Welcome to React Application</p>
              </div>
              <div>
                <i class="fa-solid fa-bars" onClick={() =>setIsMenuOpen(!isMenuOpen)}></i>
              </div>
            </div>
            {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} setSelectedMenuItem={setSelectedMenuItem} />}
        </div>
    )
}

export default Banner