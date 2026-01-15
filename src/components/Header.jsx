function Header() {
  return (
    <header
      style={{ backgroundColor: "#3672eb", padding: "10px", color: "white" }}
    >
      <h1>My Portofolio</h1>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            listStyle: "none",
          }}
        >
          <li>
            <a style={{ color: "white" }} href="#">
              Home
            </a>
          </li>
          <li>
            <a style={{ color: "white" }} href="#">
              About
            </a>
          </li>
          <li>
            <a style={{ color: "white" }} href="#">
              Proyek
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; // Agar bisa dipakai/panggil di file lain
