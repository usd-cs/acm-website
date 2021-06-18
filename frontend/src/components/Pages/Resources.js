import React, { Component } from 'react';

class Resources extends Component {
    state = { }
    render() { 
        return (
            <div className="resources container">
                <h1 className="resources-title">HELPFUL COMPUTING RESOURCES</h1>
                <div className="resources-section">
                    <h2 className="resources-section-title"><strong>WEBSITE BUILDING TUTORIALS</strong></h2>
                    <p className="resources-section-text">
                        Learn Python's Django web development framework by building your own ecommerce website. 
                        You'll also learn the popular Vue.js front end library. If you know a little Python and JavaScript, and want to start applying your 
                        skills with a bigger project, this is the course for you. You'll learn about web servers, authentication, shopping carts, and more.
                        <a href="https://www.freecodecamp.org/news/create-an-e-commerce-site-with-django-and-vue/">Click here to learn more!</a>
                    </p>
                    <p className="resources-section-text">
                        Django Tutorial on Youtube. Django has been updated since this playlist has been released so be sure to read through comments to
                        catch any minor changes.
                        <a href="https://www.youtube.com/watch?v=n-FTlQ7Djqc&list=PL4cUxeGkcC9ib4HsrXEYpQnTOTZE1x0uc">Click here to learn more!</a>
                    </p>
                    <p className="resources-section-text">
                        Django's website. Includes several tutorials for all stages of development.
                        <a href="https://www.djangoproject.com/start/">Click here to learn more!</a>
                    </p>
                    <p className="resources-section-text">
                        Want to build a website but aren't familiar with python? Try React, based in javascript.
                        <a href="https://reactjs.org/">Click here to learn more!</a>
                    </p>
                </div>
                <div className="resources-section">
                    <h2 className="resources-section-title"><strong>INTERVIEW PROBLEM PRACTICE</strong></h2>
                    <p className="resources-section-text">
                        Leetcode is a platform containing several common interview questions at all levels. You can
                        compare your solution to each problem with other programmers' solutions. It also includes free online programming contests.
                        <a href="https://leetcode.com/">Click here to learn more!</a>
                    </p>
                    <p className="resources-section-text">
                        Whiteboard Warriors is one of the best sources for interview practice. Collaborate with other engineers/coders to tackle interview problems.
                        There's in person meet ups as well.
                        <a href="https://www.whiteboardwarriors.org/about">Click here to learn more!</a>
                    </p>
                </div>

                <div className="resources-section">
                    <h2 className="resources-section-title"><strong>Learn a New Language</strong></h2>
                    <p className="resources-section-text">
                        Codecademy has several free courses to choose from. This site is ideal for new coders because most of the language courses
                        all go over loops, if statements, and other commonalities in programming at a beginner level.
                        <a href="https://www.codecademy.com/">Click here to learn more!</a>
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Resources;