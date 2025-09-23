import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Banner from './Components/Banner.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Plans from './Components/Plans.jsx'
import Middle from './Components/Middle.jsx'
import Last from './Components/Last.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import './Styles/App.css'
import Productivity from './Pages/Productivity.jsx';


function App() {
  return (
      <BrowserRouter>
      <Navbar /> {/* Navbar hamesha dikhega */}
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />       {/* Home page */}
        <Route path="/Productivity" element={<Productivity />} /> {/* Plans page */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
