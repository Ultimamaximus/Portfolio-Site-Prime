import React from 'react';
import './TechSkills.css';

const TechSkills = () => {
  const skills = [
    ['JavaScript', 'Vuex', 'Git/SVN/CVS V.C. Software', 'Yarn/Grunt/Gulp/Webpack'],
    ['Angular JS', 'Pinia', 'Agile Methodologies', 'NodeJS'],
    ['React', 'NuxtJS', 'Design Systems', 'MongoDB'],
    ['VueJS', 'Serverless', 'CSS3/Less/Sass', 'Java'],
    ['Vue3', 'HTML5', 'Grid/Flex', 'Oracle/SQL Server']
  ];

  return (
    <div className="tech-skills-container">
      <h2 className="tech-skills-title">01&nbsp;&nbsp;Software skills</h2>
      <div className="tech-skills-list">
        {skills.map((column, index) => (
          <ul key={index} className="tech-skills-column">
            {column.map((skill, i) => (
              <li key={i} className="tech-skill-item">{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
