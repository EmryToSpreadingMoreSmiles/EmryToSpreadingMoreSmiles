import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Mission from './components/Mission'
import ContactUs from './components/ContactUs'

import { motion } from 'framer-motion'
import { styles } from './styles'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {

  return (
    <Router>
      <Routes>
          {/* Other Routes */}
          <Route path='/EmryToSpreadingMoreSmiles/' element={<Home />} />
          <Route path='/EmryToSpreadingMoreSmiles/mission' element={<Mission />} />
          <Route path='/EmryToSpreadingMoreSmiles/work' element={<Work />} />
          <Route path='/EmryToSpreadingMoreSmiles/gallery' element={<Gallery />} />
          <Route path='https://emrytospreadingmoresmiles.github.io/EmryToSpreadingMoreSmiles/footer' element={<Footer />} />
          <Route path='https://emrytospreadingmoresmiles.github.io/EmryToSpreadingMoreSmiles/contact' element={<ContactUs />} />

        </Routes>


    </Router>

   
        
       
      
    
  )
}

export default App
