import React from 'react'
import styled from 'styled-components';
import Typical from "react-typical";

const Home = () => {
  return (
    <HomeStyle>
          <div className="name">
                <h1>Hi I'm <span>Siddharth Sony</span>.</h1>
                <h1><Typical
                  steps={['A Full-Stack Developer', 3000, 'SoftWare Developer', 3000, 'Competetive Coder', 3000]}
                  loop={Infinity}
                  wrapper="p"
                />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem quidem assumenda tempore earum accusamus consequatur.
                    Sequi saepe cupiditate quis recusandae. Soluta asperiores dolor,
                    totam animi ut ullam doloribus in aperiam!
                </p>
            </div>
            <div className="btn-con">
                <a href="#" className="main-btn">
                    <span className="btn-text">DOWNLOAD CV</span>
                    <span className="btn-icon"><i className="fas fa-download"></i></span>
                </a>
            </div>
    </HomeStyle>
  )
}

export default Home;

const HomeStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 18rem;
    .name {
      font-size: 1.3rem;
      span {
        color: var(--color-secondary);
      }
      p {
        margin: 1.3rem 0rem;
        line-height: 2rem;
      }
    }

    .btn-con{
      display: flex;
    }
`;