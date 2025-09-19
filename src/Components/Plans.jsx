
import '../Styles/Plans.css'    // correct path to CSS
import plansbg from '../assets/plansbg.png'
import Button from './Button'

function Plans() {

  return (
      <div className="plans-container">
        <img className='plansbg' src={plansbg} alt="" /> 

        <div className="plans">
            <div className="plans-left">
                <h2>Senton Pro</h2>
                <p>Sentpn VPN meets ample storage for limitless productivity. Includes the Premium features.</p>
                <p>2 TB Senton <br /> Bandwidth & More</p>
                <p>₹1,150/mo ₹0 for the first month</p>
                <p>View Feature</p>
                <Button text={'Get Offer'}/>
            </div>

            <div className="plans-right">
                <h2>Senton Ultra</h2>
                <p>Sentpn VPN meets ample storage for limitless productivity. Includes the Premium features.</p>
                <p>2 TB Senton <br /> Bandwidth & More</p>
                <p>₹1,950/mo ₹0 for the first month</p>
                <p>View Feature</p>
                <Button text={'Get Offer'}/>
            </div>
        </div>
        <div className="plans-last">
            <Button text={'Compare Plans'} />
             <h3>Want to experience Senton AI Ultra with your work or school account? <a href="#">Learn More</a></h3>
        </div>
        
         


      </div>
    
  )
}

export default Plans


