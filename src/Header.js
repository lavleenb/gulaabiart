import React from "react";
import './Header.scss';

export default function Header() {
    return (
        <header>
            <h1>
                Gulaabi Art
            </h1>
            <nav>
                <ul>
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/">Projects</a></li>
                    <li> <a href="/">Artwork</a></li>
                    <li> <a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}