import React, { Component } from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
/* 
more content to each section
fix other pages' code
responsiveness of pages (for .acm-description, use library react-sizeme or react-measure to responsively change the functionality of the info)
https://blog.logrocket.com/building-size-aware-react-components-b4c37e7d96e7/

ACM Standards - http://identitystandards.acm.org/identitystandards.pdf
*/
class Home extends Component {
    state = {
        defaultText: true,
        acmDescription: "What is ACM USD?"
    }

    setAnswer = () => this.setState({ default: false, acmDescription: "\"ACM is an international community for anyone interested in computing. USD's chapter is for all students interested in computing, regardless of major or minor. If you are interested in collaborating with new people, enhacing your interviewing skills, networking with professionals in the field, resume workshops, or just hanging out with other students interested in computers, then join ACM! Meetings are held biweekly.\"" })

    setQuestion = () => this.setState({ default: true, acmDescription: "What is ACM USD?" })

    changeDefault = () => {
        this.state.defaultText 
        ? this.setState({ defaultText: false, acmDescription: "\"ACM is an international community for anyone interested in computing. USD's chapter is for all students interested in computing, regardless of major or minor. If you are interested in collaborating with new people, enhacing your interviewing skills, networking with professionals in the field, resume workshops, or just hanging out with other students interested in computers, then join ACM! Meetings are held biweekly.\""})
        : this.setState({ default: true, acmDescription: "What is ACM USD?" })
    }

    render() {
        const { defaultText, acmDescription } = this.state;

        return (
                <div  className="home container">

                    <section className="welcome">
                        <div className="page-title">
                            <h1>Welcome to USD's Association for Computing Machinery</h1>
                        </div>
                    </section>

                    <section className="description">
                        <div className="acm-description" onMouseOver={this.setAnswer} onMouseLeave={this.setQuestion} onTouchEnd={this.changeDefault}>
                            <p>{acmDescription}</p>
                        </div>
                    </section>

                    <section className="about">
                        <div className="section-title">
                            <h2>[Title goes here]</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 about-text"> 
                                <h3 className="tertiary-heading">[Title goes here]</h3>
                                <p className="about-paragraph">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia molestias dolor quisquam temporibus, laborum eius veniam illum voluptatibus tempora molestiae officia magnam ad vero? Fuga vitae error minima porro assumenda.
                                </p>

                                <h3 className="tertiary-heading">[Title goes here]</h3>
                                <p className="about-paragraph">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia molestias dolor quisquam temporibus, laborum eius veniam illum voluptatibus tempora molestiae officia magnam ad vero? Fuga vitae error minima porro assumenda.
                                </p>

                                <div><a href="#" className="btn-text">[LINK HERE] &rarr;</a></div>
                            </div>
                            <div className="col-sm-6 about-photos">
                                <div className="photos">
                                    <img src={group_img1} alt="Photo 1" className="photo p1" />
                                    <img src={group_img2} alt="Photo 2" className="photo p2" />
                                    <img src={group_img3} alt="Photo 3" className="photo p3" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="social-media">
                        <h2>SOCIAL MEDIA</h2>
                        <div className="social-icons">
                            <div className="ig acm-ig">
                                <i>{<FaInstagramSquare />}</i>
                                <a href="https://www.instagram.com/usandiego_acm/" target="_blank" className="ig-link">@usandiego_acm</a>
                            </div>
                            <div className="ig engineering-ig">
                                <i>{<FaInstagramSquare />}</i>
                                <a href="https://www.instagram.com/usdengineering/" target="_blank" className="ig-link">@usdengineering</a>
                            </div>
                        </div>
                    </section>
                    
                </div>
        );
    }
}
 
export default Home;