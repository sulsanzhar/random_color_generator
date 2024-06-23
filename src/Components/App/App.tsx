import { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { ColorValue } from '../ColorValue/ColorValue'
import { Square } from '../Square/Square'
import './App.css'

function App() {
  const [randomColor, setRandomColor] = useState<string>('');

  useEffect(() => {
    setRandomColor(getRandomVibrantColor())
  }, []);

  function getRandomVibrantColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * (100 - 65) + 65);
    const lightness = Math.floor(Math.random() * (100 - 50) + 50);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  const clickHandler = () => {
    setRandomColor(getRandomVibrantColor())
  }
  return (
    <div className='app'>
      <Square color={randomColor}/>
      <ColorValue value={randomColor}/>
      <Button onClickHandler={clickHandler}/>
    </div>
  )
}

export default App
