import QRScanner from "../components/QRScanner";

export default function DashboardSiswa() {
  const handleScan = (decodedText) => {
    console.log("QR Data:", decodedText);
    // Simpan ke Firestore sebagai kehadiran siswa
  };

  return (
    <div>
      <h2>Absensi Siswa</h2>
      <QRScanner onScanSuccess={handleScan} />
    </div>
  );
}
