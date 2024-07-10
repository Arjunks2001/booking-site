import React from 'react'
import { experienceData } from './Totaldatas'

const Experience_cards = () => {
  return (
    <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className='col-12 text-center mb-5 '>
            <h2>Our Exciting Experience</h2>
          </div>
    <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="container">
          <div className="row">
            {experienceData.slice(0, 4).map((card, index) => (
              <div className="col-lg-3 col-sm-12 col-md-12 mb-3 position-relative " key={index}>
                <div className="card border-white ">
                  <img src={card.imgSrc} className="card-img-top rounded-4" alt={card.title} />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <div  className="text-white  d-flex  justify-content-start">{card.link}Explore now →</div>
                  </div>
                </div>
              </div>
            ))}
            <button className="carousel-control-prev absolute" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev" >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next absolute" type="button" data-bs-target="#cardCarousel" data-bs-slide="next"  >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="carousel-item">
        <div className="container">
          <div className="row">
            {experienceData.slice(0, 4).map((card, index) => (
              <div className="col-lg-3 col-sm-12 col-md-12 mb-3 position-relative" key={index}>
                <div className="card border-white">
                  <img src={card.imgSrc} className="card-img-top rounded-4" alt={card.title} />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <div  className="text-white  d-flex  justify-content-start">{card.link}Explore now →</div>
                  </div>
                </div>
              </div>
            ))}
            <button className="carousel-control-prev absolute m-auto" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev"  >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next absolute" type="button" data-bs-target="#cardCarousel" data-bs-slide="next"  >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  )
}

export default Experience_cards