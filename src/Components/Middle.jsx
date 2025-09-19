import React, {useState} from 'react'
import '../Styles/Middle.css'    // correct path to CSS
import Now from '../assets/middlebg.png'
import Now1 from '../assets/plansbg.png'
import Button from './Button'

function Middle() {
    const [currentImage, setCurrentImage] = useState(Now);
  return (
    <div className='middle'>
        <div className="middle-first">
          <h1>
                Discover a universe of <span className='middle-span'>possibilities</span> 
            </h1>
        </div>

        <div className="slider">
            <ul>
                <li onClick={() => setCurrentImage(Now)}>Senton VPN</li>
                <li onClick={() => setCurrentImage(Now1)}>Senton Wallet</li>
                <li>Senton Cards</li>
                <li>Senton Webhost</li>
                <li>Senton Notes</li>
            </ul>
        </div>


        <div className="slideshow">
            <h2>Create cinematic moments with state‑of‑the‑art video generation</h2>
            <img src={currentImage} alt="" />
        </div>

    </div>

  )
}

export default Middle


