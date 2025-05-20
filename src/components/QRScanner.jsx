import { Html5QrcodeScanner } from "html5-qrcode";
import { use, useEffect } from "react";

export default function QRScanner({ onScanSuccess }) {
    useEffect(() => {
        const scanner =  new Html5QrcodeScanner(
            "qr-reader",
            { fps: 10, qrbox: 250 });
            scanner.render(onScanSuccess);
        return () => scanner.clear();
    }, [onScanSuccess]);
    return <div id="qr-reader" style={{ width: "100%" }} />;
    }