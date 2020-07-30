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
            <h1 className="nav__logo" >Trailerz Hub <span className="nav__logoIcon">📽</span></h1>
        </div>
    )
}

export default Nav
