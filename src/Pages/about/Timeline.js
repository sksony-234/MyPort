import React from 'react'
import styled from 'styled-components'
const Timeline = () => {
  return (
    <TimelineStyle>
      <div className="timeline-item">
        <div className="tl-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <p className="tl-duration">2019 - present</p>
        <h5>
          Web Developer <span> - Microsoft</span>
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo
          suscipit quisquam vero quas. Doloribus laudantium enim nostrum eos
          praesentium?
        </p>
      </div>
    </TimelineStyle>
  );
}

export default Timeline;

const TimelineStyle = styled.div`
  .timeline-item {
    position: relative;
    padding-left: 3rem;
    border-left: 1px solid var(--color-gray-5);
    .tl-icon {
      position: absolute;
      left: -27px;
      top: 0;
      background: var(--color-secondary);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 1.3rem;
      }
    }
    .tl-duration {
      padding: 0.2rem 0.6rem;
      background: var(--color-gray-5);
      border-radius: 15px;
      display: inline-block;
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: 500;
      margin-top: 0.6rem;
    }
    h5 {
      padding: 1rem 0;
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 600;
      span {
        color: var(--color-gray-2);
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
    p {
      color: var(--color-gray-2);
    }
  }
`;