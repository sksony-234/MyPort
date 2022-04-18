import React from 'react'
import styled from 'styled-components'
import AbtItem from './AbtItem';
import Progress from './Progress';
import Timeline from './Timeline';

const About = () => {
  return (
    <AboutStyle>
      <div className="main-title">
                <h2>About <span>Me </span><span className="bg-text">My Status</span></h2>
            </div>
            <div className="about-contaier">
                <div className="left-about">
                    <h4>Information About me</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate laborum consequatur beatae corporis quas eveniet quod
                        itaque quia quo laboriosam non rerum reprehenderit optio
                        blanditiis unde tenetur iste, cumque recusandae? Lorem ipsum dolor
                        sit, amet consectetur adipisicing elit. Nobis, laborum.
                    </p>
                    <div className="btn-con">
                        <a href="#" className="main-btn">
                            <span className="btn-text">DOWNLOAD CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <AbtItem/>
                    <AbtItem/>
                    <AbtItem/>
                    <AbtItem/>
                </div>
            </div>

            {/* About Status */}
            <div className="about-status">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <Progress/>
                    <Progress/>
                    <Progress/>
                    <Progress/>
                    <Progress/>
                    <Progress/>
                </div>
            </div>

            {/* <!-- timeLine --> */}
            <div className="stat-title">TimeLine</div>
            <div className="timeline">
                <Timeline/>
                <Timeline/>
                <Timeline/>
                <Timeline/>
                <Timeline/>
            </div>
    </AboutStyle>
  );
}

export default About;

const AboutStyle = styled.section`
  .about-contaier {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3.5rem;
    padding-bottom: 5rem;
    .right-about {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem; 
    }

    .left-about {
      padding-right: 3rem;
      p {
        line-height: 2rem;
        padding: 1rem;
        color: var(--color-gray-1);
      }
      h4 {
        font-size: 1.5rem;
        text-transform: uppercase;
      }
    }
  }

  .about-status {
    padding-bottom: 4rem;
    .progress-bars {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3rem;
    }
  }
  .stat-title {
    text-align: center;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 3.5rem 0;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      background-color: var(--color-gray-5);
      width: 40%;
      height: 1px;
      transform: translateX(-50%);
    }
  }

  // Timeline
  .timeline {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding-bottom: 2rem;
  }
`;