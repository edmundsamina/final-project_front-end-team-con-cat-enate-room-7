import React from 'react'
import Image from 'next/image'
import LinkButton from './linkButton'

import { useState, useCallback, useEffect } from 'react';
import ColourblindToggle from './ColourblindToggle';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


const SignInOut = () => {
    const isBreakpoint = useMediaQuery(450)

    return (
        <div className='sign-in'>
         <div>
            <p>Welcome to</p>
            <h2>The Care-Full App</h2>
            <div>
                { isBreakpoint ? (
                    <Image
                     src={require("/public/big_line.png")}
                     alt="Picture of cat and dog"
                     layout='responsive'
                     priority
                     />
                ) : (
                    <Image
                     src={require("/public/line_black.png")}
                     alt="Picture of cat and dog"
                     layout='responsive'
                     priority
                     />
                    )
                }
              </div>
            <h3>Helping owners care for their pets</h3>
            <p>since 2022</p>
        </div>
          {/* <Image
              className="home-image"
              src={require("./../public/conCAT.png")}
              alt="Picture of cat and dog"
              />
         </div>
        <h2>Welcome to The Care-Full App</h2> */}
        <br/>
        <LinkButton text="Log In" link="/api/auth/login"/>
        </div>
    )
}

export default SignInOut