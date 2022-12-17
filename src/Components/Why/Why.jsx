import React from 'react'
import './Why.css'

const Why = () => {
  return (
    <div className='Why'>
      <div className='Why-wrap'>
        <div className='Why-Text'>
            <h1>Why Should Kids and Teens Learn to Code with <br/> Tynker?</h1>
            <p> Because technology is so integrated into virtually every aspect of our lives, learning about it is <b>more</b> <br/> important than ever. Our coding platform makes it convenient and fun for kids and teens to gain <br/> knowledge that will serve them well throughout their lives. You can count on our <b>trusted methods</b> to <br/> help them develop and grow their capabilities with computers.<br/>

                Tynker isn't just for schools and coding camps, though. Parents who value <b> STEM education</b> and want <br/> their children to know how to code should know that our kids programming platform can be used at <br/> home, too. Tynker offers a range of solutions with icon-coding for pre-readers, block-based coding, and <br/> advanced courses in Python, JavaScript, data science, art, and image processing. There are individual <br/> and family home plans, and our online coding classes for all ages are an excellent way for them to gain <br/> the supplemental STEM skills needed for their future.</p>
        </div>

        <div className='Why-Cards'>
          <div className='Why1'>
            <h3>CODING BENEFITS</h3>
            <p className='p'>Top 10 Reasons to Code</p>
            <p className='p'>Kids Coding Basics</p>
            <p className='p'>Develop 21st Century Skills</p>
            <p className='p'>Download eBooks on Coding</p>
          </div>

          <div className='Why1'>
            <h3>CODING GUIDES</h3>
            <p className='p'>What is Coding for Kids</p>
            <p className='p'>Coding with Minecraft</p>
            <p className='p'>Coding with Electronic Kits</p>
            <p className='p'>Coding with Connected Toys</p>
            <p className='p'>More Coding Resources</p>
          </div>

          <div className='Why1'>
            <h3>TYNKER HIGHLIGHTS</h3>
            <p className='p'>What’s New in Tynker?</p>
            <p className='p'>COVID-19 Impact report</p>
            <p className='p'>Meet our Featured Makers</p>
            <p className='p'>Seasonal Coding Projects</p>
            <p className='p'> Celebrating Womn in STEM</p>
          </div>

          <div className='Why1'>
            <h3>CODING IN SCHOOLS</h3>
            <p className='p'>K-12 School Plans</p>
            <p className='p'>AP Computer Sciencs Principles</p>
            <p className='p'>AP Computer Science A</p>
            <p className='p'>Remote Learning</p>
            <p className='p'>K-12 Sucess Stories</p>
          </div>
        </div>

        <div className='Trust'>
          <h1>Trusted by Leading Brands</h1>
          <p>Our methods for learning to code all are provided within a safe, moderated community that is built <br/> around encouraging students to gain confidence in their abilities and do so without fear of failure.</p>
          <div className='Trust-Img'>
            <div>
              <img className='Trust-images' src='/images/logo-apple.png'/>
              <img className='Trust-images' src='/images/logo-googleedu.png'/>
              <img className='Trust-images' src='/images/logo-microsoft.png' />
              <img className='Trust-images' src='/images/logo-nasa.png' />
              <img className='Trust-images' src='/images/logo-pbs.png' />
              <img className='Trust-images' src='/images/logo-bbc-learning.png' />
          </div>
          <div>
              <img className='Smart' src='/images/logo-smart-dark.png'/>
              <img className='Trust-images' src='/images/logo-lego.png'/>
              <img className='Trust-images' src='/images/logo-mc.png' />
              <img className='Trust-images' src='/images/logo-mattel.png' />
              <img className='Trust-images' src='/images/logo-hotwheels.png' />
              <img className='Trust-images' src='/images/logo-barbie.png' />
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Why;