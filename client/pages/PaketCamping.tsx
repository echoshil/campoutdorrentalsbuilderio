import { Link } from "react-router-dom";
import { Check, Users, MapPin, ArrowRight, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Package {
  id: number;
  name: string;
  icon: string;
  capacity: string;
  description: string;
  price: number;
  duration: string;
  included: string[];
  suitable: string[];
  highlight?: string;
}

export default function PaketCamping() {
  const packages: Package[] = [
    {
      id: 1,
      name: "Paket Couple",
      icon: "👫",
      capacity: "2 Orang",
      description:
        "Paket sempurna untuk honeymoon atau liburan romantis berdua di alam terbuka.",
      price: 450000,
      duration: "3 Hari & 2 Malam",
      included: [
        "1x Tenda Dome 2 Orang",
        "2x Sleeping Bag Premium",
        "2x Matras Camping",
        "1x Kompor Portable",
        "1x Panci Set",
        "2x Headlamp",
        "2x Trekking Pole",
        "Panduan & Map Lokasi",
      ],
      suitable: ["Honeymoon", "Romantic Getaway", "Pendakian Ringan"],
    },
    {
      id: 2,
      name: "Paket Keluarga",
      icon: "👨‍👩‍👧‍👦",
      capacity: "4 Orang",
      description:
        "Lengkap untuk keluarga kecil yang ingin quality time di alam sambil camping.",
      price: 850000,
      duration: "3 Hari & 2 Malam",
      included: [
        "1x Tenda Dome 4 Orang",
        "4x Sleeping Bag",
        "4x Matras Camping",
        "1x Kompor Camping",
        "1x Panci Set Lengkap",
        "4x Headlamp",
        "2x Trekking Pole Set",
        "Peralatan Dapur Lengkap",
        "Panduan & Map Lokasi",
      ],
      suitable: ["Family Trip", "Liburan Sekolah", "Gathering Keluarga"],
    },
    {
      id: 3,
      name: "Paket Extended Family",
      icon: "👨‍👩‍👧‍👦👨‍👩‍👧",
      capacity: "6+ Orang",
      description:
        "Paket besar untuk keluarga besar atau gathering teman-teman dengan semua kebutuhan.",
      price: 1500000,
      duration: "3 Hari & 2 Malam",
      highlight: "Populer",
      included: [
        "1x Tenda Dome 6 Orang",
        "2x Tenda Dome 2 Orang",
        "6x Sleeping Bag Premium",
        "6x Matras Camping",
        "2x Kompor Camping",
        "2x Panci Set Lengkap",
        "6x Headlamp LED",
        "4x Trekking Pole Set",
        "Peralatan Dapur Komplit",
        "Peralatan Makan Lengkap",
        "Panduan & Map Lokasi",
      ],
      suitable: [
        "Gathering Keluarga",
        "Team Building",
        "Pendakian Bersama",
        "Camping Retreat",
      ],
    },
    {
      id: 4,
      name: "Paket Gunung Profesional",
      icon: "⛰️",
      capacity: "4 Orang",
      description:
        "Paket khusus untuk pendakian gunung dengan peralatan profesional dan berkualitas tinggi.",
      price: 1200000,
      duration: "5 Hari & 4 Malam",
      included: [
        "1x Tenda Dome 4 Orang (Waterproof)",
        "4x Sleeping Bag Premium",
        "4x Matras Camping Thermal",
        "1x Kompor Camping Profesional",
        "1x Panci Set Titanium",
        "4x Headlamp LED Professional",
        "4x Trekking Pole Carbon Fiber",
        "4x Carrier 60L Professional",
        "Peralatan Pertamuan Lengkap",
        "GPS & Map Detail",
        "First Aid Kit",
        "Rope & Carabiner",
      ],
      suitable: [
        "Pendakian Gunung",
        "Hiking Profesional",
        "Expedition",
        "Adventure Serius",
      ],
    },
    {
      id: 5,
      name: "Paket Pemula",
      icon: "🌱",
      capacity: "1-2 Orang",
      description:
        "Paket entry-level untuk mereka yang pertama kali camping dan ingin mencoba.",
      price: 250000,
      duration: "1 Hari & 1 Malam",
      included: [
        "1x Tenda Dome 2 Orang",
        "2x Sleeping Bag",
        "2x Matras Camping",
        "1x Kompor Portable",
        "1x Panci Set",
        "2x Headlamp",
        "Panduan Camping Pemula",
        "Tutorial Video",
        "Map Lokasi",
      ],
      suitable: [
        "Pemula",
        "Trial Pertama",
        "Weekend Singkat",
        "Belajar Camping",
      ],
    },
    {
      id: 6,
      name: "Paket Custom",
      icon: "⚙️",
      capacity: "Sesuai Kebutuhan",
      description:
        "Buat paket sesuai kebutuhan spesifik Anda dengan konsultasi bersama tim kami.",
      price: 0,
      duration: "Fleksibel",
      included: [
        "Konsultasi Gratis",
        "Customization Lengkap",
        "Peralatan Pilihan",
        "Durasi Fleksibel",
        "Harga Spesial",
        "Dedicated Support",
      ],
      suitable: ["Corporate Event", "Special Requirement", "Large Group"],
    },
  ];

  const benefits = [
    {
      title: "Harga Hemat",
      desc: "Bundle paket lebih murah dibanding sewa individual",
    },
    {
      title: "Lengkap & Siap Pakai",
      desc: "Semua kebutuhan camping sudah tersedia dalam satu paket",
    },
    {
      title: "Kualitas Terjamin",
      desc: "Semua equipment terawat dan dalam kondisi prima",
    },
    {
      title: "Fleksibel",
      desc: "Bisa customize sesuai kebutuhan dan durasi sewa Anda",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Paket Camping</h1>
          <p className="text-green-100">
            Paket bundling hemat untuk liburan camping sempurna Anda
          </p>
        </div>
      </section>

      <div className="flex-1">
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-heading">Mengapa Pilih Paket Kami?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Pilihan Paket Camping</h2>
            <p className="section-subheading">
              Temukan paket yang sesuai dengan kebutuhan petualangan Anda
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group ${
                    pkg.highlight ? "ring-2 ring-secondary" : ""
                  }`}
                >
                  {/* Highlight Badge */}
                  {pkg.highlight && (
                    <div className="bg-secondary text-white text-center py-2 text-sm font-bold">
                      🌟 {pkg.highlight}
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 text-center">
                    <div className="text-5xl mb-4">{pkg.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {pkg.description}
                    </p>

                    {/* Capacity & Duration */}
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <Users size={16} className="text-primary" />
                        <span>{pkg.capacity}</span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Price */}
                    {pkg.price > 0 ? (
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Mulai dari</p>
                        <p className="text-4xl font-bold text-primary">
                          Rp {pkg.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-gray-600 text-lg font-semibold">
                          Harga Khusus
                        </p>
                        <p className="text-sm text-gray-600">
                          Hubungi untuk penawaran
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Included Items */}
                  <div className="p-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Check size={20} className="text-green-600" />
                      Included
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {pkg.included.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Suitable For */}
                    <h4 className="font-bold text-gray-900 mb-3">
                      Cocok untuk:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.suitable.map((suit, i) => (
                        <span
                          key={i}
                          className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {suit}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/katalog"
                      className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      Pesan Sekarang
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Package CTA */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center border-2 border-primary/20">
              <Zap size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Paket Tidak Sesuai?</h3>
              <p className="text-gray-600 mb-6">
                Hubungi customer service kami untuk membuat paket custom sesuai
                kebutuhan spesifik Anda.
              </p>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-heading mb-8">Perbandingan Paket</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-3 text-left font-bold">Fitur</th>
                    <th className="px-6 py-3 text-center font-bold">Pemula</th>
                    <th className="px-6 py-3 text-center font-bold">Couple</th>
                    <th className="px-6 py-3 text-center font-bold">
                      Keluarga
                    </th>
                    <th className="px-6 py-3 text-center font-bold">Gunung</th>
                    <th className="px-6 py-3 text-center font-bold">
                      Extended
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Durasi", data: ["1H", "3H", "3H", "5H", "3H"] },
                    {
                      feature: "Harga",
                      data: [
                        "Rp 250K",
                        "Rp 450K",
                        "Rp 850K",
                        "Rp 1.2M",
                        "Rp 1.5M",
                      ],
                    },
                    {
                      feature: "Tenda",
                      data: ["1x2P", "1x2P", "1x4P", "1x4P", "3x Tenda"],
                    },
                    {
                      feature: "Sleeping Bag",
                      data: ["2x", "2x", "4x", "4x", "6x"],
                    },
                    {
                      feature: "Kompor",
                      data: ["1x", "1x", "1x", "2x Prof", "2x"],
                    },
                    {
                      feature: "Perlengkapan Dapur",
                      data: ["Basic", "Basic", "Lengkap", "Prof", "Komplit"],
                    },
                    {
                      feature: "Support Team",
                      data: ["No", "No", "No", "24/7", "Optional"],
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="px-6 py-3 font-semibold text-gray-900">
                        {row.feature}
                      </td>
                      {row.data.map((val, j) => (
                        <td key={j} className="px-6 py-3 text-center">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Pertanyaan Tentang Paket</h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Bisa modifikasi paket yang sudah ada?",
                  a: "Ya, setiap paket bisa di-customize. Hubungi customer service untuk diskusi kebutuhan spesifik Anda.",
                },
                {
                  q: "Apakah semua item dalam kondisi baik?",
                  a: "Semua equipment kami dijamin dalam kondisi prima dan terawat. Kami melakukan pengecekan berkala.",
                },
                {
                  q: "Berapa harga untuk durasi berbeda?",
                  a: "Harga bervariasi sesuai durasi. Semakin lama sewa, biasanya harga per hari lebih murah. Hubungi kami untuk penawaran khusus.",
                },
                {
                  q: "Apakah ada diskon untuk group/corporate?",
                  a: "Ya, kami menawarkan harga khusus untuk pemesanan group dan corporate. Hubungi sales team kami.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
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
              Pilih Paket Anda Sekarang
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Jangan biarkan kesempatan liburan sempurna Anda terlewat. Pesan
              paket camping favorit hari ini.
            </p>
            <Link
              to="/katalog"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Lihat Katalog & Pesan
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
