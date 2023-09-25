
import { LineChart } from 'recharts'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Price from './Components/Price/Price'
import LiChart from './Components/LineChart/LineeChart'
import Phones from './Components/Phones/Phones'



function App() {


  return (
    <>
     <Navbar></Navbar>


      <h1 className='text-5xl'>Vite + React</h1>

   <Price></Price>

   <LiChart></LiChart>
   <Phones></Phones>
     
  </>
  )
}

export default App
