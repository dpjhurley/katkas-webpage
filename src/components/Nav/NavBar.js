import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from "classnames";
import { CSSTransition } from 'react-transition-group';
import Media from 'react-media';



const Navbar = (props) => {
    const [ hidden, setHidden ] = useState(true)

    const handleMenuClick = () => {
        setHidden(!hidden)
    }

    return (  
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <h1 className="title">The Running Plum</h1><i className="fab fa-think-peaks fa-4x"></i>
                </Link>
            </div>
            <div className="navbar__dropdown">
                <button 
                    className={cx("hamburger hamburger--collapse", {
                        "is-active": !hidden
                    })}
                    type="button" 
                    onClick={handleMenuClick}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
             
                <Media queries={{
                    small: "(max-width: 774px)",
                    large: "(min-width: 775px)"
                }}>
                    {matches => (
                        <>
                            {matches.small && 
                                <CSSTransition
                                    in={!hidden}
                                    timeout={400}
                                    classNames="nav-transition"
                                    unmountOnExit
                                    appear
                                >
                                    <ul className="nav">
                                        {props.children}
                                    </ul>
                                </CSSTransition>
                            }
                            {matches.large && 
                                <ul className="nav nav--fullscreen">
                                    {props.children}
                                </ul>
                            }
                        </>
                    )}                
                </Media>
                
            </div>          
        </nav>
    );
}
 
export default Navbar;