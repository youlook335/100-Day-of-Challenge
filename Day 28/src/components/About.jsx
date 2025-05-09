import React from 'react'
import '../Style/About.css'

const About = () => {
    return (
        <>
            <div className="conatiner">
                <div className="section_1">
                    <div className="center">
                        <h1 className='center_h1'>About Me</h1>
                        <p className='center_p'>I am Tanveer And i am Developer I learn a Jsx Mean That a React I Professional a designig And Development And I Next Idea is a Python And Cyber attack</p>
                    </div>
                </div>
                <div className="section_2">
                    <div className='img'>
                        <img src="https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIZaVsQl6mMcOPgyPrVm8ZlCSBwKdwWju4TTnM7BM4Q=" alt="developer image" />
                        {/* <img src="./public/developer.webp" alt="developer image" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;