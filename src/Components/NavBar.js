import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        //Search Bar, Home link, Now Playing 
        return (
            <div className="search-container">
                <section>
                    <input type="text" placeholder="Search..." name="search" className="search-input" /> 
                    <button className="search-button">Submit</button>   
                </section>
                <section className="nav-bar">
                    <span>Home</span>
                    <span>Now Playing</span>
                </section>
            </div>
        );
    }
}

export default NavBar;


