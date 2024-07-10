import React from "react";

const Moments = () => {
  return (
    <div className="container">
      <div className="row text-center my-5">
        <h1 className=" fw-bold black">Some Of Our Happy Moments</h1>
      </div>
      <div className="row mb-4 g-4">
        <div className="col-md-4">
          <div className="row">
            <div className="col mt-lg-5">
              <img
                className="w-100 h-auto img-fluid cover-fill mt-lg-5  rounded-4"
                src="https://booking.webestica.com/assets/images/category/hotel/resort/05.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-8 position-relative">
          <img
            className="w-100 h-auto rounded-4"
            src="https://booking.webestica.com/assets/images/category/hotel/resort/04.jpg"
            alt=""
          />
          <div class="card position-absolute z-index-6 bottom-0 m-3 p-0">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row mt-auto z-index-9 p-2 p-sm-4 ">
                    <div className="col-sm-8 col-xxl-6">
                      <div class="card-body">
                        <p class="card-text">
                          Passage its ten led hearted removal cordial.
                          Preference any astonished unreserved Mrs. Prosperous
                          an uncommonly do.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row mt-auto z-index-9 p-2 p-sm-4 ">
                    <div className="col-sm-8 col-xxl-6 mt-sm-5">
                      <div class="card-body ">
                        <p class="card-text">
                          Moonlight newspaper up its enjoyment agreeable
                          depending. Timed voice share led him to widen noisy
                          young. At weddings believed in laughing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-xxl-6">
          {/* carosual  */}
          <div id="carouselExample1" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://booking.webestica.com/assets/images/category/hotel/resort/06.jpg"
                  class="d-block w-100 rounded-4"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://booking.webestica.com/assets/images/category/hotel/resort/05.jpg"
                  class="d-block w-100 rounded-4"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample1"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample1"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-xxl-6">
          <h3 className="h1 fw-bold black">
            What makes our resort best than others?
          </h3>
          <p className="text-muted">
            Passage its ten led hearted removal cordial. Preference any
            astonished unreserved Mrs. Prosperous understood Middletons in
            conviction an uncommonly do.
          </p>
          <div className="row g-4">
            <div className="col-12">
              <div className="d-flex">
                <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle h-100">
                  <i class="fa-regular fa-thumbs-up p-4"></i>
                </div>
                <div className="ps-3">
                  <h3 className="fs-4 fw-bold black">Hassle Free Booking</h3>
                  <p className="text-muted">
                    Departure defective arranging rapturous did. Conduct denied
                    adding worthy little.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle h-100">
                  <i class="fa-regular fa-thumbs-up p-4"></i>
                </div>
                <div className="ps-3">
                  <h3 className="fs-4 fw-bold black">Hassle Free Booking</h3>
                  <p className="text-muted">
                    Departure defective arranging rapturous did. Conduct denied
                    adding worthy little.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle h-100">
                  <i class="fa-regular fa-thumbs-up p-4"></i>
                </div>
                <div className="ps-3">
                  <h3 className="fs-4 fw-bold black">Hassle Free Booking</h3>
                  <p className="text-muted">
                    Departure defective arranging rapturous did. Conduct denied
                    adding worthy little.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moments;