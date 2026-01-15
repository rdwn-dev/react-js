import "./App.css";

function App() {
  const namaApp = "Proyek react pertama saya";
  const user = {
    nama: "Ridwan",
    umur: 20,
    posisi: "Web Dev",
  };

  return (
    <>
      <h1>Selamat datang di {namaApp}</h1>
      <p>
        Hai, Saya <strong>{user.nama}</strong>
      </p>
      <p>
        Saya berumur <strong>{user.umur}</strong> tahun
      </p>
      <p>
        Saya bekerja sebagai <strong>{user.posisi}</strong>
      </p>

      <button onClick={() => alert("Semangat Belajar!!!")}>Klik Saya</button>
    </>
  );
}

export default App;
