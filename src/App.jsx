import "./App.css";
import Mahasiswa from "./components/Mahasiswa";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Skill from "./components/SkillList";
import Kost from "./components/DataKos";
import ProdukCard from "./components/ProdukCard";

function App() {
  return (
    <>
      {/* Panggil komponen header */}
      <Header />
      {/* Panggil komponen MainContent */}
      <MainContent />
      {/* Panggil komponen Skill */}
      <Skill />
      {/* Panggil komponen Mahasiswa */}
      {/* Mengirim data melalui atribut */}
      <Mahasiswa
        nama="Ridwan"
        nim="20190140125"
        jurusan="Teknik"
        prodi="Teknologi Informasi"
      />

      {/* Panggil komponen Kost */}
      <Kost nama="Steven" asal="Pekaalongan" />

      {/* Panggil komponen ProdukCard */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <ProdukCard namaProduk="Laptop Gaming" harga={16000000} stok={5} />
        <ProdukCard namaProduk="Laptop Asus" harga={8000000} stok={0} />
      </div>

      <footer style={{ textAlign: "center", marginTop: "50px" }}>
        <p>© 2024 Coding Partner Learning</p>
      </footer>
    </>
  );
}

export default App;
