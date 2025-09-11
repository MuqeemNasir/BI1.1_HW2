import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hotel from './components/Hotels'
import HotelByName from './components/HotelByName'
import AddHotelForm from './components/AddHotelForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddHotelForm />
      <Hotel />      
      <HotelByName name="Lake View" />      
    </>
  )
}

export default App
