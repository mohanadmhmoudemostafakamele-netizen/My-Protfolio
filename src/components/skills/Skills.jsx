import React from 'react'
import './skills.css'
import CSS from '../../assets/css3.svg'

import Python from '../../assets/python.svg'

import PHP from '../../assets/php.svg'

import CPP from '../../assets/cpp.svg'


import Javascript from '../../assets/javascript.svg';

import Nodejs from '../../assets/nodejs.svg';

import ReactJS from '../../assets/react.svg';

import Tailwind from '../../assets/tailwindcss.svg';



function Skills() {

const SkillsData = [
    { id: 1, image: CSS, title: 'CSS', disc: "User Interface" },
    { id: 2, image: Javascript, title: 'JavaScript', disc: 'frontend' },
    { id: 3, image: ReactJS, title: 'React', disc: 'Framework' },
    { id: 4, image: Tailwind, title: 'TailwindCSS', disc: 'User Interface' },
    { id: 5, image: Python, title: 'Python', disc: 'Ai' },
    { id: 6, image: PHP, title: 'PHP', disc: 'Backend' },
    { id: 7, image: CPP, title: 'C++', disc: 'System Programming' },
    { id: 8, image: Nodejs, title: 'NodeJS', disc: 'Web Server' }
  ];




  return (
    <section className='skills' id="skills" >

      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container_skills">

{SkillsData.map(({ id, image, title, disc }) => (
    <article key={id} className="card_skill">
        <div className="icon">
            <img src={image} alt={title} />
        </div>

        <div className="content">
            <h4>{title}</h4>
            <p className='text-light'>{disc}</p>
        </div>
    </article>
))}

 








      </div>

    </section>
  )
}

export default Skills