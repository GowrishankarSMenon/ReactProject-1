import React from 'react'

export default function Stats1() {
  return (
    <>
    <div className="container intro rounded p-4 shadow my5">
        <div className="d-flex">
          <div className="container w-50 p-2">
            <h2 className='fs-1'>Why choose us?</h2>
            <p className='fs-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque
              dolor ex maiores quos fugiat temporibus placeat nesciunt, quod
              laudantium quas maxime officia minima voluptatum?
            </p>
            <div className="mt-3 d-flex py-3">
              <button className="btn custom-bg-color text-white me-2 rounded-pill bt1">Check out our achivements</button>
              <button className="btn custom-bg-color text-white rounded-pill bt2">Gallery</button>
            </div>
          </div>
          <div className="imeg d-flex justify-content-center">
            {/* Hide the image on screens smaller than 768 pixels */}
            <img
              src={process.env.PUBLIC_URL + '/man-workingout.jpg'}
              alt="starting"
              className="img-fluid rounded d-none d-md-block"  // Added the d-md-block class
            />
          </div>
        </div>
      </div>
    </>
  )
}
