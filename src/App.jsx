import { useState } from 'react'
import './App.css'
import Sidebar from './assets/Components/Sidebar/Sidebar'
import Home from './assets/Components/Home/Home'
import Navbar from './assets/Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Resume from './assets/Components/Resume/Resume'
import Projects from './assets/Components/Projects/Projects'
import Contact from './assets/Components/Contact/Contact'
import Error from './assets/Components/Error/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/:id" element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
