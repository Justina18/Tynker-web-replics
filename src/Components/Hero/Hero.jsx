import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
        <div className='Hero'>
            <div className='Hero-Header'>
                <h2>Holiday Bonus! All Plans Include 2 FREE Coaching Classes ($120 Value)</h2>
            </div>
            <div className='Hero-Body'>
                <div className='Hero-Body-Text'>
                <h2>Coding For Kids and Teens Made Easy</h2>
                <p>Tynker is the fun way to learn programming and <br/>
                 develop problem-solving & critical thinking skills. <br/>
                  Our new bundles include live expert coaching to <br/>
                   get your child off to a fast, confident start.</p>
               <div>
                <button>BUY NOW</button>
                <a>Get Started for Free</a>
               </div>
                </div>
                <div>
                    <img src='/images/hero-graphic.webp' className='image1'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero