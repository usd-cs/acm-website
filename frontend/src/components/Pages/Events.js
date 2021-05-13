import React, { Component } from 'react';

class Events extends Component {
    state = { }
    render() { 
        return (
            <div  className="events container">
                <h1 align='center'>Events</h1>
                <div style={{padding:"40px"}} >
                    <p style={{fontSize:"25px"}}>
                        <strong>Upcoming Events</strong>
                    </p>
                </div>


                <div style={{padding:"40px"}}>
                    <p style={{fontSize:"25px"}}>
                        <strong>Previous Events</strong>
                    </p>
                </div>
                <div>
                    <figure style={{float: "left"}}>
                        <img src={gaming_event} height="250px" width="200px" style={{border: "1px"}} />
                    </figure>
                </div>
                <div style={{padding:"70px"}}>
                    <p style={{verticalAlign: "middle"}}>
                        <strong>We look forward to seeing you tomorrow at our Gaming Industry Speaker Event at 1:00pm PST featuring speakers from Epic 
                        Games, Roblox, Rockstar Games and Question Games. Take advantage of this great networking opportunity and enjoy a free lunch on us!
                        Resources from event:   </strong>
                    </p>
                </div>
                
                <div style={{padding:"40px"}}>
                    <figure style={{float: "left"}}>
                        <img src={interview_event} height="250px" width="200px" style={{border: "1px"}} />
                    </figure>
                </div>
                <div style={{padding:"70px"}}>
                    <p style={{verticalAlign: "middle"}}>
                        <strong> ACM will be hosting another technical interview coding problem workshop this Tuesday at 1:00 PM PST. 
                        All experience levels welcome!! Email agerami@sandiego.edu with any questions.
                        Resources from event:   </strong>
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Events;