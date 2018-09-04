import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

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
                    <Link to='/'>Home</Link>
                    <Link to='/'>Now Playing</Link>
                </section>
            </div>
        );
    }
}

export default NavBar;


