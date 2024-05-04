import React from 'react';

export default function Earlyjoin() {
  return (
    <>
      <div className="container my-3 intro rounded p-4 shadow">
        <div className="d-flex">
          <div className="container w-50 p-2">
            <h2 className='fs-1 font-weight-bold'>GetBtr make your life chill</h2>
            <p className='fs-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
              dolor ex maiores quos fugiat temporibus placeat nesciunt, quod
              laudantium quas maxime officia minima voluptatum?
            </p>
            <div className="mt-3 d-flex py-3 my-3">
              <button className="btn custom-bg-color text-white me-2 rounded-pill bt1">Join Us</button>
              <button className="btn custom-bg-color text-white rounded-pill bt2">Pricing</button>
            </div>
          </div>
          <div className="imeg d-flex justify-content-center">
            {/* Hide the image on screens smaller than 768 pixels */}
            <img
              src={process.env.PUBLIC_URL + '/workout.png'}
              alt="starting"
              className="img-fluid rounded d-none d-md-block"  // Added the d-md-block class
            />
          </div>
        </div>
      </div>
    </>
  );
}
