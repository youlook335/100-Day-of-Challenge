import React from 'react'
import "../Style/Skills.css"

const Skills = () => {
    return (
        <>
            <div className="contain">
                <div className="part1">
                    <h1>My Skills</h1>
                    <div className="Ranges">
                        <div class="range-container">
                            <div class="range-box">
                                <p>HTML</p>
                                <input type="range" min="0" max="100" value="30" disabled />
                                <span>30%</span>
                            </div>
                            <div class="range-box">
                                <p>CSS</p>
                                <input type="range" min="0" max="100" value="50" disabled />
                                <span>50%</span>
                            </div>
                            <div class="range-box">
                                <p>JavaScript</p>
                                <input type="range" min="0" max="100" value="80" disabled />
                                <span>80%</span>
                            </div>
                            <div class="range-box">
                                <p>JavaScript</p>
                                <input type="range" min="0" max="100" value="80" disabled />
                                <span>80%</span>
                            </div>
                            <div class="range-box">
                                <p>JavaScript</p>
                                <input type="range" min="0" max="100" value="80" disabled />
                                <span>80%</span>
                            </div>
                            <div class="range-box">
                                <p>JavaScript</p>
                                <input type="range" min="0" max="100" value="80" disabled />
                                <span>80%</span>
                            </div>
                            <div class="range-box">
                                <p>JavaScript</p>
                                <input type="range" min="0" max="100" value="80" disabled />
                                <span>80%</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
