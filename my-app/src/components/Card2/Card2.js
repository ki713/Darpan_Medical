import React from 'react'
import './Card2.css'
import med from '../medicine.png';
import {TbMessageShare} from "react-icons/tb"


const Card2 = () => {
  return (
    <div className='card2-main'>
       {/* 1st Card */}
    
       <div className='card-container'>
        <div className='image-container'>
        <img src={med} alt ="React Logo"/>

        </div>

        <div className='card-text1'>
            <h5>Favipiravir 400mg(Fabiflu) Tablets</h5>
        </div>

        <div className='card-money'>
            <h6><span>Rs 1,775</span>/ stripe</h6>
        </div>


        <div className='card-text2'>
            <h5>Glenmark Pharmaceutical Limited</h5>

        </div>


        <div className='card-text3'>
            <h6>Parvat Patiya,Surat,Gujarat</h6>

        </div>

        <div className='card-text4'>
            <hr />
            <h3><TbMessageShare />Contact Supplier</h3>

        </div>
     
      </div>

      {/* 2nd Card */}

      <div className='card-container'>
        <div className='image-container'>
        <img src={med} alt ="React Logo"/>

        </div>

        <div className='card-text1'>
            <h5>Favipiravir 400mg(Fabiflu) Tablets</h5>
        </div>

        <div className='card-money'>
            <h6><span>Rs 1,775</span>/ stripe</h6>
        </div>


        <div className='card-text2'>
            <h5>Glenmark Pharmaceutical Limited</h5>

        </div>


        <div className='card-text3'>
            <h6>Parvat Patiya,Surat,Gujarat</h6>

        </div>

        <div className='card-text4'>
            <hr />
            <h3><TbMessageShare />Contact Supplier</h3>

        </div>

      </div>

      {/* 3rd Card */}
      <div className='card-container'>
        <div className='image-container'>
        <img src={med} alt ="React Logo"/>

        </div>

        <div className='card-text1'>
            <h5>Favipiravir 400mg(Fabiflu) Tablets</h5>
        </div>

        <div className='card-money'>
            <h6><span>Rs 1,775</span>/ stripe</h6>
        </div>


        <div className='card-text2'>
            <h5>Glenmark Pharmaceutical Limited</h5>

        </div>


        <div className='card-text3'>
            <h6>Parvat Patiya,Surat,Gujarat</h6>

        </div>

        <div className='card-text4'>
            <hr />
            <h3><TbMessageShare />Contact Supplier</h3>

        </div>

        
      
     
      </div>
    </div>
  )
}

export default Card2
