import React from 'react'
import './Community.css'


const Community = () => {
  return (
    <div className="Community">
        <div>
            <div className='Community-Header'>
                <h1 className='Community-Head'>Join Tynker's Global Community</h1>
                <button>SIGN UP FREE</button>
            </div>
            <div className='Community-body'>
              
              <div className='circle-holder'>
              <div className='circle-wrap1'>
            <div className='circle'>
              <h1 className='circle-text'>60 <br/> Million</h1>
              <p>students</p>
            </div>
              </div>
              </div>

                
              <div className='circle-wrap'>
            <div className='circle1'>
              <h1 className='circle-text'>Over 70<br/> Billion</h1>
              <p>lines of code</p>
            </div>
              </div>
              

  <div className='circle-holder1'>
              <div className='circle-wrap2'>
            <div className='circle2'>
              <h1 className='circle-text'>Over 100 <br/> Thousand</h1>
              <p>schools</p>
            </div>
              </div>
              </div>

               </div>
        </div>
    </div>
  )
}

export default Community;