import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faMapPin,faCircleXmark,faCreditCard,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
const Explore = () => {
  return (
    <div className="container pt-5 mt-4 mb-5">
      <div className="row">
        <div className="explore-title col-xl-12 d-flex justify-content-center m-auto ">
          <h2>Here is a tribute to good life!</h2>
        </div>
        <div className="explore-title col-xl-8 d-flex justify-content-center  m-auto ">
          <div className="row explore-content">
            <p>
              Size-like body someone had. Are conduct viewing boy minutes
              warrant the expense? Tolerably behavior may admit daughters
              offending her ask own. Praise effects wish change way and any
              wanted. Lively use looked latter regard had. Do he it part more
              last in. We understand that theory is important to build a solid
              foundation, we understand that theory alone isn't going to get the
              job done so that's why this is packed with practical hands-on
              examples that you can follow step by step.
            </p>
          </div>
        </div>
        <ul class="list-inline hstack gap-4 flex-wrap justify-content-center mt-4">
          <li class="list-inline-item">
            <h5 class="fw-normal">
              <i class=" me-1">
                <FontAwesomeIcon
                  icon={faStar}
                  size="lg"
                  style={{ color: "#FFD43B" }}
                />
              </i>
              Have High Rating
            </h5>
          </li>
          <li class="list-inline-item">
            <h5 class="  fw-normal">
              <i class="me-1">
                <FontAwesomeIcon
                  icon={faMapPin}
                  size="lg"
                  style={{ color: "#B197FC" }}
                />
              </i>
              Best Locations
            </h5>
          </li>
          <li class="list-inline-item">
            <h5 class="  fw-normal">
              <i class=" me-1">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  size="lg"
                  style={{ color: "#cd182a" }}
                />
              </i>
              Free Cancellation
            </h5>
          </li>
          <li class="list-inline-item">
            <h5 class="  fw-normal">
              <i class=" me-1">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  size="lg"
                  style={{ color: "#63E6BE" }}
                />
              </i>
              Payment Options
            </h5>
          </li>
        </ul>
        <div class="d-sm-flex justify-content-center align-items-center mt-4">
          <div class="d-flex justify-content-center align-items-center text-start me-0 me-sm-4">
            <h3 class="me-2 mb-0">4.5</h3>
            <div>
              <ul class="list-inline mb-0">
                <li class="list-inline-item me-0 large">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="2xs"
                    style={{ color: "#FFD43B" }}
                  />
                  <i class="fas fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 large">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="2xs"
                    style={{ color: "#FFD43B" }}
                  />
                  <i class="fas fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 large">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="2xs"
                    style={{ color: "#FFD43B" }}
                  />
                  <i class="fas fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 large">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="2xs"
                    style={{ color: "#FFD43B" }}
                  />
                  <i class="fas fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 large">
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    size="2xs"
                    style={{ color: "#FFD43B" }}
                  />
                  <i class="fas fa-star-half-alt text-warning"></i>
                </li>
              </ul>
              <p class="mb-0 small">Clients Love Us!</p>
            </div>
          </div>

          <div>
            <a href="#" class="btn btn-lg btn-dark mb-0 rounded-4">
              Explore now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore

