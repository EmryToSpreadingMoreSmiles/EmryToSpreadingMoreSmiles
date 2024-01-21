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

import { HashRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';




function App() {

  return (
    <BrowserRouter basename='/EmryToSpreadingMoreSmiles'>
      <Routes>
          {/* Other Routes */}
          <Route path='/EmryToSpreadingMoreSmiles/' element={<Home />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/work' element={<Work />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/contact' element={<ContactUs />} />

        </Routes>


        </BrowserRouter>

   
        
       
      
    
  )
}

export default App
