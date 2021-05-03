import React, { Component } from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
/* 
more content to each section
fix other pages' code
responsiveness of pages (for .acm-description, use library react-sizeme or react-measure to responsively change the functionality of the info)
https://blog.logrocket.com/building-size-aware-react-components-b4c37e7d96e7/
*/
class Home extends Component {
    state = {
        defaultText: true,
        acmDescription: "What is ACM USD?"
    }

    setAnswer = () => this.setState({ default: false, acmDescription: "ACM is an international community for anyone interested in computing. USD's chapter is for all students interested in computing, regardless of major or minor. If you are interested in collaborating with new people, enhacing your interviewing skills, networking with professionals in the field, resume workshops, or just hanging out with other students interested in computers, then join ACM! Meetings are held biweekly." })

    setQuestion = () => this.setState({ default: true, acmDescription: "What is ACM USD?" })

    render() {
        const { defaultText, acmDescription } = this.state;
        return (
                <div  className="home container">
                    <div className="page-title">
                        <h1>Welcome to USD's Association for Computing Machinery</h1>
                    </div>
                    <div className="acm-description" onMouseOver={this.setAnswer} onMouseLeave={this.setQuestion}>
                        <p>{acmDescription}</p>
                    </div>
                    <div className="members">
                        <h2>Exec Members</h2>
                        <figure className="figure">
                            <div className="members-images">
                                <div className="member">
                                    <img src={ava} width="220" height="220" alt="" />
                                    <a href="mailto: agerami@sandiego.edu">Email Ava</a>
                                </div>
                                <div className="member">
                                    <img src={shaydon} width="220" height="220" alt="" />
                                    <a href="mailto: sbodemar@sandiego.edu">Email Shaydon</a>
                                </div>
                                <div className="member">
                                    <img src={sarah} width="220" height="220" alt="" />
                                    <a href="mailto: shaetzel@sandiego.edu">Email Sarah</a>
                                </div>
                                <div className="member">
                                    <img src={tatiana} width="220" height="220" alt="" />
                                    <a href="mailto: tbarbone@sandiego.edu">Email Tatiana</a>
                                </div>
                                <div className="member">
                                    <img src={rachel} width="220" height="220" alt="" />
                                    <a href="mailto: rvaldezdiaz@sandiego.edu">Email Rachel</a>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="social-media">
                        <h2> Social Media</h2>
                        <div className="social-icons">
                            <div className="acm-ig">
                                <i>{<FaInstagramSquare />}</i>
                                <a href="https://www.instagram.com/usandiego_acm/" target="_blank">@usandiego_acm</a>
                            </div>
                            <div className="engineering-ig">
                                <i>{<FaInstagramSquare />}</i>
                                <a href="https://www.instagram.com/usdengineering/" target="_blank">@usdengineering</a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
 
export default Home;