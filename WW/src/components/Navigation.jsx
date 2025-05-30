import React from 'react';
import '../index.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="/">Басты бет</a></li>
        <li><a href="/about">Біз туралы</a></li>
        <li><a href="/contact">Байланыс</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;