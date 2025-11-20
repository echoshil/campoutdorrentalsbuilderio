import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Copy,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone size={32} className="text-primary" />,
      title: "Telepon",
      value: "+62 812-3456-7890",
      action: "tel:+628123456789",
      actionText: "Hubungi Kami",
    },
    {
      icon: <Mail size={32} className="text-primary" />,
      title: "Email",
      value: "info@outdoorcamp.id",
      action: "mailto:info@outdoorcamp.id",
      actionText: "Kirim Email",
    },
    {
      icon: <MessageCircle size={32} className="text-primary" />,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      action: "https://wa.me/628123456789?text=Halo%20OutdoorCamp",
      actionText: "Chat WhatsApp",
    },
    {
      icon: <MapPin size={32} className="text-primary" />,
      title: "Lokasi",
      value: "Jl. Outdoor No. 123, Jakarta Timur",
      action: "https://maps.google.com",
      actionText: "Lihat di Maps",
    },
  ];

  const operationalHours = [
    { day: "Senin", hours: "08:00 - 18:00 WIB" },
    { day: "Selasa", hours: "08:00 - 18:00 WIB" },
    { day: "Rabu", hours: "08:00 - 18:00 WIB" },
    { day: "Kamis", hours: "08:00 - 18:00 WIB" },
    { day: "Jumat", hours: "08:00 - 18:00 WIB" },
    { day: "Sabtu", hours: "08:00 - 19:00 WIB" },
    { day: "Minggu", hours: "09:00 - 17:00 WIB" },
  ];

  const faqTopics = [
    {
      title: "Pesanan & Pembayaran",
      icon: "💳",
      questions: [
        "Bagaimana cara melakukan pemesanan?",
        "Metode pembayaran apa saja yang tersedia?",
        "Apakah bisa cicilan?",
        "Berapa lama proses verifikasi?",
      ],
    },
    {
      title: "Pengambilan & Pengembalian",
      icon: "🚚",
      questions: [
        "Dimana lokasi pengambilan barang?",
        "Apakah ada layanan antar?",
        "Apa yang terjadi jika terlambat mengembalikan?",
        "Bagaimana jika barang hilang?",
      ],
    },
    {
      title: "Produk & Peralatan",
      icon: "🏕️",
      questions: [
        "Apa saja produk yang tersedia?",
        "Bagaimana kondisi peralatan?",
        "Apakah ada garansi untuk kerusakan?",
        "Bisa customize paket sendiri?",
      ],
    },
    {
      title: "Lainnya",
      icon: "❓",
      questions: [
        "Apakah ada diskon untuk group?",
        "Bagaimana jika ada pertanyaan khusus?",
        "Apakah bisa disewa untuk acara corporate?",
        "Bagaimana data pribadi saya dijaga?",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Hubungi Kami</h1>
          <p className="text-green-100">
            Tim kami siap membantu menjawab pertanyaan dan kebutuhan Anda
          </p>
        </div>
      </section>

      <div className="flex-1">
        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Cara Menghubungi Kami</h2>
            <p className="section-subheading">
              Pilih cara yang paling nyaman untuk Anda
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-600 mb-4">{info.value}</p>
                  <a
                    href={info.action}
                    target={
                      info.action.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      info.action.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-block w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {info.actionText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>

                {submitted && (
                  <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    ✓ Terima kasih! Pesan Anda telah terkirim. Tim kami akan
                    segera merespons.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+62 812-3456-7890"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subjek
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Pilih Subjek</option>
                      <option value="Pertanyaan Produk">Pertanyaan Produk</option>
                      <option value="Booking">Booking</option>
                      <option value="Komplain">Komplain</option>
                      <option value="Saran">Saran</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Kirim Pesan
                  </button>
                </form>
              </div>

              {/* Info & Hours */}
              <div className="space-y-8">
                {/* Operational Hours */}
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock size={24} className="text-primary" />
                    Jam Operasional
                  </h3>
                  <div className="space-y-2">
                    {operationalHours.map((item) => (
                      <div key={item.day} className="flex justify-between">
                        <span className="font-semibold text-gray-700">
                          {item.day}
                        </span>
                        <span className="text-gray-600">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Respons Cepat</h3>
                  <p className="text-gray-600 mb-4">
                    Hubungi kami via WhatsApp untuk respons yang lebih cepat dan
                    chatting langsung dengan tim support kami.
                  </p>
                  <a
                    href="https://wa.me/628123456789?text=Halo%20OutdoorCamp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors text-center"
                  >
                    💬 Chat WhatsApp Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ by Category */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Kategori Pertanyaan Umum</h2>
            <p className="section-subheading">
              Cari jawaban untuk pertanyaan Anda di sini
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faqTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-lg font-bold mb-4">{topic.title}</h3>
                  <ul className="space-y-2">
                    {topic.questions.map((q, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Tidak menemukan jawaban yang Anda cari?
              </p>
              <button className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors">
                Lihat Semua FAQ
              </button>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-heading">Lokasi Kami</h2>
            <p className="section-subheading">
              Kunjungi toko kami untuk konsultasi langsung dan pengambilan barang
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="bg-gray-300 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="font-semibold">
                    Google Maps akan tampil di sini
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mt-2 inline-block"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>

              {/* Address Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <MapPin size={24} className="text-primary" />
                    Alamat
                  </h3>
                  <p className="text-gray-600 text-lg font-semibold mb-2">
                    OutdoorCamp Store
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Outdoor No. 123<br />
                    Jakarta Timur, 13320<br />
                    Indonesia
                  </p>

                  <button
                    className="mt-4 w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "Jl. Outdoor No. 123, Jakarta Timur"
                      );
                      alert("Alamat disalin ke clipboard");
                    }}
                  >
                    <Copy size={18} />
                    Salin Alamat
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Petunjuk Arah</h3>
                  <p className="text-gray-600 mb-4">
                    Lokasi kami mudah diakses dari berbagai area:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 500m dari Stasiun Jakarta Timur</li>
                    <li>• Dekat dengan Halte Busway Pondok Kopi</li>
                    <li>• Parkir gratis untuk pengunjung</li>
                    <li>• Akses mudah dari Jl. Raya Bekasi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-green-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sudah Siap untuk Petualangan?
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Hubungi kami sekarang dan mulai persiapkan liburan camping impian Anda bersama OutdoorCamp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Chat WhatsApp
              </a>
              <a
                href="tel:+628123456789"
                className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                Telepon Kami
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
