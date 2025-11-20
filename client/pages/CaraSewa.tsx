import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Download,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CaraSewa() {
  const steps = [
    {
      number: "1",
      title: "Pilih Produk",
      description:
        "Jelajahi katalog produk kami dan pilih perlengkapan camping yang sesuai dengan kebutuhan Anda.",
      icon: <Search size={32} className="text-primary" />,
      details: [
        "Lihat detail lengkap produk",
        "Periksa stok ketersediaan",
        "Baca ulasan dari pengguna lain",
        "Bandingkan harga dan spesifikasi",
      ],
    },
    {
      number: "2",
      title: "Tentukan Tanggal & Durasi",
      description:
        "Pilih tanggal sewa dan pengembalian sesuai dengan jadwal petualangan Anda.",
      icon: <Calendar size={32} className="text-primary" />,
      details: [
        "Lihat ketersediaan real-time",
        "Tentukan waktu pengambilan",
        "Tentukan waktu pengembalian",
        "Kalkulasi total biaya otomatis",
      ],
    },
    {
      number: "3",
      title: "Pilih Metode Pembayaran",
      description:
        "Bayar dengan DP (Uang Muka) atau Full Payment melalui berbagai metode.",
      icon: <CreditCard size={32} className="text-primary" />,
      details: [
        "Transfer Bank (DP 30% / Full)",
        "E-Wallet (GCash, OVO, Dana, DANA)",
        "COD (Bayar saat pengambilan)",
        "Cicilan (untuk pesanan tertentu)",
      ],
    },
    {
      number: "4",
      title: "Verifikasi & Booking",
      description:
        "Sistem kami akan memverifikasi pembayaran dan mengkonfirmasi booking Anda.",
      icon: <CheckCircle size={32} className="text-primary" />,
      details: [
        "Upload bukti pembayaran/screenshot",
        "Verifikasi identitas (KTP/SIM)",
        "Konfirmasi status booking",
        "Terima notifikasi pengambilan",
      ],
    },
    {
      number: "5",
      title: "Ambil Barang",
      description:
        "Kunjungi lokasi kami untuk mengambil perlengkapan camping Anda.",
      icon: <MapPin size={32} className="text-primary" />,
      details: [
        "Datang pada waktu yang ditentukan",
        "Cek kondisi barang saat pengambilan",
        "Dapatkan kwitansi & invoice",
        "Dapatkan panduan penggunaan barang",
      ],
    },
    {
      number: "6",
      title: "Nikmati & Kembalikan",
      description:
        "Nikmati petualangan Anda dan kembalikan barang sesuai jadwal.",
      icon: <Clock size={32} className="text-primary" />,
      details: [
        "Jaga kondisi barang saat dipakai",
        "Kembalikan tepat waktu sesuai jadwal",
        "Kembalikan dalam kondisi bersih",
        "Dapatkan refund jika DP (jika full payment)",
      ],
    },
  ];

  const paymentMethods = [
    {
      name: "Transfer Bank",
      description: "Transfer langsung ke rekening OutdoorCamp",
      icon: "🏦",
      details: [
        "BCA: 1234567890 a.n. OutdoorCamp",
        "BNI: 0987654321 a.n. OutdoorCamp",
        "Mandiri: 1122334455 a.n. OutdoorCamp",
      ],
    },
    {
      name: "E-Wallet",
      description: "Pembayaran instan melalui e-wallet",
      icon: "📱",
      details: [
        "GCash: 09XX-XXX-XXXX",
        "OVO: +62 812-3456-7890",
        "Dana: +62 812-3456-7890",
      ],
    },
    {
      name: "COD",
      description: "Bayar saat pengambilan di lokasi kami",
      icon: "💵",
      details: [
        "Bayar tunai atau transfer",
        "Tanpa biaya tambahan",
        "Proses cepat",
      ],
    },
    {
      name: "Cicilan",
      description: "Cicilan tanpa bunga untuk pesanan tertentu",
      icon: "📊",
      details: [
        "Tersedia untuk pembelian >Rp 1 juta",
        "Cicilan 3-6 bulan",
        "Syarat & ketentuan berlaku",
      ],
    },
  ];

  const faqs = [
    {
      q: "Berapa lama maksimal sewa?",
      a: "Durasi sewa dapat disesuaikan dengan kebutuhan Anda, mulai dari 1 hari hingga berbulan-bulan. Untuk sewa jangka panjang (>30 hari), hubungi customer service untuk mendapatkan harga khusus.",
    },
    {
      q: "Apa yang terjadi jika barang hilang atau rusak?",
      a: "Sesuai syarat & ketentuan, penyewa bertanggung jawab penuh atas barang yang disewa. Biaya penggantian akan dibebankan kepada penyewa jika ada kerusakan atau kehilangan.",
    },
    {
      q: "Apakah ada asuransi untuk barang yang disewa?",
      a: "Kami menyediakan asuransi opsional yang dapat Anda pilih saat booking. Asuransi melindungi dari kerusakan dan kehilangan dengan premi 5-10% dari harga sewa.",
    },
    {
      q: "Bagaimana jika saya terlambat mengembalikan?",
      a: "Denda keterlambatan adalah Rp 50.000 per jam atau Rp 500.000 per hari. Jika terlambat lebih dari 24 jam tanpa pemberitahuan, kami akan menganggap barang hilang dan mengenakan biaya penuh.",
    },
    {
      q: "Bisa ganti atau cancel booking?",
      a: "Pembatalan gratis jika dilakukan 7 hari sebelum tanggal sewa. Jika pembatalan 3-7 hari sebelumnya, dikenakan biaya 25%. Pembatalan <3 hari tidak dapat refund.",
    },
    {
      q: "Apa persyaratan untuk sewa?",
      a: "Anda harus berusia minimal 18 tahun, memiliki identitas sah (KTP/SIM), dan melakukan verifikasi identitas. Untuk penyewa pertama kali, kami mungkin meminta jaminan tambahan.",
    },
  ];

  const requirements = [
    { title: "Usia Minimal", desc: "18 tahun ke atas" },
    { title: "Identitas Sah", desc: "KTP, SIM, atau Paspor" },
    { title: "Kontak Valid", desc: "Nomor HP dan Email aktif" },
    { title: "DP/Pembayaran", desc: "Minimal 30% atau Full Payment" },
    { title: "Verifikasi", desc: "Verifikasi identitas dan data" },
    { title: "Jaminan", desc: "Untuk penyewa pertama kali" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Cara Sewa</h1>
          <p className="text-green-100">
            Panduan lengkap cara menyewa perlengkapan camping di OutdoorCamp
          </p>
        </div>
      </section>

      <div className="flex-1">
        {/* Step-by-Step Guide */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">6 Langkah Mudah Menyewa</h2>
            <p className="section-subheading">
              Proses sewa kami dirancang untuk kemudahan dan kecepatan Anda
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                    {/* Left - Step Number & Icon */}
                    <div className="flex flex-col items-center md:items-start">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        {step.number}
                      </div>
                      {step.icon}
                    </div>

                    {/* Center - Title & Description */}
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      {/* Details List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle
                              size={18}
                              className="text-green-600 flex-shrink-0"
                            />
                            <span className="text-sm text-gray-700">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-heading">Metode Pembayaran</h2>
            <p className="section-subheading">
              Berbagai pilihan pembayaran untuk kemudahan Anda
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{method.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Persyaratan Penyewaan</h2>
            <p className="section-subheading">
              Syarat & ketentuan yang perlu dipenuhi untuk menyewa
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-l-4 border-primary"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{req.title}</h3>
                  <p className="text-gray-600">{req.desc}</p>
                </div>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <div className="flex gap-4">
                <AlertCircle
                  size={24}
                  className="text-blue-600 flex-shrink-0 mt-1"
                />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">
                    Perhatian Penting
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Penyewa harus melakukan verifikasi identitas yang valid
                    sebelum booking dapat disetujui. Setiap data yang diberikan
                    harus akurat dan sesuai dengan identitas asli. Pemberian
                    data palsu dapat mengakibatkan pembatalan pemesanan dan
                    blacklist dari layanan kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-heading">Pertanyaan Umum (FAQ)</h2>
            <p className="section-subheading">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-green-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap untuk Memulai?
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Jelajahi katalog produk kami dan mulai pesan perlengkapan camping
              favorit Anda sekarang.
            </p>
            <Link
              to="/katalog"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Lihat Katalog Produk
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Butuh Bantuan?</h2>
            <p className="section-subheading">
              Hubungi customer service kami untuk pertanyaan lebih lanjut
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Phone size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Telepon</h3>
                <p className="text-gray-600">+62 812-3456-7890</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Mail size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">info@outdoorcamp.id</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <MapPin size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Lokasi</h3>
                <p className="text-gray-600">Jl. Outdoor No. 123, Jakarta</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
