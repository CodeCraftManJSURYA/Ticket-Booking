import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './Booking.css'

function Booking() {
  return (
    <div className='Booking-root'>
        <Header />
        <div className='Booking-containner'>
            <div className='Theater'>
                <div className='Theater-name'>
                <p>SB Cinemas (Sri Bahavathi) 4K Dolby Atmos : Poonamalli</p>
                </div>
                <div className='Movie-timing'>
                    <Link to={'/Seatselection'}>
                <button className='Time'>09.15 am
                    Dolby atmos
                </button>
                </Link>
                
                <Link to={'/Seatselection'}>
                <button className='Time'>011.30 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>03.15 pm
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>06.40 pm
                    Dolby atmos
                </button>
                </Link>
                </div>
            </div>


            <div className='Theater'>
                <div className='Theater-name'>
                <p>Anna Cinemas: Mount Road</p>
                </div>
  
                <div className='Movie-timing'>
                <Link to={'/Seatselection'}>
                <button className='Time'>09.15 am
                Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>10.30 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>02.15 pm
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>05.40 pm
                    Dolby atmos
                </button>
                </Link>

                </div>

            </div>
            <div className='Theater'>
                <div className='Theater-name'>
                <p>Arul Murugan Theater 4K : Thiruporur</p>
                </div>
  
                <div className='Movie-timing'>
                <Link to={'/Seatselection'}>
                <button className='Time'>09.15 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>011.30 am
                    Dolby atmos
                </button>
                </Link>
        
                <Link to={'/Seatselection'}>
                <button className='Time'>03.15 pm
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>06.40 pm
                    Dolby atmos
                </button>
                </Link>
                </div>

            </div>
            <div className='Theater'>
                <div className='Theater-name'>
                <p>INOX National : Arcot Road</p>
                </div>
  
                <div className='Movie-timing'>
                <Link to={'/Seatselection'}>
                <button className='Time'>09.15 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>011.30 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>03.15 pm
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>06.40 pm
                    Dolby atmos
                </button>
                </Link>
                </div>

            </div>
            <div className='Theater'>
                <div className='Theater-name'>
                <p>PVR : Aerohub, Chennai</p>
                </div>
  
                <div className='Movie-timing'>
                <Link to={'/Seatselection'}>
                <button className='Time'>09.15 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>011.30 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>03.15 pm
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>06.40 pm
                    Dolby atmos
                </button>
                </Link>

                </div>

            </div>

            <div className='Theater'>
                <div className='Theater-name'>
                <p>Rohini silver Screens : Koyembedu</p>
                </div>
  
                <div className='Movie-timing'>
                <Link to={'/Seatselection'}>
                <button className='Time'>09.15 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>011.30 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>03.15 pm
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>06.40 pm
                    Dolby atmos
                </button>
                </Link>

                </div>

            </div>
            <div className='Theater'>
                <div className='Theater-name'>
                <p>Sivasakthi Cinemas 4K RGB Laser : Padi</p>
                </div>
  
                <div className='Movie-timing'>
                <Link to={'/Seatselection'}>
                <button className='Time'>09.15 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>11.30 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>03.15 pm
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>06.40 pm
                    Dolby atmos
                </button>
                </Link>
                </div>

            </div>
            <div className='Theater'>
                <div className='Theater-name'>
                <p>PVR : Sathyam, Royapettah</p>
                </div>
  
                <div className='Movie-timing'>
                <Link to={'/Seatselection'}>
                <button className='Time'>09.15 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>11.30 am
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>03.15 pm
                    Dolby atmos
                </button>
                </Link>

                <Link to={'/Seatselection'}>
                <button className='Time'>06.40 pm
                    Dolby atmos
                </button>
                </Link>

                </div>

            </div>


        </div>
        <Footer />
    </div>
  )
}

export default Booking