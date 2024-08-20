import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Booking from './Booking'
import CreateAccount from './Components/CreateAccount/CreateAccount'
import Login from './Components/CreateAccount/Login'
import SeatSelection from './Components/Seatselection/Seatselection'

function App() {

  return (
   <div>

      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path='/signup' element={<CreateAccount/>}/>
        <Route path='/Signin' element={<Login/>}/>
        <Route path='/Seatselection' element={<SeatSelection />}/>

        
      </Routes>
      </BrowserRouter>

   </div>
    
  )
}

export default App