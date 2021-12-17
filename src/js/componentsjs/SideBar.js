import React,{useState} from 'react'
import { FiX} from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
const SideBar = () => {
    const [showSideBar, setShowSideBar] =useState(false);
    const handleClick = () =>{
        setShowSideBar(!showSideBar);
        console.log(showSideBar);
    }
    return<>
        <section className="section-sideBar-header">
            <div className="sidebar-header">
                    <h2 className="sidebar-header__logo" >
                        < FiAlignJustify onClick={handleClick} />
                    </h2>
                    <div className="sidebar-header__auth">
                        <div className="sidebar-header__auth-signup"><a href="#" className="sidebar-header__auth-link">sign-up</a></div>
                        <div className="sidebar-header__auth-login"><a href="#" className="sidebar-header__auth-link">log-in</a></div>
                    </div>
            </div>
        </section>

        <section className={ `${showSideBar? 'section-sideBar-nav showSidebar':'section-sideBar-nav'}`}>
            <nav className={`${showSideBar? 'sidebar-nav showNavbar':'sidebar-nav'}`} onClick={handleClick}>
                     <div className="sidebar-nav__close">
                        <FiX />
                    </div>
                    <ul className="sidebar-nav__list">
                        <li className="sidebar-nav__item"><a className="sidebar-nav__link" href="#">home</a>
                        </li>
                        <li className="sidebar-nav__item"><a className="sidebar-nav__link" href="#">workers</a>
                        </li>
                        <li className="sidebar-nav__item"><a className="sidebar-nav__link" href="#">about</a>
                        </li>
                        <li className="sidebar-nav__item"><a className="sidebar-nav__link" href="#">contact</a>
                        </li>
                    </ul>
            </nav>
        </section>
           
    </>
}

export default SideBar
