import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight} from '@fortawesome/free-solid-svg-icons'

const Subscribe = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className="bg-light position-relative rounded-3 p-4 p-md-0">
            <div className="position-absolute bottom-0 end-0 me-n5 d-none d-md-block">
              <img src="https://booking.webestica.com/assets/images/element/island.svg"></img>
            </div>
            <div className="row position-relative">
              <div className="col-md-7 text-center mx-auto py-md-5">
                <h2>Subscribe & Get Special Discount!</h2>
                <p>
                  Speedily say has suitable disposal add boy. On forth doubt
                  miles of child. Exercise joy man children rejoiced.
                </p>
                <form class="bg-body d-flex rounded-2 p-2">
                  <input
                    class="form-control border-0 me-1"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <a
                    type='button'
                    class="flex-shrink-0 mb-0"
                  >
                  <FontAwesomeIcon icon={faCircleRight} size="2xl" style={{color: "#000000",}} />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe


//   <div className="container my-5">
//       <div className="row">
//         {Favorite_Rooms.map(room => (
//           <div key={room.id} className="col-md-4 mb-4">
//             <div className="card bg-dark text-white h-100">
//               <img src={room.carousel_image} className="card-img" alt={room.title} />
//               <div className="card-img-overlay d-flex flex-column justify-content-end">
//                 <div className="bg-light p-3 rounded text-dark">
//                   <h5 className="card-title">{room.title}</h5>
//                   <p className="card-text">{room.SQ_Ft} ・ {room.SQ_M}</p>
//                   <p className="card-text">{room.content}</p>
//                   <ul className="list-unstyled">
//                     <li>{room.facility_one}</li>
//                     <li>{room.facility_two}</li>
//                     <li>{room.facility_three}</li>
//                   </ul>
//                   <button className="btn btn-primary">Reserve</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
        
//       </div>
//     </div>