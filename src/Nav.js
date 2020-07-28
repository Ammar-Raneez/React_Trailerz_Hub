import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    //use effect for navbar, darken background only upon scroll, if on top transparent
    useEffect(() => {
        window.addEventListener('scroll', () => {
            //if we scroll passed 150px trigger the function
            if(window.scrollY > 150) {
                handleShow(true);
            } else handleShow(false);
        });
        //before we fire off useEffect, remove the listeners, so there's no crazy amount of listeners
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        //add nav__black if we scroll passed 100px
        <div className={`nav ${show && 'nav__black'}`}>
            <img className="nav__logo" alt="Netflix Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
            />
            <img className="nav__avatar" alt="Netflix Avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            />
        </div>
    )
}

export default Nav
