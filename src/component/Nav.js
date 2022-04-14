import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/Mypic.jpg";

const Navigation = () => {
  return (
    <NavStyle>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <footer className="footer">
        <p>@2022 All right reserved.</p>
      </footer>
    </NavStyle>
  );
};

export default Navigation;

const NavStyle = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    height: 200px;
    width: 200px;
    box-shadow: 1px 2px 5px rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    img {
      width: 190px;
      height: 190px;
      border-radius: 50%;
      transition: all 0.4s ease-in-out;
      &:hover {
        width: 200px;
        height: 200px;
      }
    }
  }

  .nav-items {
    .active {
      background-color: var(--color-secondary);
      color: var(--color-white);
    }
    width: 100%;
    li {
      display: block;
      a {
        width: 100%;
        position: relative;
        padding: 0.6rem;
        font-size: 1.2rem;
        display: block;
        text-align: center;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: var(--color-secondary);
          transition: all 0.4s cubic-bezier(0.53, 0.25, 0.69, 0.85);
          opacity: 0.21;
        }
      }
      a:hover::before {
        width: 100%;
      }
    }
  }

  footer {
    width: 100%;
    display: block;
    text-align: center;
    border-top: 1px solid var(--border-color);
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
    }
  }
`;
