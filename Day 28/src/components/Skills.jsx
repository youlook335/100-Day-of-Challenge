import React from 'react'
import "../Style/Skills.css"

const Skills = () => {
    return (
        <>
            <div className="contain">
                <div className="part1">
                    <h1>My Skills</h1>
                    <div class="range-box">
                        <input type="range" min="0" max="100" value="70" disabled />
                        <span>70%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
