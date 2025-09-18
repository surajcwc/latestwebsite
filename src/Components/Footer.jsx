
import '../Styles/Footer.css'    // correct path to CSS
import logo from '../assets/logobottom.png'
import Navbar from '../Components/Navbar'
import Button from './Button'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <h2>Manage your plan and more with the Senton One app</h2>
                <div className="buttons">
                    <img src="https://lh3.googleusercontent.com/zWYJUppfU-TunHSxKMA6i1LRpv2POWaGCOOcvwR2h1E_R8LZ3RCiMUgbyxJDGFQqePR3G5BA3MdpUw4_BtQ_mefV36WH3tnBrV3ZkuSj=e365-pa-nu-w200" alt="" />
                    <img src="https://lh3.googleusercontent.com/lxsXDCeIX7iYaMIzxmJ8ttfE3TRNeCCNbB9TUWT0W0D9R4JlhemtyWUg0zDR69NCVWDvVMVd9uZ-hDHExoqfTxZnIlQrx1p7mGSr-g=e365-pa-nu-w200" alt="" />
                </div>
        </div>
        <div className="footer-middle">
            <ol>
                <li>Senton VPN keeps your connection secure and private across 150+ countries worldwide.</li>
                <li>Some premium features may vary depending on local laws and regulations.</li>
                <li>Senton VPN services are designed for users aged 18 and above.</li>
                <li>Read our Privacy Policy and Terms of Service to learn more about how we protect your data.</li>
                <li>Stay safe online with fast, reliable, and encrypted VPN connections.</li>
                <li>For support and inquiries, please visit our Help Center or contact our team anytime.</li>
            </ol>
        </div>
        <div className="footer-bottom">
            
            <div className="footer-bottom-Left">
                 <img className="logo" src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png' alt="" srcset="" /> 
            </div>
           <div className="footer-bottom-links">
                <ul>
                   <li><a href="https://google.com"> Home</a></li>
                   <li> <a href="https://google.com"> Contact</a></li>
                   <li><a href="https://google.com"> About us</a></li>
               </ul>
           </div>
           <div className="footer-bottom-right">
                <Button text={'Sign up'} />
           </div>

       
    

        </div>







    </div>


        
  )
}

export default Footer


