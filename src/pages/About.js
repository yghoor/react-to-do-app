import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = ({ aboutData }) => {
  return (
    <div className="about__content">
      <ul className="about__list">
        {aboutData.map((data) => (
          <li key={data.slug}>
            <Link to={data.slug}>{data.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};
export default About;
