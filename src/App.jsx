import Banner from './Banner'
import { useState } from 'react'
import Content from './Content';

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
