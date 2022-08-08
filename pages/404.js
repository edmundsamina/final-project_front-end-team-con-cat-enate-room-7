import React from 'react'
import Image from 'next/image'
import NavBar from '../Components/navBar'

const pageNotFound = () => {
    return (
			<main>
				<NavBar />
				<div className="not-fund">
					<Image
						className="home-image"
						src={require("./../public/test.GIF")}
						alt="Picture of cat and dog"
					/>
					<h1>404</h1>
				</div>
			</main>
		);
}

export default pageNotFound