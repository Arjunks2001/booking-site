import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div
      className="header background-img vh-100 "
      style={{
        backgroundImage:
          "url(https://booking.webestica.com/assets/images/category/hotel/resort/bg-01.jpg)",
      }}
    >
      <Navbar />
      <div className="container ">
        <div className="row mt-5">
          <div
            className="col-xl-8 col-12  d-flex align-items-center m-auto mt-5"
          >
            <h1 className="home-title mt-5 display-1">
            
              A World Of Luxury Awaits You
            </h1>
          </div>
        </div>
        <div className="row ">
          <h3 class="home-subtitle text-white mt-3 ">
            Discover a New Look of Luxury Resorts.
          </h3>
        </div>

        <button type="button" class="btn btn-dark m-3 p-3 py-2 mb-5 rounded-4 ">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Home