import React from 'react'
import { FcLike } from "react-icons/fc";
import Img1 from '../../images/cards/img-1.png'
import Img2 from '../../images/cards/img-2.png'
import Img3 from '../../images/cards/img-3.png'
import Img4 from '../../images/cards/img-4.png'
import Img5 from '../../images/cards/img-5.png'
import './Cards.css'
import { Link } from 'react-router-dom';


function Cards() {
  return (
    <div className='Cards'>
                    <div className="card1">
                <img src={Img1} />
                <div className='Likes'>
                    <FcLike className='Like-icon'/>
                    <p>23.7k likes</p>
                </div>
                <div className="container">
                    <h3>Jailer</h3>
                    <p> Action/Western</p>
                </div>
                <div className='booking-tickets'>
                <Link to='./Booking'>
                <button className='Booing-btn'>Book tickets</button>
                </Link>
                </div>
            </div>

            <div className="card2">
                <img src={Img2} />
                <div className='Likes'>
                    <FcLike className='Like-icon'/>
                    <p>15.5k likes</p>
                </div>
                <div className="container">
                    <h3>Mahaan</h3>
                    <p>Thriller/Action</p>
                </div>
                <div className='booking-tickets'>
                <Link to='./Booking'>
                <button className='Booing-btn'>Book tickets</button>
                </Link>

                </div>
            </div>
            <div className="card3">
                <img src={Img3} />
                <div className='Likes'>
                    <FcLike className='Like-icon' />       
                    <p>27k likes</p>
                </div>
                <div className="container">
                    <h3>G.O.A.T</h3>
                    <p>Action/Sci-fi</p>
                </div>
                <div className='booking-tickets'>
                <Link to='./Booking'>
                <button className='Booing-btn'>Book tickets</button>
                </Link>

                </div>
            </div>

            <div className="card4">
                <img src={Img4}/>
                <div className='Likes'>
                    <FcLike className='Like-icon'/>
                    <p>40k likes</p>
                </div>
                <div className="container">
                    <h3>Captian Miller</h3>
                    <p>Action/Adventure</p>
                </div>
                <div className='booking-tickets'>
                <Link to='./Booking'>
                <button className='Booing-btn'>Book tickets</button>
                </Link>
                </div>
            </div>

            <div className="card5">
                <img src={Img5} />
                <div className='Likes'>
                    <FcLike className='Like-icon' />
                    <p>35k likes</p>
                </div>
                <div className="container">
                    <h3>Kanguva</h3>
                    <p>Action/Fantasy</p>
                </div>
                <div className='booking-tickets'>
                <Link to='./Booking'>
                <button className='Booing-btn'>Book tickets</button>
                </Link>
                </div>
            </div>





    </div>
  )
}

export default Cards