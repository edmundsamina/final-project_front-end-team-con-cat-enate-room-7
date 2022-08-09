import React from 'react'
import Image from 'next/image'
import PetNavBar from '../Components/petNavBar';

const pageNotFound = () => {
    return (
			<main>
				<PetNavBar pet={false} />
				<div className="not-fund">
					<Image
						className="home-image"
						unoptimized={true}
						src={require("./../public/test.GIF")}
						alt="Picture of cat and dog"
					/>
					<h1>404</h1>
				</div>
			</main>
		);
}

export default pageNotFound