import React from "react";
import "./index.scss"

const Skill = ({ skills }) => {
    return skills.map(item => (
        <div className="skills">
            <div>{item.name}</div>
            <div>
                <progress value={item.value} max="100"></progress>
            </div>
        </div>))
}

export default Skill




