
import '../Styles/Hero.css'    // correct path to CSS
import Desktop from '../assets/mainbg.png'
import Button from './Button'

function Hero() {

  return (
      <div className="first"> 
           <img id='bgimg' className='chotu' src={Desktop} alt="" srcset="" />


           <div className="hero-container">
              <div className="title-hero">
                          <img src="https://storage.googleapis.com/gweb-one-cdn/one/uploads/a84a7a51fdea9f2da8a989fd5a69570cbb4afa78.svg" alt="" srcset="" />

                          <h1 className="hero-title">Security, Privacy, and Freedom in <span>One Check</span></h1>
                          {/* <p>Access global content, protect your data, and take advantage of quick, secure connections wherever.</p> */}
                          <Button text={'Get Started'} />
                  </div>

                       
                        <div className="bottom">
                          <div className="left-small">
                            <img src="https://storage.googleapis.com/gweb-one-cdn/one/uploads/62fbf74d3471dacc6afbe4660a5de719b2ed0edb.svg" alt="" srcset="" />
                          </div>

                          <div className="right-text">
                            <h2>Google AI Pro is free of charge for students until the end of the academic year 2026</h2>
                            <p>Students also get access to NotebookLM, Whisk and 2 TB of storage at no charge. See if you're eligible for the student discount.</p  >
                          </div>
                        </div>

                      
           </div>

               
            


      </div>
    
  )
}

export default Hero


