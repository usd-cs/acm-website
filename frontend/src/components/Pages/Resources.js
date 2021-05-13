import React, { Component } from 'react';

class Resources extends Component {
    state = { }
    render() { 
        return (
            <div  className="resources container">
                <h1 align="center">Helpful Computing Resources</h1>
                <p style={{fontSize: "25px"}}>
                    <strong>Website Building Tutorials</strong>
                </p>

                <p style={{fontSize: "15px"}}>
                    Learn Python's Django web development framework by building your own ecommerce website. 
                    You'll also learn the popular Vue.js front end library. If you know a little Python and JavaScript, and want to start applying your 
                    skills with a bigger project, this is the course for you. You'll learn about web servers, authentication, shopping carts, and more.
                    <a href="https://www.freecodecamp.org/news/create-an-e-commerce-site-with-django-and-vue/">Click here to learn more!</a>
                </p>

                <p style={{fontSize:"15px"}}>
                    Django's website. Includes several tutorials for all stages of development.
                    <a href="https://www.djangoproject.com/start/">Click here to learn more!</a>
                </p>

                <p style={{fontSize: "15px"}}>
                    Want to build a website but aren't familiar with python? Try React, based in javascript.
                    <a href="https://reactjs.org/">Click here to learn more!</a>
                </p>


                <p style={{fontSize: "25px"}}>
                    <strong>Interview Problem Practice</strong>
                </p>

                <p style={{fontSize: "15px"}}>
                    Leetcode is a platform containing several common interview questions at all levels. You can
                    compare your solution to each problem with other programmers' solutions. It also includes free online programming contests.
                    <a href="https://leetcode.com/">Click here to learn more!</a>
                </p>
            </div>
        );
    }
}
 
export default Resources;