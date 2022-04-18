import React from 'react';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';
import img1 from '../images/port1.png';
import img2 from '../images/port2.png';
import img3 from '../images/port3.png';
import img4 from '../images/port4.png';
import img5 from '../images/port5.png';
import img6 from '../images/port6.png';

const Project = () => {
  return (
    <ProjectStyles>
      <div className="main-title">
                <h2>My <span>Projects</span><span className="bg-text">My Work</span></h2>
            </div>
            <p className="port-text">
                Here is some of my work that I've done in various programming
                languages.
            </p>
            <div className="portfolios">
                <ProjectItem img = {img1}/>
                <ProjectItem img = {img2}/>
                <ProjectItem img = {img3}/>
                <ProjectItem img = {img4}/>
                <ProjectItem img = {img5}/>
                <ProjectItem img = {img6}/>
            </div>
    </ProjectStyles>
  );
}

export default Project;

const ProjectStyles = styled.section`
  .port-text {
    padding: 1.5rem 0;
    text-align: center;
  }
  .portfolios {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
  }
`;