import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { experienceData } from './Totaldatas';

const responsive = {
  0: { items: 1 },
  576: { items: 2 },
  768: { items: 3 },
  992: { items: 4 },
};

const ExperienceCards = () => {
  const items = experienceData.map((card, index) => (
    <div className="item container" key={index}>
      <div className="card col-md-12 h-100 rounded-5">
        <img src={card.imgSrc} className="card-img-top" alt={card.title} />
        <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <div className="text-white d-flex justify-content-start">
            <a href={card.link} className="text-white">Explore now →</a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className=''>
      <div className='col-12 text-center mb-5'>
        <h2>Our Exciting Experience</h2>
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={3000}
        disableDotsControls={true}
        infinite
        renderPrevButton={() => (
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
        )}
        renderNextButton={() => (
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        )}
      />
    </div>
  );
}

export default ExperienceCards;

