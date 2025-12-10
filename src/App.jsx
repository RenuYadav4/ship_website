import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Commercial from './pages/Commercial'
import Technical from './pages/Technical'
import Crew from './pages/Crew'
import Consultancy from './pages/Consultancy'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/commercial-management' element={<Commercial />} />
          <Route path='/technical-management' element={<Technical />} />
          <Route path='/crew-management' element={<Crew />} />
          <Route path='/consultancy-services' element={<Consultancy />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
