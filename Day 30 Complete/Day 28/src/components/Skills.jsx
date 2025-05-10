import React from 'react'
import "../Style/Skills.css"

const Skills = () => {
    return (
        <>
            <div className="contain">
                <div className="part1">
                    <h1 className='skill'>My Skills</h1>
                    <div className="Ranges">
                        <div className="range-container">
                            <div className="range-box">
                                <p>HTML</p>
                                <input type="range" min="0" max="100" value="80" disabled />
                                <span>80%</span>
                            </div>
                            <div className="range-box">
                                <p>CSS</p>
                                <input type="range" min="0" max="100" value="70" disabled />
                                <span>70%</span>
                            </div>
                            <div className="range-box">
                                <p>JavaScript</p>
                                <input type="range" min="0" max="100" value="60" disabled />
                                <span>60%</span>
                            </div>
                            <div className="range-box">
                                <p>Git & Github</p>
                                <input type="range" min="0" max="100" value="60" disabled />
                                <span>60%</span>
                            </div>
                            <div className="range-box">
                                <p>Tailwind CSS</p>
                                <input type="range" min="0" max="100" value="70" disabled />
                                <span>70%</span>
                            </div>
                            <div className="range-box">
                                <p>React.js</p>
                                <input type="range" min="0" max="100" value="7 0" disabled />
                                <span>70%</span>
                            </div>
                            <div className="range-box">
                                <p>PHP</p>
                                <input type="range" min="0" max="100" value="80" disabled />
                                <span>80%</span>
                            </div>
                            <div className="range-box">
                                <p>TypeScript</p>
                                <input type="range" min="0" max="100" value="30" disabled />
                                <span>30%</span>
                            </div>
                            <div className="range-box">
                                <p>Bootsrap</p>
                                <input type="range" min="0" max="100" value="70" disabled />
                                <span>70%</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
