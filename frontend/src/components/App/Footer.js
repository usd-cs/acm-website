import React, { Component } from 'react';
import { SiAcm } from "react-icons/si";

class Footer extends Component {
    render() { 
        return (
            <footer id="footer">
                <div class="footer-left">
                    <ul class="footer-list">
                        <li><a href="https://www.instagram.com/usandiego_acm/" target="_blank">Our Instagram</a></li>
                        <li><a href="https://www.sandiego.edu/engineering/" target="_blank">USD School of Engineering</a></li>
                        <li><a href="https://www.sandiego.edu/" target="_blank">USD</a></li>
                    </ul>
                </div>
                <div class="footer-center">
                    <a href="https://www.acm.org/" target="_blank">
                        <i className="acmIcon footer-acmIcon">{<SiAcm />}</i>
                    </a>
                </div>
                <div class="footer-right">
                    &copy; Made by ACM USD 2021
                </div>
            </footer>
        );
    }
}
 
export default Footer;
