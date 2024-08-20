import React from 'react'
import { GiForestCamp } from "react-icons/gi";
import { FcCustomerSupport } from "react-icons/fc";
import { IoTicketSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from '../../images/logo.svg'




import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='Block-1'>
            <GiForestCamp  className='Camp'/>
            <p className='List-Show'>List your show</p>
            <p className='List-Show-Content'>Got a show, event, activity or a great experiance? Partner with us & get listed on HOUSEFULL</p>
            <button className='Contact-today'>contact today!</button>
        </div>

        <div className='Block-2'>
            <div className='Customer-care'>
            <FcCustomerSupport className='Care-logo' />
            <p className='Block-2-p'>24/7 CUSTOMER CARE</p>
            </div>

            <div className='Booking-conformation'>
            <IoTicketSharp className='Conformation-logo'/>
            <p className='Block-2-p' >RESEND BOOKING CONFORMATION</p>
            </div>
            <div className='Subscribe-newsletter'>
            <HiOutlineMailOpen className='Newsletter-logo' />
            <p className='Block-2-p'>SUBSCRIBE TO THE NEWSLETTER</p>
            </div>    
        </div>

        <div className='Block-3'>
          <hr></hr>
          <img src={Logo} className='Footer-logo'></img>
          <hr></hr>
        </div>

        <div className='Block-4'>
          <div className='Facebbook'><FaFacebookF className='Social-logo'/>
          </div>
          <div className='Instagram'><FaInstagramSquare className='Social-logo'/>
          </div>
          <div className='Youtube'><FaYoutube className='Social-logo'/>
          </div>
          <div className='Twitter'><FaXTwitter className='Social-logo'/>
          </div>
          <div className='Pintrest'><FaPinterest className='Social-logo'/>
          </div>
          <div className='Linkedin'><FaLinkedinIn className='Social-logo'/>
          </div>
    

        </div>

    </div>
  )
}

export default Footer