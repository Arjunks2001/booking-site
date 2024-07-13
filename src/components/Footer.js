import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook ,faInstagram,faSquareTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className='container-fluid footer '>
        <div className='row mx-auto'>
        <div className='col-lg-4 text-center m-auto mt-5'>
            <img className="footer-img"src='https://booking.webestica.com/assets/images/logo-light.svg'></img>
            <div className='row footer-content text-center mt-4'>
       <p> Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
        </div>

        </div>
        <ul className="list-inline col-sm-12 gap-4 flex-wrap justify-content-center text-primary-hover footer-content  mt-4">
					<li className="list-inline-item">
						<h5 className="fw-normal"><i className=" me-2"></i>About</h5>
					</li>
					<li className="list-inline-item"> 
						<h5 className="  fw-normal"><i className="me-2"></i>Terms</h5>
					</li>
					<li className="list-inline-item">
						<h5 className="  fw-normal"><i className=" me-2"></i>Privacy</h5>
					</li>	
					<li className="list-inline-item"> 
						<h5 className="  fw-normal"><i className=" me-2"></i>Career</h5>
					</li>
                    <li className="list-inline-item"> 
						<h5 className="  fw-normal"><i className=" me-2"></i>Contact Us</h5>
					</li>
                    <li className="list-inline-item"> 
						<h5 className="  fw-normal"><i className=" me-2"></i>Cookies</h5>
					</li>
				</ul>
                <div className=' text-center m-auto '>
            
            <div className='col-sm-12 d-flex justify-content-center text-center mt-4'>
           <p className='me-3'> <FontAwesomeIcon icon={faSquareFacebook} size="2xl" style={{color: "#74C0FC",}} /></p>
       <p className='me-3'>  <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#74C0FC",}} /></p>
       <p className='me-3'> <FontAwesomeIcon icon={faSquareTwitter} size="2xl" style={{color: "#74C0FC",}} /></p>
       <p className='me-3'><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#74C0FC",}} /></p>
        </div>

        </div>

                <div className='col-lg-4 text-center m-auto '>
            <div className='row footer-content text-center '>
       <p>  Copyrights ©2024 Booking. Build by </p>
       <p>Webestica</p>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Footer