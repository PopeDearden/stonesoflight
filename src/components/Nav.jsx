import React from 'react'
import '../App.scss'

export default function Nav() {

    return (
        <div className="Column">
            <div className="NavBar">
                <div className="LogoBox">
                    <img alt="logo" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/only_stones_logo.png?v=1610147253" ></img>
                    <h1>Stones of Light Education Foundation</h1>
                </div>
                <div className="Menu">
                    <div className="NavButton">
                        <h2>Mission</h2>
                    </div>
                    <div className="NavButton">
                        <h2>Progress</h2>
                    </div>
                    <div className="NavButton">
                        <h2>Your Impact</h2>
                    </div>
                    <div className="BigDonate">
                        <h2>Donate</h2>
                    </div>
                </div>
            </div>
            <div className="MobileMenu">
            <div className="MobileNav">
                <h2>Mission</h2>
            </div>
            <div className="MobileNav">
                <h2>Progress</h2>
            </div>
            <div className="MobileNav">
                <h2>Your Impact</h2>
            </div>
        </div>
        </div>
    )
}