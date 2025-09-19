import React, {useState} from 'react'
import '../Styles/Middle.css'    // correct path to CSS
import Now from '../assets/middlebg.png'
import Button from './Button'

function Middle() {
    const newimg = "https://i.pinimg.com/1200x/28/c6/d6/28c6d61fbb18b6d2d89c1e60ddceb5d4.jpg"
    const newimg2 = "https://i.pinimg.com/736x/c8/75/e9/c875e9243ddf9e8a597803efd0de3233.jpg"
    const newimg3 = "https://i.pinimg.com/1200x/c4/4d/b7/c44db751dda9877e2ca7a7d72c292a04.jpg"
    const newimg4 = "https://i.pinimg.com/736x/6c/5e/98/6c5e98da1ff63f028b3f41f450c96777.jpg"
    const [currentImage, setCurrentImage] = useState(Now);
    const [activeTab, setActiveTab] = useState("Again");

  return (
    <div className='middle'>
        <div className="middle-first">
          <h1>
                Discover a universe of <span className='middle-span'>possibilities</span> 
          </h1>
        </div>

        <div className="slider">
            <ul>
                
                <li
                className={activeTab === 'Again' ? activeTab :"notactive"}
                
                    onClick={() => {setActiveTab(Again), setCurrentImage(Now)}}>Senton VPN</li>
                <li onClick={() => setCurrentImage(newimg)}>Senton Wallet</li>
                <li onClick={() => setCurrentImage(newimg2)}>Senton Cards</li>
                <li onClick={() => setCurrentImage(newimg3)}>Senton Webhost</li>
                <li onClick={() => setCurrentImage(newimg4)}>Senton Notes</li>
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


