import React from 'react'
import styled from 'styled-components'

const AbtItem = () => {
  return (
    <AbtStyle>
      <div className="about-item">
        <div className="abt-text">
          <p className="large-text">560+</p>
          <p className="small-text">Project <br />Completed</p>
        </div>
      </div>
    </AbtStyle>
  );
}

export default AbtItem;

const AbtStyle = styled.div`
  .about-item {
    border: 1px solid var(--color-gray-5);
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: default;
      transform: translateY(-5px);
      border: 1px solid var(--color-secondary);
      box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
    }
    .abt-text {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      .large-text {
        font-size: 3rem;
        font-weight: 700;
        color: var(--color-secondary);
      }
      .small-text {
        font-size: 1.2rem;
        position: relative;
        padding-left: 3rem;
        text-transform: uppercase;
        color: var(--color-gray-1);
        letter-spacing: 2px;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 15px;
          width: 2rem;
          height: 2px;
          background: var(--color-gray-5);
        }
      }
    }
  }
`;