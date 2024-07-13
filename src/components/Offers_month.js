import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight} from '@fortawesome/free-solid-svg-icons'
import { offerMonth } from './Totaldatas'

const Offers_month = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="offer_title">
        <h1 className="offer_title fs-lg-3 d-md-block">Offers Of The Month</h1>
      </div>
      <div className="row mt-4">
        {offerMonth.map((card, index) => (
          <div className="col-6 col-md-4 col-xl-2" key={index}>
            <div class="card border-white ">
              <img src={card.image} class="card-img-top rounded-4" />

              <div class="card-body">
                <h5 class="card-title font fs-0">{card.title}</h5>
              </div>
            </div>
            <div></div>
          </div>
        ))}
        <div className="col-6 col-md-4 col-xl-2 position-relative">
          <div class="card border-white ">
            <div className=" d-flex flex-column justify-content-center text-info-emphasis mt-lg-4 mt-2">
              <button type="button" class="btn-arrow btn absolute">
                <FontAwesomeIcon
                  icon={faCircleRight}
                  style={{ color: "rgb(81 67 217)" }}
                />
              </button>
            </div>

            <div class="card-body mt-4  ">
              <p class="card-title font fs-0 ">View All Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers_month