import Banner from './Banner/Banner.jsx'
import { useState } from 'react'
import Content from './Content.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  return (
    <>
      <Banner setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} setSelectedMenuItem={setSelectedMenuItem} />
      <Content selectedMenuItem={selectedMenuItem} />
    </>
  )
}

export default App
