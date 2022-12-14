import React from 'react'
import './Header.css'
import Body from '../Body/Body'
import Hero from '../Hero/Hero'
import CardOne from '../Cards/CardOne'
import CardTwo from '../Cards/CardTwo'
import CardThree from '../Cards/CardThree'


const Header = () => {
  return (
    <div className='Head'>
        <div className='Head-Wrap'>
            <div>
            HELLLOOO
            </div>
            <div className='Head-list'>
            <ol>PLAY</ol> 
            <ol>PARENTS</ol>
            <a>EDUCATORS</a>
            <a>WHY CODE?</a>
            <a>GIFT</a>
            </div>
            <div>
                <button>JOIN FOR FREE</button>
                LOG IN
            </div>
        </div>
    <Hero/>
    <Body />
    <CardOne/>
    <CardTwo/>
    <CardThree/>
    </div>
  )
}

export default Header;