
import '../Styles/Last.css'    // correct path to CSS
import Lst from '../assets/CTA.png'
import Button from './Button'

function Last() {
  return (
    <div className='last'>
        <h2>Browse Securely Anytime, Anywhere </h2>
        <p>Protect your privacy, unblock content, and enjoy fast, reliable browsing — all with one powerful VPN. </p>
        <Button text={'Get VPN Now'} />
        <img src={Lst} alt="" />



    </div>


        
  )
}

export default Last


