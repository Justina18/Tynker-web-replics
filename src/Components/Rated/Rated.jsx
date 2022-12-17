import React from 'react'
import './Rated.css'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

const Rated = () => {
  return (
    <div className='Rated'>
        <div className='Rated-Header'>
            <h1>3 Highly-Rated Mobile Apps for Learning Code</h1>
            <p>Download Tynker apps and learn to code on the go.</p>
            <button>LEARN MORE</button>
        </div>
        <div className='Rated-content'>
            <div>
                <img src='/images/graphic-mobile.webp '/>
            </div>

            <div className='Rated-Texts'>
                <div className='Rated1'>
                <div>
                    <img src='/images/icon-junior.webp'/>
                    <div>
                        <div>
                        <h4>Tynker Junior</h4>
                        <p>Tap-Tap picture coding with voice-overs. Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7</p>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <BsStarHalf/>
                            4.5
                            2,200+ reviews
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div>
                    <img src='/images/icon-app.webp'/>
                    <div>
                        <h4>Tynker</h4>
                        <p>Drag-and-drop block coding with a full-featured workshop. Build games and apps, compose music and art, control smart devices, and much, much more. Ages 7-12</p>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <BsStarHalf/>
                            4.7
                            10,400+ reviews
                        </div>
                    </div>
                    <div>
                    <img src='/images/icon-mod.webp'/>
                        <h4>Mod Creator</h4>
                        <p>Drag-and-drop Minecraft modding. Design skins, blocks and items. Modify mob behaviors. Create mods and add ons. Explore worlds! Ages 7-12</p>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                            4.0
                            3,300+ reviews
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Rated