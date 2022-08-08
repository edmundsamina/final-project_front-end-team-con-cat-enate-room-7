import React from 'react';
import Image from "next/image.js";

const UsefulLinkCard = ({src, alt, text, title, href}) => {
    return (
				<a target="_blank" href={href}>
					<div className="link-card">
						<h2>{title}</h2>
						<Image
							className="link-image"
							width="280vw"
							height="200vh"
							
							src={src}
							alt={alt}
						/>
						<p>{text}</p>
					</div>
				</a>
		);
}

export default UsefulLinkCard
