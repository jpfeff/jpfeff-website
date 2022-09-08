import React from 'react';

function ProjectCard(props) {
  // const role = props.text;

  return (
    <a href={props.href} className="project-card">
      <h4 className="project-title">{props.title}</h4>
      <p className="project-desc">{props.desc}</p>
    </a>
  );
}

export default ProjectCard;
