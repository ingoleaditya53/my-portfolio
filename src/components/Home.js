import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm Rakesh Singh, a Front-End Developer specialized in React.js.</p>
        </div>
        <div className="image">
          <img src="./bg.png" alt="Rakesh Singh" />
        </div>
      </div>
    </div>
  );
}

export default Home;
