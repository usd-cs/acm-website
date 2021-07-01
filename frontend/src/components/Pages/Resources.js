import React, { Component } from 'react';

class Resources extends Component {
    state = { }
    render() { 
        return (
            <div className="resources-container">
                <div className="resources-section">
                    <h3 className="resources-section-title">Website Building Tools</h3>
                    <p className="resources-section-text">
                        Front end open source toolkit for designing websites and mobile apps.
                        <a href="https://getbootstrap.com/">Click here to visit Bootstrap's site.</a>
                    </p>
                    <p className="resources-section-text">
                        Django is a full stack tool for web development. There are several online tutorials including some on Django's site, <a href="https://www.youtube.com/watch?v=n-FTlQ7Djqc&list=PL4cUxeGkcC9ib4HsrXEYpQnTOTZE1x0uc">
                        but here's Rylee's personal favorite.</a> If you are more familiar with python than javascript, than we'd recommend Django. 
                        <a href="https://www.djangoproject.com/start/">Click here to visit Django's site.</a>
                    </p>
                    <p className="resources-section-text">
                        Want to build a website but aren't familiar with python? Try React, based in javascript and for full stack web development.
                        <a href="https://reactjs.org/">Click here to visit React's site.</a>
                    </p>
                </div>


                <div className="resources-section">
                    <h3 className="resources-section-title">Interview Practice Problems</h3>
                    <p className="resources-section-text">
                        Leetcode is a platform containing several common interview questions at all levels. You can
                        compare your solution to each problem with other programmers' solutions. It also includes free online programming contests.
                        <a href="https://leetcode.com/">Click here to visit Leetcode's site!</a>
                    </p>
                    <p className="resources-section-text">
                        Whiteboard Warriors is one of the best sources for interview practice. Collaborate with other engineers/coders to tackle interview problems.
                        There's in person meet ups as well.
                        <a href="https://www.whiteboardwarriors.org/about">Click here to visit Whiteboard Warriers' site</a>
                    </p>
                </div>

                <div className="resources-section">
                    <h3 className="resources-section-title">Learn a New Language</h3>
                    <p className="resources-section-text">
                        Codecademy has several free courses to choose from. This site is ideal for new coders because most of the language courses
                        all go over loops, if statements, and other commonalities in programming at a beginner level.
                        <a href="https://www.codecademy.com/">Click here to visit Codecademy's site.</a>
                    </p>
                    <p className="resources-section-text">
                        Khan academy is a massive platform containing tutorials from beginner to advanced level. Tutorials are taught by experts.
                        <a href="https://www.khanacademy.org/">Click here to visit Khan Academy's site.</a>
                    </p>
                </div>

                <div className="resources-section">
                    <h3 className="resources-section-title">Top Notch Coding Platforms</h3>
                    <p className="resources-section-text">
                        Visual Studio is a must have. With countless plugins, a debugger tool, and several other features, it makes
                        coding easier.
                        <a href="https://code.visualstudio.com/">Download here.</a>
                    </p>
                    <p className="resources-section-text">
                        An IDE just for python. Includes on-the-fly error detection and several other useful features.
                        <a href="https://pycharm-community-edition.en.softonic.com/download">Click to download.</a>
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Resources;