import React from 'react'
import './Header.css'
import Body from '../Body/Body'
import Hero from '../Hero/Hero'
import CardOne from '../Cards/CardOne'
import CardTwo from '../Cards/CardTwo'
import Rated from '../Rated/Rated'
import Why from '../Why/Why'
import {ImGift} from 'react-icons/im'
import Community from '../Community/Community'
import Faq from '../FAQ/Faq'


const Header = () => {
  return (
    <div className='Head'>
        <div className='Head-Wrap'>
        <div>
            <img src="/images/tynker-byjus-logo-white.png" className='logo'/>
          </div>
          <div className='Head-list'>
            <a>PLAY</a> 
            <a>PARENTS</a>
            <a>EDUCATORS</a>
            <a>WHY CODE?</a>
           
            <a> <ImGift/> GIFT</a>
            </div>
            <div className='end'>
                <button className='Header-butt'>JOIN FOR FREE</button>
                <p className='log'>LOG IN</p>
         </div> 
        </div>
    <Hero/>
    <Body />
    <CardOne/>
    <CardTwo/>
    <Rated/>
    <Why/>
    <Community/>
    {/* <Faq/> */}
    </div>
  )
}

export default Header;