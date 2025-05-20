import QRCode from "react-qr-code";

export default function QRGenerator({ data }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}>
      <h3>QR Code Absensi:</h3>
      <QRCode value={data} size={300} />
    </div>
  );
}
