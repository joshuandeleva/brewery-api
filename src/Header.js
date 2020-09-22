import React from 'react'
import "./Header.css"
import Button from "@material-ui/core/Button"
function Header() {
    return (
        <div className="app_Header">
            <div className="beerTitle">
                <h1>Beers</h1>
            </div>
            <div className="searchInput">
                <input className="searchIput_type" placeholder="Search Beers" />
                <Button className="searchButton">Search</Button>
            </div>
        </div>
    )
}

export default Header
