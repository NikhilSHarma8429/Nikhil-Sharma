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
import Allinone from './assets/Components/Projects/All-in-one/Allinone'
import Fitsportchamp from './assets/Components/Projects/Fitsportchamp/Fitsportchamp'
import Commentvibe from './assets/Components/Projects/Commentvibe/Commentvibe'
import { SidebarProvider } from './assets/Context/SidebarContext'
import EcommerceClone from './assets/Components/Projects/Ecommerce-clone/EcommerceClone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
        </SidebarProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/all-in-one" element={<Allinone />} />
          <Route path="/projects/commentvibe" element={<Commentvibe/>} />
          <Route path="/projects/fitsportchamp" element={<Fitsportchamp/>} />
          <Route path="/projects/ecommerce-clone" element={<EcommerceClone/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/*" element={<Error/>} />
          <Route path="/projects/*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
