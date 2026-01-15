// Latihan buat komponen SkillList
function Skill() {
  const mySkill = ["React", "TailwindCss", "Laravel"];
  return (
    <>
      <h3>Skill yang dipelajari</h3>
      <ul>
        {mySkill.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Skill;
