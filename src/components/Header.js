import React from "react"

import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <p className="header-title">Picturez</p>
                <p className="header-sub">Royalty-free Pictures</p>
            </div>
            <div className="header-search">
                <button type="submit" className="search-btn" >
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
                <input type="text" className="search-input" name="searchQueryInput" placeholder="Picture Search" />
            </div>
            <div className="header-btns">
                <button onClick={() => alert('Not implemented.')}>Log in</button>
                <button onClick={() => alert('Not implemented.')}><strong>Sign up</strong></button>
            </div>
        </header>
    )
}