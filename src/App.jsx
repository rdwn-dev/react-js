import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Skill from "./components/SkillList";

function App() {
  return (
    <>
      {/* Panggil komponen header */}
      <Header />
      {/* Panggil komponen MainContent */}
      <MainContent />
      <Skill />

      <footer style={{ textAlign: "center", marginTop: "50px" }}>
        <p>© 2024 Coding Partner Learning</p>
      </footer>
    </>
  );
}

export default App;
