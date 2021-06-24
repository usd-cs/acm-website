import React, { Component } from 'react';
import { FaList } from 'react-icons/fa';
import { SiAcm } from "react-icons/si";

class Navbar extends Component {
    state = { }
    render() { 
        return (
            <nav className="nav navbar navbar-expand-md">
            <div className="container-fluid">
                <a href="/" className="home-link navbar-brand"><span className="home-link-text">HOME</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    {<FaList />}
                </button>
                <div className="links collapse navbar-collapse" id="navbarNavDropdown">
                    <a href="/advice"><span className="link-text">Advice</span></a>
                    <a href="/events"><span className="link-text">Events</span></a>
                    <a href="/resources"><span className="link-text">Resources</span></a>
                    <a href="/explore"><span className="link-text">Explore</span></a>
                    <a href="/entertainment"><span className="link-text">Entertainment</span></a>
                    <a href="/members"><span className="link-text">Members</span></a>
                </div>
                <a href="https://www.acm.org/" className="icon-link" target="_blank">
                    <i className="acmIcon">{<SiAcm />}</i>
                </a>
            </div>
        </nav>
        );
    }
}
 
export default Navbar;

