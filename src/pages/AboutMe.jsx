
import React from 'react'
import '../components/styles/AboutMe.css'

const AboutMe = () => {
  return (
    <div className='about_box'>
      <div className='title_about'>
        about
      </div>
      <hr className='linea_about' />
      <div className='text_about'>
        Hello, my name is Enmanuel, I am a full stack web developer,
        handling tasks from front-end development to the interaction of requests with the back-end.
      </div>
      <div className='cuadro_cv'>
       
      </div>
      <a className='cv' href="/e_acosta_cv.pdf" target="_blank" rel="noopener noreferrer">CV HERE! </a>
      <div class="phrase_about">
      ❝I adapt to your styles and preferences❞
      </div>
      <div class="scroll_about"></div>
      <div class="scroll_aboutone"></div>
    </div>
  )
}

export default AboutMe