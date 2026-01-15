function MainContent() {
  return (
    <main>
      <h2>Selamat datang!!!</h2>
      <p>
        Saya sedang belajar <strong>React</strong> dari pemula sampai mahir.
        Hari ini saya belajar tentang komponen
      </p>
      <button onClick={() => alert("Semangat!!!")}>
        Pelajari Lebih Lanjut
      </button>
    </main>
  );
}

export default MainContent;
