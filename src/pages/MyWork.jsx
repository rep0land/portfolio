
import React from 'react'
import '../components/styles/MyWork.css'

const MyWork = () => {
  return (
    <div className='myWork_box'>
      <div className='title_work'>
        my Work
      </div>
      <hr className='linea_work' />
      <div className='text_work'>
      "look here, some of my developed works"
      </div>
      <div className='cuadro_work'></div>
      <div className='cuadro_work2'></div>
      <div className='cuadro_work3'></div>
      <div className='cuadro_work4'></div>    
      <div class="scroll_work"></div>
      <div class="scroll_workone"></div>
      <div class="scroll_worktwo"></div>
      <div class="scroll_worktree"></div>
      <img className='w1' src="rickmorty.png" alt="" /> 
      <img className='w2' src="appclima.png" alt="" /> 
      <img className='w3' src="crudpeli.png" alt="" /> 
      <img className='w4' src="ecommerce.png" alt="" /> 
      <div class="t1">RickandMorty App</div>
      <div class="t2">Wheather App</div>
      <div class="t3">CRUD Movies</div>
      <div class="t4">Ecommerce</div>
    </div> 

  )
}

export default MyWork