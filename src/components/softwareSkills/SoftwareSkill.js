import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                  {skills && skills.fontAwesomeClassname ? <i className={skills.fontAwesomeClassname}></i> : <img alt="Aditya Skils" src={skills.image} width={skills.size}></img>}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
