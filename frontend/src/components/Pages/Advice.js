import React, { Component } from 'react';

class Advice extends Component {
    state = { }
    render() { 
        return (
            <div  className="advice container">
                <h1 align='center'>Student Advice</h1>
                <div style={{padding:"40px"}} >
                    <p style={{fontSize:"20px"}}>
                        <strong>Why do CS students enjoy the major?</strong>
                    </p>
                    <p style = {{fontSize: "18px"}}>
                        If you like solving problems then CS is for you

                        I’m only a sophomore but so far I really enjoy it for the creativity and problem-solving.
                        I have learned so much in my first two years here. I think learning how to use the terminal was the most eye-opening. 
                        Hackathons are one fun thing you can do as long as you have some CS background (although not necessary!).
                    </p>
                    <p style={{fontSize:"20px"}}>
                        <strong>What advice on professional development do students have?</strong>
                    </p>
                    <p style = {{fontSize: "18px"}}>
                        There are many opportunities where Comp sci professors will post internship opportunities or the school will host 
                        career fairs and torero treks. Make sure you take up on some of these opportunities because just going to class is not enough.

                        Rhonda and Sam are super helpful!

                        Do an internship, utilize your resources at CDev and attend a couple torero treks. do side projects that interest you.
                    </p>
                    <p style={{fontSize:"20px"}}>
                        <strong>What electives do student recommend?</strong>
                    </p>
                    <p style = {{fontSize: "18px"}}>
                        Embedded Software with Lupfer is a fun class! The whole class works on a project together at the end of the semester.
                        My class made our own version of the Bop-it game. The pace of the class is perfect because you learn a lot, but I never
                        felt overwhelmed.

                        I have taken Web Programming. It’s a bit boring because all the homework and material is in an interactive textbook but it is easy and good for introductory learning.
                    </p>
                    <p style={{fontSize:"20px"}}>
                        <strong>How should students balance their workload?</strong>
                    </p>
                    <p style = {{fontSize: "18px"}}>
                        I recommend taking 2 comp sci classes max at the same time. I would stick to only taking comp280 at once.
                    </p>
                    <p style={{fontSize:"20px"}}>
                        <strong>What are the most challenging courses and how should students prepare for them?</strong>
                    </p>
                    <p style = {{fontSize: "18px"}}>
                        COMP 280 - very time consuming course, side of computer science that most students have not though of before taking the class. 
                        I recommend not taking other difficult courses at the same time as this one. I was in office hours at least once a week.

                        COMP280 was so hard for me personally it was such a wake-up call CS-wise. However I did take it Fall 2021 which was a shorter semester than usual. 
                        It was hard because I had never been exposed to assembly language before and our textbook was not useful, practice problems were very limited, and it was very hard to find online resources. 
                        I would recommend keeping that semester somewhat lighter to have time to really study and get help.

                        Networking is challenging but rewarding-- you come out of the course with an appreciation for the internet today, and behind the scenes knowledge of 
                        how it all works. have a growth mindset and you'll be in a good spot, and of course, do the reading!
                    </p>
                    <p style={{fontSize:"20px"}}>
                        <strong>How should students prepare for senior design/what can they expect from it?</strong>
                    </p>
                    <p style = {{fontSize: "18px"}}>
                        By the time you take senior project you'll have enough skills under your belt. Doing an internship before taking senior project 
                        taught me how to communicate with my sponsor. For a successful project, having a great team helps but know that you need to put in the 
                        time and effort.
                    </p>
                </div>


            </div>
        );
    }
}
 
export default Advice;