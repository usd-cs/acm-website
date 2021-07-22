import React, { Component } from 'react';

let imageOne = gaming_event
let imageTwo = interview_event
let imageThree = interview_event

class Events extends Component {
    state = {
        imageOneClicked: false,
        imageTwoClicked: false,
        imageThreeClicked: false
    }

    toggleImageOne = () => this.setState({ imageOneClicked: !this.state.imageOneClicked })
    toggleImageTwo = () => this.setState({ imageTwoClicked: !this.state.imageTwoClicked })
    toggleImageThree = () => this.setState({ imageThreeClicked: !this.state.imageThreeClicked })


    render() {
        const { imageOneClicked, imageTwoClicked, imageThreeClicked } = this.state;

        return (
            <div  className="events container">
                <div className="events-title">
                    <h1 className="events-title-text">EVENTS</h1>
                </div>

                <div className="all-events">
               
                    <div className="events-box">
                        <div className="events-subtitle">
                            <h2 className="events-subtitle-text">Upcoming events</h2>
                        </div>

                        <div className="events-event" id="eventOne">
                            <div className="events-image-box">
                                <img className="events-image" src={imageOne} onClick={this.toggleImageOne} />
                            </div>
                            <div className="events-description-box">
                                <h3 className="tertiary-heading">Gaming industry event</h3>
                                <p className="events-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Leo urna molestie at elementum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Adipiscing tristique risus nec feugiat in fermentum.
                                    Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Risus nullam eget felis eget nunc lobortis mattis. 
                                    Sed arcu non odio euismod lacinia. Quis blandit turpis cursus in. Scelerisque eleifend donec pretium vulputate sapien nec. 
                                    Velit sed ullamcorper morbi tincidunt ornare massa eget. Fames ac turpis egestas sed tempus urna et pharetra. Arcu cursus euismod quis viverra 
                                    nibh cras pulvinar mattis.
                                    Purus ut faucibus pulvinar elementum integer enim neque volutpat. Duis ultricies lacus sed turpis tincidunt. 
                                    Ullamcorper a lacus vestibulum sed. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. 
                                    Scelerisque viverra mauris in aliquam sem fringilla. Vitae tortor condimentum lacinia quis vel eros donec. 
                                </p>
                            </div>
                        </div>

                        <div className="events-event" id="eventTwo">
                            <div className="events-image-box">
                                <figure className="events-image-figure">
                                    <img className="events-image" src={imageTwo} onClick={this.toggleImageTwo} />
                                </figure>
                            </div>
                            <div className="events-description-box">
                                <h3 className="tertiary-heading">Technical interview coding practice</h3>
                                <p className="events-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Leo urna molestie at elementum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Adipiscing tristique risus nec feugiat in fermentum.
                                    Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Risus nullam eget felis eget nunc lobortis mattis. 
                                    Sed arcu non odio euismod lacinia. Quis blandit turpis cursus in. Scelerisque eleifend donec pretium vulputate sapien nec. 
                                    Velit sed ullamcorper morbi tincidunt ornare massa eget. Fames ac turpis egestas sed tempus urna et pharetra. Arcu cursus euismod quis viverra 
                                    nibh cras pulvinar mattis.
                                    Purus ut faucibus pulvinar elementum integer enim neque volutpat. Duis ultricies lacus sed turpis tincidunt. 
                                    Ullamcorper a lacus vestibulum sed. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. 
                                    Scelerisque viverra mauris in aliquam sem fringilla. Vitae tortor condimentum lacinia quis vel eros donec.
                                </p>
                            </div>
                        </div>
                    </div>

                    {
                        imageOneClicked 
                        ? <div className="popup">
                            <div className="popup-img-box">
                                <img src={imageOne} />
                            </div>
                            <a href="#eventOne" class="close-popup" onClick={this.toggleImageOne}>&times;</a>
                        </div>
                        : " "
                    }
                    {
                        imageTwoClicked 
                        ? <div className="popup">
                            <div className="popup-img-box">
                                <img src={imageTwo} />
                            </div>
                            <a href="#eventTwo" class="close-popup" onClick={this.toggleImageTwo}>&times;</a>
                        </div>
                        : " "
                    }

                    <div className="events-box">
                        <div className="events-subtitle">
                            <h2 className="events-subtitle-text">Previous events</h2>
                        </div>
                        <div className="events-event" id="eventThree">
                            <div className="events-image-box">
                                <figure className="events-image-figure">
                                    <img className="events-image" src={imageThree} onClick={this.toggleImageThree}/>
                                </figure>
                            </div>
                            <div className="events-description-box">
                                <h3 className="tertiary-heading">Technical interview coding practice</h3>
                                <p className="events-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Leo urna molestie at elementum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Adipiscing tristique risus nec feugiat in fermentum.
                                    Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Risus nullam eget felis eget nunc lobortis mattis. 
                                    Sed arcu non odio euismod lacinia. Quis blandit turpis cursus in. Scelerisque eleifend donec pretium vulputate sapien nec. 
                                    Velit sed ullamcorper morbi tincidunt ornare massa eget. Fames ac turpis egestas sed tempus urna et pharetra. Arcu cursus euismod quis viverra 
                                    nibh cras pulvinar mattis.
                                    Purus ut faucibus pulvinar elementum integer enim neque volutpat. Duis ultricies lacus sed turpis tincidunt. 
                                    Ullamcorper a lacus vestibulum sed. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. 
                                    Scelerisque viverra mauris in aliquam sem fringilla. Vitae tortor condimentum lacinia quis vel eros donec.
                                </p>
                            </div>
                        </div>
                    </div>

                    {
                        imageThreeClicked 
                        ? <div className="popup">
                            <div className="popup-img-box">
                                <img src={imageThree} />
                            </div>
                            <a href="#eventThree" class="close-popup" onClick={this.toggleImageThree}>&times;</a>
                        </div>
                        : " "
                    }

                </div>

            </div>
        );
    }
}
 
export default Events;