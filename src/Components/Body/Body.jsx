import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className='Body'>
        <div className='Body-Wrap'>
            <div>
                <img src='/images/test.png' className='image-1'/>    
            </div>
            <div  className='Body-Text'>
            <img src='/images/logo.png' className='image-2'/> <br/> 
             Have you caught World Cup fever yet? With matches beginning <br/>
            in November, excitement is high all around the world. As part <br/>
             of the celebrations, Tynker from BYJU’s has teamed up with <br/>
              FIFA to promote kids coding in an all new way.

                When you play a match in BYJU’S Coding Cup, your team runs <br/>
                on code that you write! Can you code a smarter soccer team? <br/>
                  You’ll learn a lot more by practicing and playing and of course <br/>
                — scoring! Anyone of any age or skill level can play for free. <br/>
                  This is a perfect way for your child to start their love of coding!
             <button className='Button1'>PLAY NOW</button>
             </div>
        </div>
    </div>
  )
}

export default Body