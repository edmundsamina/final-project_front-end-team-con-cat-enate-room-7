import React from 'react';
import Image from "next/image.js";

const UsefulLinkCard = ({src, alt, text, title, link}) => {
    return (
        <a href={link}>
        <div className='link-card'>
            <h2>{title}</h2>
            {/* <Image src={src} alt={alt}/> */}
            <p>{text}</p>
        </div>
        </a>
    )
}

export default UsefulLinkCard
