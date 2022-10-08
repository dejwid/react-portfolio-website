import {useEffect, useState} from "react";

export default function Skills() {
  const [extraClasses,setExtraClasses] = useState('');
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box"><img src="/img/js.png" alt=""/><span>Javascript</span></div>
          <div className="skill-box"><img src="/img/html-5.png" alt=""/><span>HTML</span></div>
          <div className="skill-box"><img src="/img/css-3.png" alt=""/><span>CSS</span></div>
          <div className="skill-box"><img src="/img/database.png" alt=""/><span>MongoDB</span></div>
          <div className="skill-box"><img src="/img/database.png" alt=""/><span>MongoDB</span></div>
          <div className="skill-box"><img src="/img/js.png" alt=""/><span>Javascript</span></div>
          <div className="skill-box"><img src="/img/html-5.png" alt=""/><span>HTML</span></div>
          <div className="skill-box"><img src="/img/css-3.png" alt=""/><span>CSS</span></div>
        </div>
      </div>
    </section>
  );
}