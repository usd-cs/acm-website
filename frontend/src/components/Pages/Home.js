import React, { Component } from 'react';
/* clean up code + files */
/* add comments wherever an explanation is necessary */
/* push to master */
/* style navbar */
class Home extends Component {
    state = { }
    render() {
        return (
                <div  className="home container">
                    <div style={{padding: "30px"}}>
                        <h1 align="center">Welcome to USD's Association for Computing Machinery!!!</h1>
                    </div>
                    <div style={{padding:"50px"}} >
                        <p style={{fontSize:"18px"}} >
                            <strong>ACM is an international community for anyone interested in computing. USD's chapter is for all students interested in computing, regardless of major or minor.
                            If you are interested in collaborating with new people, enhacing your interviewing skills, networking with professionals in the field, resume workshops, or just
                            hanging out with other students interested in computers, then join ACM! Meetings are held biweekly.</strong>
                        </p>
                    </div>
                    <div style={{padding:"40px"}}>
                        <p align="center" style={{fontSize:"30px"}}>
                            <strong>Exec Members TEST</strong>
                        </p>
                    </div>

                    <div id="images">
                        <figure className="figure">
                            <img src={ava} width="220" height="220" alt="" />
                            <img src={shaydon} width="220" height="220" alt="" />
                            <img src={sarah} width="220" height="220" alt="" />
                            <img src={tatiana} width="220" height="220" alt="" />
                            <img src={rachel} width="220" height="220" alt="" />
                            <figcaption>
                                <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                                <a href="mailto: agerami@sandiego.edu">Email Ava</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp      
                                &nbsp&nbsp&nbsp&nbsp<a href="mailto: sbodemar@sandiego.edu">Email Shaydon</a>&nbsp&nbsp&nbsp&nbsp&nbsp 
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    
                                &nbsp&nbsp&nbsp&nbsp<a href="mailto: shaetzel@sandiego.edu">Email Sarah</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   
                                &nbsp&nbsp&nbsp&nbsp<a href="mailto: tbarbone@sandiego.edu">Email Tatiana</a>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   
                                &nbsp&nbsp&nbsp&nbsp<a href="mailto: rvaldezdiaz@sandiego.edu">Email Rachel</a>&nbsp&nbsp&nbsp&nbsp</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
        );
    }
}
 
export default Home;