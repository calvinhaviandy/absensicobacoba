import QRGenerator from "../components/QRGenerator";

export default function DashboardGuru() {
  const qrData = "mapel:Matematika|kelas:XII-RPL|timestamp:" + Date.now();

  return (
    <div>
      <h2>Dashboard Guru</h2>
      <QRGenerator data={qrData} />
    </div>
  );
}
