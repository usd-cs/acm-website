import React, { Component } from 'react';

class Entertainment extends Component {
    state = { }
    render() { 
        return (
            <div  className="entertainment container">
                <h1>ENTERTAINMENT PAGE</h1>
                <h1 align='center'>Entertainment Page</h1>
                <div style={{padding:"40px"}} >
                    <p style={{fontSize:"20px"}}>
                        <strong>Videos</strong>
                    </p>
                    
                    <p style = {{fontSize: "18px"}}>
                        <strong>Elizabeth's Youtube Channel</strong>
                        <iframe width="420" height="315"src="https://www.youtube.com/channel/UCClgNovRVir-tTOIcJwjgIg"></iframe>
                    </p>

                    <p style = {{fontSize: "18px"}}>
                        <strong>Back to Back SWE</strong>
                        <iframe width="420" height="315"src="https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA"></iframe>
                    </p>

                    <p style = {{fontSize: "18px"}}>
                        <strong>Linus Tech Tips</strong>
                        <iframe width="420" height="315"src="https://www.youtube.com/user/LinusTechTips"></iframe>
                    </p>

                    <p style = {{fontSize: "18px"}}>
                        <strong>Keep on Coding</strong>
                        <iframe width="420" height="315"src="https://www.youtube.com/user/samtheman2002"></iframe>
                    </p>

                    <p style = {{fontSize: "18px"}}>
                        <strong>Bukola</strong>
                        <iframe width="420" height="315"src="https://www.youtube.com/channel/UC-bFgwL_kFKLZA60AiB-CCQ"></iframe>
                    </p>

                    <p style={{fontSize:"20px"}}>
                        <strong>Tech News Outlet</strong>
                    </p>

                    <a href="https://www.theverge.com/">The Verge</a>

                    <p style={{fontSize:"20px"}}>
                        <strong>Tech Podcasts</strong>
                    </p>

                    <a href="https://www.npr.org/podcasts/510313/how-i-built-this">How I Built This with Guy Raz</a>

                    </div>
            </div>
        );
    }
}
 
export default Entertainment;