import React, { Component } from 'react';

class Events extends Component {
    state = { }
    render() { 
        return (
            <div  className="events container">
                <h1 className="events-title">EVENTS</h1>
                <div className="events-subtitle">
                    <p className="events-subtitle-text">
                        <strong>UPCOMING EVENTS</strong>
                    </p>
                </div>

                <div className="events-subtitle">
                    <p className="events-subtitle-text">
                        <strong>PREVIOUS EVENTS</strong>
                    </p>
                </div>
                <div className="events-event">
                    <div className="events-image-box">
                        <figure className="events-image-figure">
                            <img className="events-image" src={gaming_event} />
                        </figure>
                    </div>
                    <div className="events-description-box">
                        <p className="events-description">
                            <strong>We look forward to seeing you tomorrow at our Gaming Industry Speaker Event at 1:00pm PST featuring speakers from Epic 
                            Games, Roblox, Rockstar Games and Question Games. Take advantage of this great networking opportunity and enjoy a free lunch on us!
                            Resources from event:   </strong>
                        </p>
                    </div>
                </div>
                <div className="events-event">
                    <div className="events-image-box">
                        <figure className="events-image-figure">
                            <img className="events-image" src={interview_event} />
                        </figure>
                    </div>
                    <div className="events-description-box">
                        <p className="events-description">
                            <strong> ACM will be hosting another technical interview coding problem workshop this Tuesday at 1:00 PM PST. 
                            All experience levels welcome!! Email agerami@sandiego.edu with any questions.
                            Resources from event:  </strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Events;