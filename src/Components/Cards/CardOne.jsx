import React from 'react'
import './Cards.css'


const CardOne = () => {
  return (
    <>
        <div className='CardOne'>
            <div className='CardOne-Text'>
                <h1>The #1 Coding Program for Kids and <br/> Teens</h1>
                <p>Tynker powers the creativity of over <b> 60 million students </b> and serves thousands of schools and educators worldwide.

                    Our interactive story-based learning allows kids and teens to learn the basics with easy block-based coding challenges before seamlessly transitioning to real-world <a> text-based languages </a> like <b>JavaScript </b> and <b>Python</b>.

                    With 70+ award-winning courses, there's a learning path for every student, no matter their age or level. We have over 5,000 lessons, backed by hundreds of built-in tutorials, hands-on projects and interactive assessments.</p>
                <button>EXPLORE CURRICULUM</button>
            </div>
            <img src='/images/learning-path.webp'/>
        </div>
    </>
  )
}

export default CardOne