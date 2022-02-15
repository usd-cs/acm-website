import React, { Component } from 'react';

class Entertainment extends Component {
    state = { }
    render() { 
        return (
            <div className="entertainment container">
                <div className="entertainment-videos">
                    <h2>Videos</h2>
                    
                    <div className="yt-channel">
                        <h3>
                            <a href="https://www.youtube.com/channel/UCClgNovRVir-tTOIcJwjgIg" target="_blank">Elizabeth's Youtube Channel </a>
                            - College / Career / Entertainment
                        </h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/TTk23-6ndU4" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>

                    <div className="yt-channel">
                        <h3>
                            <a href="https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA" target="_blank">Back to Back SWE </a>
                            - Technical Interview Practice
                        </h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/hGK_5n81drs" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen>
                        </iframe>
                    </div>

                    <div className="yt-channel">
                        <h3>
                            <a href="https://www.youtube.com/user/LinusTechTips" target="_blank">Linus Tech Tips </a>
                            - Tech / Entertainment
                        </h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/odZSCdNTFPw" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>

                    <div className="yt-channel">
                        <h3>
                            <a href="https://www.youtube.com/user/samtheman2002" target="_blank">Keep on Coding </a>
                            - Programming / Web Development
                        </h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/T69UbUWi-O0" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>

                    <div className="yt-channel">
                        <h3>
                            <a href="https://www.youtube.com/channel/UC-bFgwL_kFKLZA60AiB-CCQ" target="_blank">Bukola </a>
                            - Programming / Lifestyle
                        </h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7J_qcttfnJA" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>

                <div className="entertainment-more">
                    <div className="tech-news">
                        <div className="ent-more-title">
                            <h2>Tech News</h2>
                        </div>
                        <ul className="ent-more-list">
                            <li><a href="https://www.theverge.com/" target="_blank">The Verge</a> - Tech / Science</li>
                            <li><a href="https://techcrunch.com/" target="_blank">Tech Crunch</a> - Tech / Startups</li>
                            <li><a href="https://gizmodo.com/" target="_blank">Gizmodo</a> - Tech / Science / Design</li>
                            <li><a href="https://thenextweb.com/" target="_blank">The Next Web</a> - Tech / Startups</li>
                        </ul>
                    </div>

                    <div className="tech-podcasts">
                        <div className="ent-more-title">
                            <h2>Tech Podcasts</h2>
                        </div>
                        <ul className="ent-more-list">
                            <li><a href="https://www.npr.org/podcasts/510313/how-i-built-this" target="_blank">How I Built This with Guy Raz</a> - entrepreneurship</li>
                            <li><a href="https://softwareengineeringdaily.com/" target="_blank">Software Engineering Daily</a> - all software engineering</li>
                            <li><a href="https://changelog.com/podcast/" target="_blank">Changelog</a> - open source software</li>
                            <li><a href="https://developertea.com/" target="_blank">Developer Tea</a> - short episodes, wide range of topics</li>
                            <li><a href="https://www.codingblocks.net/" target="_blank">Coding Blocks</a> - design patterns / OOP / database implementation</li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
 
export default Entertainment;