import React from 'react'
import "../Style/Experience.css"

const Experience = () => {
  return (
    <>
      <div className="part_1">
        <h1 className='exp'>My Experience</h1>
        <div className="mean">
          <div className="part11">
            <div className="projects">
            <h1 className='intern'>Internship in Skytech</h1>
            <h3 className='why'>Fronted Developer Internship</h3>
            <p className='intern_date'>Dec 2024 - Feb 2025</p>
              <h4 className='intern_intro'>Developed 3 projects during my internship at Skytech, gaining hands-on experience in React, Tailwind CSS, and Bootstrap.
              </h4>
              <div className="last_pro">
                <p className='intro'><b>Sky Mart : </b>An e-commerce platform built using React and Tailwind CSS.</p>
                <p className='intro'><b>Apartment Management System : </b> A web application for managing apartment rentals.</p>
                <p className='intro'><b>Skytech Company Website : </b> A responsive portfolio website for Skytech.</p>
              </div>

            </div>
            <div className="projects_1">
              <h1 className='intern'>Bootpress Project</h1>
              <h3 className='why'>Frontend Developer</h3>
              <p className='intern_date'>Feb 2025 - March 2025</p>
              <div className="last_pro_1">
                <h4 className='intern_intro'>Developed an AI-powered web application using React, Tailwind CSS, and Firebase Authentication.</h4>
                <p className='intro'><b>Bootpress AI Platform : </b>An AI-integrated web application that allows users to interact with AI-generated content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience;