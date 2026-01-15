// Tugas Latihan
function ProdukCard({ namaProduk, harga, stok }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h3>{namaProduk}</h3>
      <p>Harga: Rp{harga.toLocaleString()}</p>
      <p>{stok > 0 ? `(Tersedia ${stok})` : "Stok Habis"}</p>

      {/* Tombol hanya aktif jika stok tersedia */}
      <button disabled={stok === 0}>Beli Sekarang</button>
    </div>
  );
}

export default ProdukCard;
