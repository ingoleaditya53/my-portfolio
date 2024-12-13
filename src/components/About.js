import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Junior, a Software Developer based in Buenos Aires, Argentina. 
            <span className="about-text-span">¡Hola! Soy Junior, un Desarrollador de Software basado en Buenos Aires, Argentina.</span>
          </p>
          <p>
            I enjoy creating beautiful and reliable applications for the internet and phones. My goal is to always build scalable products and performant experiences. 
            <span className="about-text-span">Disfruto creando aplicaciones hermosas y confiables para internet y teléfonos. Mi objetivo es siempre construir productos escalables y experiencias de alto rendimiento.</span>
          </p>
        </div>
        <h3>Technologies I've been working with recently:</h3>
        <div className="about-box">
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React Native</li>
            <li>React</li>
            <li>Next.js</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
