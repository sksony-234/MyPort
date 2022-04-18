import React from 'react'
import styled from 'styled-components';

const ProjectItem = (props) => {
  return (
    <ItemStyle>
      <div className="portfolio-item">
        <div className="image">
          <img src={props.img} alt="" />
        </div>
        <div className="hover-item">
          <h3>Project Source</h3>
          <div className="icons">
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </ItemStyle>
  );
}

export default ProjectItem;

const ItemStyle = styled.div`
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

  .portfolio-item:hover .hover-item {
    opacity: 1;
    transform: scale(1);
  }
`;