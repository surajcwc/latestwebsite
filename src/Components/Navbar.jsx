
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
import Button from './Button'
import Plans from './Plans.jsx'

function Navbar() {
  return (
    <div className="nav">
            <div className="Left">
                 <img className="logo" src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png' alt="" srcset="" /> 
            </div>
           <div className="links">
                <ul>
                   <li> <Link to="/">Home</Link> </li>
                   <li> <Link to="/Productivity">Productivity</Link> </li>
                 
                 
               </ul>
           </div>
           <div className="right">
                <Button text={'Sign up'} />
           </div>

       
    </div>
  )
}

export default Navbar