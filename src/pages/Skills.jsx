
import React from 'react'
import '../components/styles/Skills.css'

const Skills = () => {
  return (
    <div className='skills_box'>
      <div className='title_skills'>
        skills
      </div>
      <hr className='linea_skills' />
      <div className='text_skills'>
        "these are some of my skills
      </div>
      <div className='text_skills2'>
        "I also have soft skills such as sociability, adaptability, discipline and commitment
      </div>
      <img className='logoreact' src="react.png" alt="" />
      <img className='logocss' src="css.png" alt="" />
      <img className='logohtml' src="html.png" alt="" />
      <img className='logojs' src="js.png" alt="" />
      <img className='logogit' src="github.png" alt="" />
      <img className='logopostgre' src="postgre.png" alt="" />
      <img className='logopostman' src="postman.png" alt="" />
      <img className='logonode' src="node.png" alt="" /> 
      <div class="scroll_skills"></div>
      <div class="scroll_skillsone"></div>
      <div class="scroll_skillstwo"></div>

    </div>
  )
}

export default Skills