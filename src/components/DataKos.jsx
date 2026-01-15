// Pakai teknik destructuring props
// Cara paling bersih

function Kost({ nama, asal }) {
  return (
    <div
      style={{ border: "1px solid #8c6c6c", margin: "10px", padding: "10px" }}
    >
      <h2>Data Kos:</h2>
      <ul>
        <li>Nama: {nama}</li>
        <li>Asal: {asal}</li>
      </ul>
    </div>
  );
}

export default Kost;
