import React from 'react'
import Image from 'next/image'

const pageNotFound = () => {
    return (
        <div className='not-fund'>
          <Image
              className="home-image"
              src={require("./../public/conCAT.png")}
              alt="Picture of cat and dog"

              />
            <h1>404</h1>
        </div>
    )
}

export default pageNotFound