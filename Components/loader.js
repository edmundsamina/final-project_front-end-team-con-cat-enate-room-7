import React from 'react'
import Image from 'next/image'

const Loader = () => {
    return (
        <div className='loadcat'>
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