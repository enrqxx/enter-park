// src/app/masuk/page.tsx
'use client'; // Wajib untuk komponen yang menggunakan hooks

import { useState } from 'react';
import NFCReader from '@/components/NFCReader';
import CameraCapture from '@/components/CameraCapture';

export default function MasukPage() {
  const [paymentMethod, setPaymentMethod] = useState<'nfc' | 'ticket'>('nfc');

  const handleNFCRead = async (cardData: { uid: string }) => {
    try {
      const response = await fetch('/api/validasi', {
        method: 'POST',
        body: JSON.stringify({ card_id: cardData.uid })
      });

      if (response.ok) {
        console.log('Gate terbuka!');
        // methods
      }
    } catch (error) {
      console.error('Gagal validasi NFC:', error);
    }
  };

  const handlePrintTicket = (imageData: string) => {
    console.log('Cetak tiket dengan gambar:', imageData);
    // method
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Masuk Parkiran</h1>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPaymentMethod('nfc')}
          className={`px-4 py-2 rounded ${paymentMethod === 'nfc' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          NFC
        </button>
        <button
          onClick={() => setPaymentMethod('ticket')}
          className={`px-4 py-2 rounded ${paymentMethod === 'ticket' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Tiket
        </button>
      </div>

      {paymentMethod === 'nfc' ? (
        <NFCReader onRead={handleNFCRead} />
      ) : (
        <CameraCapture onCapture={handlePrintTicket} />
      )}
    </div>
  );
}