import { useState } from "react";
import Button from "./Button";
import "../styles/FormStyles.css";

function SkillsForm({ skills, onSubmit }) {
  const [skillsInput, setSkillsInput] = useState(skills.join(","));

  const handleSubmit = (e) => {
    e.preventDefault();
    const skillsArr = skillsInput
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    onSubmit(skillsArr);
  };

  return (
    <form className="skillsForm" onSubmit={handleSubmit}>
      <h2>Skills</h2>
      <textarea
        value={skillsInput}
        onChange={(e) => setSkillsInput(e.target.value)}
        rows="4"
        placeholder="E.g, Problem Solving, Video Editing, React"
      ></textarea>
      <div className="form-btns">
        <Button type="submit">Save Skills</Button>
      </div>
    </form>
  );
}
export default SkillsForm;
