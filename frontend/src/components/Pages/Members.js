import React, { Component } from 'react';

class Members extends Component {
    state = {
        hidden: true
    }

    toggleHidden = () => this.setState({ hidden: !this.state.hidden })

    render() { 
        return (
            <div className="members container">

                <section className="members-section">
                    <div className="section-title">
                        <h2>Exec members</h2>
                    </div>
                    <div className="row">
                        <div className="member">
                            <figure className="member-img__shape">
                                <img src={gui} alt="Gui Osorio" className="member-img" />
                                <figcaption className="member-img__caption">Gui Osorio</figcaption>
                            </figure>
                            <div className="member-text">
                                <h3 className="tertiary-heading">Gui Osorio</h3>
                                <p>
                                    <span className="member__subtitle">Position :</span> President <br/>
                                    <span className="member__subtitle">School year :</span>  Senior <br/>
                                    <span className="member__subtitle">Major and minor :</span> Finance major and double minor in ITMG and Business Analytics <br/>
                                    <span className="member__subtitle">Why are you interested in computer science?</span> To work on my problem solving skills and to have a better understanding of the technology around me. <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="member">
                            <figure className="member-img__shape">
                                <img src={akash} alt="Akash Atapattu" className="member-img" />
                                <figcaption className="member-img__caption">Akash Atapattu</figcaption>
                            </figure>
                            <div className="member-text">
                                <h3 className="tertiary-heading">Akash Atapattu</h3>
                                <p>
                                    <span className="member__subtitle">Position :</span> Vice president <br/>
                                    <span className="member__subtitle">School year :</span>  Senior <br/>
                                    <span className="member__subtitle">Major and minor :</span> B.S Computer Science <br/>
                                    <span className="member__subtitle">Why are you interested in computer science?</span> I'm studying computer science because, when you understand it, you can build 
                                        something that changes millions of people's lives, using nothing more than a laptop and an internet connection. I think that democratization of power to make the 
                                        world a better place is beautiful. Also, I'm a nerd who likes math <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    {this.state.hidden ?
                    <div className="members-btn" onClick={this.toggleHidden}>
                        <a href="#hiddenMembers" className="btn-text">Show all &darr;</a>
                    </div>
                    : ""}
                    {
                    this.state.hidden ? "" : 
                    <div id="hiddenMembers">
                    <div className="row">
                        <div className="member">
                            <figure className="member-img__shape">
                                <img src={sarah} alt="Sarah Haetzel" className="member-img" />
                                <figcaption className="member-img__caption">Sarah Haetzel</figcaption>
                            </figure>
                            <div className="member-text">
                                <h3 className="tertiary-heading">Sarah Haetzel</h3>
                                <p>
                                    <span className="member__subtitle">Position :</span> Secretary <br/>
                                    <span className="member__subtitle">School year :</span>  Junior <br/>
                                    <span className="member__subtitle">Major and minor :</span> Double major in Computer Science and Business Economics <br/>
                                    <span className="member__subtitle">What is your favorite part of ACM?</span> Speaker panels with people in industry. <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="member">
                            <figure className="member-img__shape">
                                <img src={rylee} alt="Rylee Bers" className="member-img" />
                                <figcaption className="member-img__caption">Rylee Bers</figcaption>
                            </figure>
                            <div className="member-text">
                                <h3 className="tertiary-heading">Rylee Bers</h3>
                                <p>
                                    <span className="member__subtitle">Position :</span> Treasurer <br/>
                                    <span className="member__subtitle">School year :</span>  Senior <br/>
                                    <span className="member__subtitle">Major and minor :</span> Computer Science major and Environmental Science Minor <br/>
                                    <span className="member__subtitle">Why are you interested in computer science?</span> I’m studying Comp sci because there’s so many ways you can utilize it. 
                                        It’s so much more than just programming. I’m hoping one day I can apply my studies to remote sensing in environmental science or my concentration 
                                        which is cybersecurity. <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="member">
                            <figure className="member-img__shape">
                                <img src={katrina} alt="Katrina Baha" className="member-img" />
                                <figcaption className="member-img__caption">Katrina Baha</figcaption>
                            </figure>
                            <div className="member-text">
                                <h3 className="tertiary-heading">Katrina Baha</h3>
                                <p>
                                    <span className="member__subtitle">Position :</span> Marketing Chair <br/>
                                    <span className="member__subtitle">School year :</span> Junior <br/>
                                    <span className="member__subtitle">Major and minor :</span> Computer Science major and Philosophy minor <br/>
                                    <span className="member__subtitle">What is your favorite part about ACM?</span> My favorite part of ACM are the events with USD computer science alumni because 
                                        I get to learn about all the different career paths in computer science from the perspective of USD students. <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="member">
                            <figure className="member-img__shape">
                                <img src={bo} alt="Bo Kulbacki" className="member-img" />
                                <figcaption className="member-img__caption">Bo Kulbacki</figcaption>
                            </figure>
                            <div className="member-text">
                                <h3 className="tertiary-heading">Bo Kulbacki</h3>
                                <p>
                                    <span className="member__subtitle">Position :</span> Outreach Chair <br/>
                                    <span className="member__subtitle">School year :</span>  Junior <br/>
                                    <span className="member__subtitle">Major and minor :</span> Computer Science major and Business Economics minor <br/>
                                    <span className="member__subtitle">Why are you interested in computer science?</span> I was required to take a computer science course in high school, 
                                        and I ended up liking it. I have continued taking classes since then and I realize all of the opportunities available with a technical background. <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="member">
                            <figure className="member-img__shape">
                                {/* <img src={joe} alt="Joe Hart" className="member-img" /> */}
                                <figcaption className="member-img__caption">Joe Hart</figcaption>
                            </figure>
                            <div className="member-text">
                                <h3 className="tertiary-heading">Joe Hart</h3>
                                <p>
                                    <span className="member__subtitle">Position :</span> Outreach Chair <br/>
                                    <span className="member__subtitle">School year :</span> Senior <br/>
                                    <span className="member__subtitle">Major and minor :</span> Computer Science major and Mathematics minor <br/>
                                    <span className="member__subtitle">Why are you interested in computer science?</span> I love the logical problems that are crucial for building projects <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="member">
                            <figure className="member-img__shape">
                                <img src={tia} alt="Tia Merheb" className="member-img" />
                                <figcaption className="member-img__caption">Tia Merheb</figcaption>
                            </figure>
                            <div className="member-text">
                                <h3 className="tertiary-heading">Tia Merheb</h3>
                                <p>
                                    <span className="member__subtitle">Position :</span> Marketing Chair <br/>
                                    <span className="member__subtitle">School year :</span> Junior <br/>
                                    <span className="member__subtitle">Major and minor :</span> Computer Science major and Spanish minor <br/>
                                    <span className="member__subtitle">Why are you interested in computer science?</span> I am studying computer science because it is a mixture of my two favorite 
                                        academic subjects: languages and technology. I have always had an interest in both fields and wanted something that would allow me to work in advanced 
                                        technological fields while focusing on the social aspects of the professional world. <br/>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="members-btn">
                        <a href="#" className="btn-text" onClick={this.toggleHidden}>Show less &uarr;</a>
                    </div>
                    </div>
                    }
                 </section>

            </div>
        );
    }
}
 
export default Members;