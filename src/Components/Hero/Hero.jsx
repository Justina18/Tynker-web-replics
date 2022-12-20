import React from 'react'
import './Hero.css'
import { MdPlayArrow } from "react-icons/md";


const Hero = () => {
  return (
    <>
    <div className='Hero-Header'>
                 <h2>Holiday Bonus! All Plans Include 2 FREE Coaching Classes ($120 Value)</h2>
            </div>

    <div className="Body1">
    <div className='Body1_text'>
        <h1>Coding For Kids and Teens Made Easy</h1>
        <p>Tynker is the fun way to learn programming and develop problem-solving & critical thinking skills. Our new bundles include live expert
            coaching to get your child off to a fast, confident start.</p>
        <div className='Body1_button'>
            <button>BUY NOW</button>
            <p>Get Started for Free</p>
        </div>

        <MdPlayArrow className='Play_button' />

    </div>
</div>




    {/* // <div className='Hero'>
    //     <div className='Hero-wrap'>
    //         <div className='Hero-Header'>
    //             <h2>Holiday Bonus! All Plans Include 2 FREE Coaching Classes ($120 Value)</h2>
    //         </div>
    //         <div className='Hero-Body'>
    //             <div className='Hero-Body-Text'>
    //             <h2>Coding For Kids and Teens Made Easy</h2>
    //             <p>Tynker is the fun way to learn programming and <br/>
    //              develop problem-solving & critical thinking skills. <br/>
    //               Our new bundles include live expert coaching to <br/>
    //                get your child off to a fast, confident start.</p>
    //            <div>
    //             <button className='buy'>BUY NOW</button>
    //             <a>Get Started for Free</a>
    //            </div>
    //             </div>
    //             <div className='image1'>
    //                 <img src='/images/hero-graphic.webp' />
    //             </div>
    //         </div>
    //     </div>
    // </div> */}

  </>)
}

export default Hero