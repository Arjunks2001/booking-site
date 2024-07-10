import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
        
        <div class="container-fluid" >
             
                {/* <img src='https://booking.webestica.com/assets/images/category/hotel/resort/bg-01.jpg'></img> */}
         <nav className="navbar navbar-expand-lg custom-navbar">
        
                <a className="navbar-brand brand mt-lg-3 " href="#home">
                    <img
                        src="https://booking.webestica.com/assets/images/logo-light.svg"
                        width=" "
                        height="30"
                        className="d-inline-block align-top ms-lg-5 "
                        alt="Booking"
                      
                    />
                     
                </a>
                <button
                    className="navbar-toggler mt-4"
                    type="button"
                    onClick={toggleNavbar}
                >
                    {isNavOpen ? (
                        <span className="close-icon">&times;</span>
                    ) : (
                        <span className="navbar-toggler-icon"></span>
                    )}
                </button>
                <div className={`  align-items-center  offcanvas offcanvas-top nav-open ${isNavOpen ? 'show' : ''}`} tabIndex="-1" id="navbarOffcanvas">
                    <div className="offcanvas-header ">
                        <h5 className="offcanvas-title  " id="navbarOffcanvasLabel"></h5>
                        <button type="button" className="btn-close" onClick={toggleNavbar} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body mt-3 ">
                        <ul className="navbar-nav me-auto  ">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle pe-4"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Listings
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#action/3.1">Hotel</a></li>
                                    <li><a className="dropdown-item" href="#action/3.2">Flight</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Tour</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Cab</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Directory</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Add Listing</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Hero</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Booking Confirmed</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Compare Listing</a></li>
                                    <li><a className="dropdown-item" href="#action/3.3">Offer Detail</a></li>

                                </ul>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link" href="#our-story">Our Story</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link" href="#rooms-suites">Rooms & Suites</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link" href="#offers">Offers</a></li>
                            <li className="nav-item pe-4">
                                <a className="nav-link" href="#gallery">Gallery</a></li>
                        </ul>
                    </div>
                </div>
                <button className="btn book-button mt-3 sm-mt-0  me-lg-5" data-bs-toggle="offcanvas" data-bs-target="#bookingOffcanvas" aria-controls="bookingOffcanvas">
                <FontAwesomeIcon icon={faCalendarWeek} className="me-2"style={{color: "#fcfcfc",}} /> Book a Stay
                </button>
                
           
                
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="bookingOffcanvas" aria-labelledby="bookingOffcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="bookingOffcanvasLabel">Book a Room</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        <div className="mb-3 ">
                            <label htmlFor="roomType" className="form-label justify-content-start">Room & Suite Type</label>
                            <select className="form-select" id="roomType">
                                <option>Select location</option>
                                <option value="1">One Bedroom Ocean Suit</option>
                                <option value="2">The Penthouse Suite</option>
                                <option value="3">The Entertainment Suite</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="checkIn" className="form-label">Check in</label>
                            <input type="date" className="form-control" id="checkIn" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="checkOut" className="form-label">Check out</label>
                            <input type="date" className="form-control" id="checkOut" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="guests" className="form-label">Guests & rooms</label>
                            <input type="text" className="form-control" id="guests" defaultValue="2 Guests 1 Room" />
                        </div>
                    </form>
                    <button className="btn Book_stay mt-3">Check Availability</button>
                    <div className=" card card-book border-white mt-3">
                        <p className='fw-bold'>Why Book Direct?</p>
                        <ul>
                            <li>10% discount is applied</li>
                            <li>15% off on spa treatment</li>
                            <li>Best price guaranteed</li>
                            <li>Daily complimentary sunrise yoga</li>
                            <li>Early check-in and late check-out</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            </div>
        
                 
                
               
             
          
          
       
        </>
       
            
        
    );
};

export default Navbar;