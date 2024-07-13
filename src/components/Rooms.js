import React from 'react';

import { Carousel } from 'react-bootstrap';
import { Favorite_Rooms } from './Totaldatas';



const RoomCard = ({ room }) => {
    return (
        <div className="card mb-3 position-absolute" style={{ maxWidth: '540px', bottom: '20px', right: '20px' }}>
            <div className="card-body">
                <h5 className="card-title">{room.title}</h5>
                <p className="card-text">{room.SQ_Ft} • {room.SQ_M}</p>
                <p className="card-text">{room.content}</p>
                <ul className="list-unstyled">
                    <li>✔ {room.facility_one}</li>
                    <li>✔ {room.facility_two}</li>
                    <li>✔ {room.facility_three}</li>
                </ul>
                <a href="#" className="btn bg-secondary-subtle">Reserve.</a>
            </div>
        </div>
    );
};

const Rooms = () => {
    return (
        <div className="container-fluid px-lg-5 mt-5">
            <div className="row mb-4">
			<div className="col-xxl-8 mx-auto mb-3">
				<div className="d-sm-flex justify-content-between align-items-center">
					<h2 className="mb-0">Our Favorite Rooms</h2>
					<a href="#" className="btn btn-dark mb-0 d-grid" >See all rooms</a>
				</div>
			</div>
		</div>
            <Carousel controls={true} indicators={false} className="custom-carousel">
                {Favorite_Rooms.map(room => (
                    <Carousel.Item key={room.id}>
                        <div className="d-block w-100 position-relative rounded-4" style={{ height: '600px', backgroundImage: `url(${room.carousel_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <RoomCard room={room} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Rooms;