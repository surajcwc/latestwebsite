
import '../Styles/Navbar.css'
import Button from './Button'

function Navbar() {
  return (
    <div className="nav">
            <div className="Left">
                 <img className="logo" src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png' alt="" srcset="" /> 
            </div>
           <div className="links">
                <ul>
                   <li><a href="https://google.com"> Home</a></li>
                   <li> <a href="https://google.com"> Contact</a></li>
                   <li><a href="https://google.com"> About us</a></li>
               </ul>
           </div>
           <div className="right">
                <Button text={'Sign up'} />
           </div>

           {Button}
    </div>
  )
}

export default Navbar