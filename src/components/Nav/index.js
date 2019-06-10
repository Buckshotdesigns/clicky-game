import React from "react";

function Nav () {
    return (
    <div>
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Clicky Game</a>
            </li>
            <li className="">Click an image to begin!</li>
            <li>Score: 0  Topscore:0</li>
        </ul>
    </nav>
    </div>
    );
}

export default Nav;