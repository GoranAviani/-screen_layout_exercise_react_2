import React from 'react';
import './Navbar.css'

const Navbar = () => {

    return (
        <div class="navbar">
            <div class="left">
                <img class="logo" alt="logos" src="https://source.unsplash.com/random/300x300?v1"/>
                <button>nav 1</button>
                <button>nav 2 is this</button>
                <button>nav 3</button>
                <button>nav 4 here</button>
            </div>
            <div class="right">
                <button class="white">log in</button>
                <button class="blue">sign up here</button>
            </div>
        </div>
    )
}

export default Navbar;