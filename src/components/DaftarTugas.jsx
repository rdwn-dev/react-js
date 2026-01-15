// Rendering List
function DaftarTugas() {
  const daftarTugas = [
    { id: 1, teks: "Makan", status: "Selesai" },
    { id: 2, teks: "Kerja", status: "Sedang Dilakukan" },
    { id: 3, teks: "Workout", status: "Belum Selesai" },
  ];
  return (
    <div>
      <h2>My Task List</h2>
      <ol>
        {daftarTugas.map((tugas) => (
          <li key={tugas.id}>
            <strong>{tugas.teks}</strong> - {tugas.status}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DaftarTugas;
