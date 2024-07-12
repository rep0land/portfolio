
import './App.css'
import Skills from './pages/Skills'
import MyWork from './pages/MyWork'
import Contact from './pages/Contact'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import { Route, Routes } from 'react-router-dom'
import Header from './components/shared/Header'
import { useEffect, useState } from 'react'
import CustomCursor from './components/shared/Cursor'
import ThreeBackground from './components/shared/ThreeBackground'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='app'>
      <CustomCursor />
      <ThreeBackground />
      <div className='content'>
        {
          isLoading
            ? <p className='loading'>Loading... </p>
            : (
              <>
                <div>
                  <Header />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/AboutMe' element={<AboutMe />} />
                    <Route path='/Skills' element={<Skills />} />
                    <Route path='/MyWork' element={<MyWork />} />
                    <Route path='/Contact' element={<Contact />} />
                  </Routes>
                </div>
              </>
            )
        }
      </div>
    </div>

  )
}

export default App


