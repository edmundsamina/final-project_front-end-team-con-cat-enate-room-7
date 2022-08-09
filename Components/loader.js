import React from 'react'
import Image from 'next/image'

const Loader = () => {
    return (
        <div className='loadcat'>
          {/* <div className="cat">
          <div className="cat__body"></div>
          <div className="cat__body"></div>
          <div className="cat__tail"></div>
          <div className="cat__head"></div>
          </div> */}
          <Image
						className="home-image"
						unoptimized={true}
						src={require("./../public/load.gif")}
						alt="Picture of cat and dog"
					/>
          <p>is loading...</p>
        </div>
    )
}

export default Loader