
import '../Styles/Middle.css'    // correct path to CSS
import Now from '../assets/middlebg.png'
import Button from './Button'

function Middle() {
  return (
    <div className='middle'>
        <div className="middle-first">
            <h1>
                Discover a universe of <span className='middle-span'>possibilities</span> 
            </h1>
        </div>

        <div className="slider">
            <ul>
                <li>Senton VPN</li>
                <li>Senton Wallet</li>
                <li>Senton Cards</li>
                <li>Senton Webhost</li>
                <li>Senton Notes</li>
            </ul>
        </div>


        <div className="slideshow">
            <h2>Create cinematic moments with state‑of‑the‑art video generation</h2>
            <img src={Now} alt="" />
        </div>










    </div>


    
  )
}

export default Middle


