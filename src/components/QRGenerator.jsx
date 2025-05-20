import QRCode from "react-qr-code";
export default function QRGenerator({ data }) {
  return (
    <div>
      <h3>QR Code Absensi:</h3>
      <QRCode value={data} size={256} />
    </div>
  );
}
