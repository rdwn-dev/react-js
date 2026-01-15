function Mahasiswa(props) {
  return (
    <div
      style={{ border: "1px solid #8c6c6c", margin: "10px", padding: "10px" }}
    >
      <h2>Data Mahasiswa: </h2>
      <ul>
        <li>Nama: {props.nama}</li>
        <li>Nim: {props.nim}</li>
        <li>Jurusan: {props.jurusan}</li>
        <li>Prodi: {props.prodi}</li>
      </ul>
    </div>
  );
}

export default Mahasiswa;
