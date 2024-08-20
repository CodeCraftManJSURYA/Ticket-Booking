import React from 'react'
import Img1 from '../../images/slider/img-1.png'
import Img2 from '../../images/slider/img-2.png'
import Img3 from '../../images/slider/img-3.png'
import Img4 from '../../images/slider/img-4.png'
import Img5 from '../../images/slider/img-5.png'
import Img6 from '../../images/slider/img-6.png'
import Img7 from '../../images/slider/img-7.png'
import Img8 from '../../images/slider/img-8.png'
import Img9 from '../../images/slider/img-9.png'

import './Scroller.css'

function Scroller() {
  return (
    <div className='Slider-container'>
    <div className='Slider'>
        <div className='Slider-track'>

            {/* first 3 slides */}
            <div className='Slide'>
                <img src={Img1} alt='img-1'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img2} alt='img-2'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img3} alt='img-3'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img4} alt='img-4'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img5} alt='img-5'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img6} alt='img-6'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img7} alt='img-7'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img8} alt='img-8'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img9} alt='img-9'>
                </img>

            </div>

            {/* next three slides */}

            <div className='Slide'>
                <img src={Img1} alt='img-1'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img2} alt='img-2'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img3} alt='img-2'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img4} alt='img-4'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img5} alt='img-5'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img6} alt='img-6'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img7} alt='img-7'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img8} alt='img-8'>
                </img>

            </div>
            <div className='Slide'>
                <img src={Img9} alt='img-9'>
                </img>

            </div>

        </div>

    </div>
    </div>
  )
}

export default Scroller
