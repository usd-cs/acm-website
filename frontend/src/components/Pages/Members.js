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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repudiandae minima excepturi quibusdam, recusandae, laboriosam possimus cupiditate dolor blanditiis consectetur culpa corporis nulla sunt tenetur? Rem esse laboriosam harum eum!  laboriosam possimus cupiditate dolor.
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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repudiandae minima excepturi quibusdam, recusandae, laboriosam possimus cupiditate dolor blanditiis consectetur culpa corporis nulla sunt tenetur? Rem esse laboriosam harum eum!  laboriosam possimus cupiditate dolor.
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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repudiandae minima excepturi quibusdam, recusandae, laboriosam possimus cupiditate dolor blanditiis consectetur culpa corporis nulla sunt tenetur? Rem esse laboriosam harum eum!  laboriosam possimus cupiditate dolor.
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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repudiandae minima excepturi quibusdam, recusandae, laboriosam possimus cupiditate dolor blanditiis consectetur culpa corporis nulla sunt tenetur? Rem esse laboriosam harum eum!  laboriosam possimus cupiditate dolor.
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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repudiandae minima excepturi quibusdam, recusandae, laboriosam possimus cupiditate dolor blanditiis consectetur culpa corporis nulla sunt tenetur? Rem esse laboriosam harum eum!  laboriosam possimus cupiditate dolor.
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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repudiandae minima excepturi quibusdam, recusandae, laboriosam possimus cupiditate dolor blanditiis consectetur culpa corporis nulla sunt tenetur? Rem esse laboriosam harum eum!  laboriosam possimus cupiditate dolor.
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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repudiandae minima excepturi quibusdam, recusandae, laboriosam possimus cupiditate dolor blanditiis consectetur culpa corporis nulla sunt tenetur? Rem esse laboriosam harum eum!  laboriosam possimus cupiditate dolor.
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