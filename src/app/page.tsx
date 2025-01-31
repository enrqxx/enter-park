// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Selamat Datang di
        </h1>
        <div className="text-3xl font-semibold text-blue-600 mb-8">
          Parkir ASRI
        </div>

        {/* Logo/Illustration */}
        <div className="mb-12">
          <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
            <span className="text-5xl">🅿️</span>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="space-y-6">
          <Link 
            href="/masuk"
            className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Masuk Parkir
            </h2>
            <p className="text-gray-600">Tap kartu atau ambil tiket</p>
          </Link>

          <Link
            href="/keluar"
            className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-2">
              Keluar Parkir
            </h2>
            <p className="text-gray-600">Bayar dengan e-money atau tunai</p>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>Jam Operasional: 24/7</p>
          <p className="mt-2">Tarif: Rp5,000/jam (Maks Rp50,000/hari)</p>
        </div>
      </div>
    </main>
  );
}