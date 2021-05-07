import React, { Component } from 'react';

class Navbar extends Component {
    state = { }
    render() { 
        return (
            <nav className="nav navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="/" className="home-link navbar-brand">HOME</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    {this.props.icon}
                </button>
                <div className="links collapse navbar-collapse" id="navbarNavDropdown">
                    <a href="/events">Events</a>
                    <a href="/resources">Resources</a>
                    <a href="/explore">Explore</a>
                    <a href="/entertainment">Entertainment</a>
                    <a href="/advice">Advice</a>
                </div>
            </div>
        </nav>
        );
    }
}
 
export default Navbar;

