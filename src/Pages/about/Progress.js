import React from 'react'
import styled from 'styled-components';

const Progress = () => {
  return (
    <ProgStyle>
      <div className="progress-bar">
        <p className="prog-title">Html5</p>
        <div className="progress-con">
          <p className="pro text">90%</p>
          <div className="progress">
            <span className="html"></span>
          </div>
        </div>
      </div>
    </ProgStyle>
  );
}

export default Progress;

const ProgStyle = styled.div`
  .progress-bar {
    display: flex;
    flex-direction: column;
    .prog-title {
      text-transform: uppercase;
      font-weight: 500;
    }
    .progress-con {
      display: flex;
      align-items: center;
      .pro-text {
        color: var(--color-gray-2);
      }
      .progress {
        width: 100%;
        height: 0.45rem;
        background-color: var(--color-gray-4);
        margin-left: 1rem;
        position: relative;
        span {
          position: absolute;
          left: 0;
          top: 0;
          transition: 0.4s ease-in-out;
          height: 100%;
          width: 60%;
          background-color: var(--color-secondary);
        }
      }
    }
  }

`;