import React from 'react'
import '../App.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav() {

    return (
        <div className="Column">
            <div className="NavBar">
                <div className="LogoBox">
                    <img alt="logo" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/only_stones_logo.png?v=1610147253" ></img>
                    <h1>Stones of Light<br></br> Education Foundation</h1>
                </div>
                <div className="Menu">
                    <Link
                        to="Mission"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="NavButton">
                            <h2>What We Do</h2>
                        </div>
                    </Link>
                    <Link
                        to="Solution"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                    >
                    <div className="NavButton">
                        <h2>How You Can Help</h2>
                    </div>
                    </Link>
                    <Link
                        to="Impact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    <div className="NavButton">
                        <h2>Our Progress</h2>
                    </div>
                    </Link>
                    <Link
                        to="GoodAlways"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    <div className="NavButton">
                        <h2>Good Always</h2>
                    </div>
                    </Link>
                    <Link
                        to="Contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    <div className="NavButton">
                        <h2>Contact Us</h2>
                    </div>
                    </Link>
               
                    <a href="https://checkout.square.site/merchant/WFJDHKBHCFDKF/checkout/3NBHFIZQ4XMHWIJV65M25T54" target="_blank" rel="noreferrer">
                        <div className="BigDonate">
                            <h2>Donate</h2>
                        </div>
                    </a>
                </div>
            </div>
            <div className="MobileMenu">
            <Link
                        to="Mission"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <div className="MobileNav">
                  <h2>What We Do</h2>
                </div>
                </Link>
                <Link
                        to="Solution"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <div className="MobileNav">
                    <h2>How You Can Help</h2>
                </div>
                </Link>
                <Link
                        to="Impact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <div className="MobileNav">
                    <h2>Our Progress</h2>
                </div>
                </Link>
                <Link
                        to="GoodAlways"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <div className="MobileNav">
                    <h2>Good Always</h2>
                </div>
                </Link>
                <Link
                        to="Contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                <div className="MobileNav">
                    <h2>Contact Us</h2>
                </div>
                </Link>
                
                
            </div>
        </div>
    )
}