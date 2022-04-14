import React from 'react'
import styled from 'styled-components';
import img1 from './images/port1.png';
import img2 from './images/port2.png';
import img3 from './images/port3.png';
import img4 from './images/port4.png';
import img5 from './images/port5.png';
import img6 from './images/port6.png';

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
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img1} alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img2} alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img4} alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img3} alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img6} alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img5} alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
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
    .portfolio-item {
      position: relative;
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 15px;
      }
      .hover-item {
        height: 100%;
        width: 100%;
        background: var(--color-secondary);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transform: scale(0);
        transition: all 0.4s ease-in-out;
        h3 {
          font-size: 1.5rem;
          color: var(--color-white);
          margin-bottom: 1.5rem;
        }
        .icons {
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            background: var(--color-primary);
            height: 50px;
            width: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 1rem;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            i {
              font-size: 1.5rem;
              color: var(--color-white);
              margin: 0 1rem;
            }
            &:hover {
              background-color: var(--color-white);
              i {
                color: var(--color-primary);
              }
            }
          }
        }
      }
    }
  }

  .portfolio-item:hover .hover-item {
    opacity: 1;
    transform: scale(1);
  }
`;