// components/NFCReader.js
import { useEffect } from "react";

export default function NFCReader({ onRead }) {
  useEffect(() => {
    const readNFC = async () => {
      try {
        const reader = new NDEFReader();
        await reader.scan();

        reader.onreading = (event) => {
          const message = event.message;
          const record = message.records[0];
          const textDecoder = new TextDecoder();
          const data = textDecoder.decode(record.data);

          onRead({
            uid: event.serialNumber,
            data: data,
          });
        };
      } catch (error) {
        console.error("Error accessing NFC:", error);
      }
    };

    readNFC();
  }, [onRead]);

  return (
    <div className="nfc-reader">
      <p>Tempelkan Kartu NFC/NFC Phone Anda</p>
    </div>
  );
}
