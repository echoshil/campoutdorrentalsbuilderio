import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, Heart, Award, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TentangKami() {
  const values = [
    {
      icon: <CheckCircle size={32} className="text-primary" />,
      title: "Kualitas Premium",
      desc: "Semua equipment kami adalah produk berkualitas tinggi yang terawat dengan baik",
    },
    {
      icon: <Heart size={32} className="text-secondary" />,
      title: "Kepuasan Pelanggan",
      desc: "Kepuasan Anda adalah prioritas utama kami dalam setiap layanan",
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: "Tim Profesional",
      desc: "Tim kami terlatih dan berpengalaman dalam melayani kebutuhan camping Anda",
    },
    {
      icon: <Target size={32} className="text-secondary" />,
      title: "Inovasi Berkelanjutan",
      desc: "Kami terus berinovasi untuk memberikan layanan terbaik dan produk terbaru",
    },
  ];

  const achievements = [
    {
      number: "2,500+",
      label: "Pelanggan Puas",
      icon: "👥",
    },
    {
      number: "10,000+",
      label: "Sewa Sukses",
      icon: "✅",
    },
    {
      number: "150+",
      label: "Produk Tersedia",
      icon: "📦",
    },
    {
      number: "5 Tahun",
      label: "Pengalaman Bisnis",
      icon: "🏆",
    },
  ];

  const team = [
    {
      name: "Budi Santoso",
      role: "Founder & CEO",
      bio: "Pecinta outdoor berpengalaman dengan visi membuat camping lebih mudah diakses.",
      avatar: "👨",
    },
    {
      name: "Siti Nurhaliza",
      role: "Operations Manager",
      bio: "Expert dalam manajemen inventory dan quality control peralatan camping.",
      avatar: "👩",
    },
    {
      name: "Ahmad Wijaya",
      role: "Customer Service Lead",
      bio: "Dedicated dalam memberikan pelayanan terbaik dan solusi untuk setiap kebutuhan pelanggan.",
      avatar: "👨",
    },
    {
      name: "Rina Pramudita",
      role: "Marketing Manager",
      bio: "Passionate dalam mempromosikan keindahan outdoor dan lifestyle camping.",
      avatar: "👩",
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Awal Perjalanan",
      desc: "OutdoorCamp didirikan dengan visi menyediakan perlengkapan camping berkualitas dengan harga terjangkau.",
    },
    {
      year: "2020",
      title: "Ekspansi Pertama",
      desc: "Membuka cabang kedua dan menambah koleksi produk hingga 50+ item camping berkualitas.",
    },
    {
      year: "2021",
      title: "Platform Digital",
      desc: "Meluncurkan website dan aplikasi mobile untuk kemudahan booking online pelanggan.",
    },
    {
      year: "2022",
      title: "Sertifikasi Bisnis",
      desc: "Mendapatkan sertifikasi resmi dan izin usaha sebagai rental perlengkapan outdoor.",
    },
    {
      year: "2023",
      title: "Paket Spesial",
      desc: "Meluncurkan paket bundling dan corporate packages untuk grup dan perusahaan.",
    },
    {
      year: "2024",
      title: "Inovasi Terbaru",
      desc: "Mengintegrasikan AI untuk rekomendasi produk dan sistem booking yang lebih cerdas.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Tentang Kami</h1>
          <p className="text-green-100">
            Mengenal lebih jauh tentang OutdoorCamp dan misi kami
          </p>
        </div>
      </section>

      <div className="flex-1">
        {/* Company Overview */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Siapa Kami?
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  OutdoorCamp adalah penyedia perlengkapan camping terpercaya di Indonesia
                  yang telah melayani ribuan pelanggan selama lebih dari 5 tahun. Kami berkomitmen
                  untuk membuat petualangan outdoor Anda menjadi lebih mudah, nyaman, dan terjangkau.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Dengan koleksi lebih dari 150 produk berkualitas tinggi dan tim profesional yang
                  berpengalaman, kami memastikan setiap pelanggan mendapatkan pengalaman rental yang
                  memuaskan dan memorable.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Kami tidak hanya menyewakan perlengkapan, tetapi juga menyediakan panduan lengkap,
                  tips camping, dan dukungan penuh untuk menjadikan setiap petualangan Anda sukses.
                </p>

                <div className="flex gap-4">
                  <Link
                    to="/katalog"
                    className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Lihat Produk Kami
                  </Link>
                  <Link
                    to="/cara-sewa"
                    className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Cara Sewa
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <div className="text-9xl mb-8">⛺</div>
                <p className="text-gray-600 font-semibold">
                  "Buat setiap petualangan outdoor Anda sempurna bersama OutdoorCamp"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-heading">Visi & Misi Kami</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Vision */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <Target size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                <p className="text-gray-600">
                  Menjadi penyedia perlengkapan outdoor terdepan di Indonesia yang membuat
                  petualangan alam terbuka dapat diakses oleh semua orang dengan kualitas terjamin
                  dan harga terjangkau.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <Heart size={40} className="text-secondary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    Menyediakan perlengkapan camping berkualitas premium
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    Memberikan layanan rental yang mudah dan terpercaya
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    Memberikan harga kompetitif dan terjangkau
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    Mendukung petualangan outdoor yang aman dan menyenangkan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Nilai-Nilai Kami</h2>
            <p className="section-subheading">
              Prinsip yang kami pegang teguh dalam setiap aspek bisnis
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-r from-primary to-green-700 text-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">
              Pencapaian Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <p className="text-4xl font-bold mb-2">
                    {achievement.number}
                  </p>
                  <p className="text-green-100">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Perjalanan OutdoorCamp</h2>
            <p className="section-subheading">
              Milestone penting dalam perkembangan OutdoorCamp sejak awal hingga sekarang
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {timeline.length - index}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-1 h-20 bg-primary/30 mt-2"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-2 pb-8">
                      <div className="text-lg font-bold text-primary mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-heading">Tim Kami</h2>
            <p className="section-subheading">
              Profesional berpengalaman yang siap melayani Anda
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-40 flex items-center justify-center text-6xl">
                    {member.avatar}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legality Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-heading">Legalitas & Sertifikasi</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-8">
                <Award size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Dokumen Resmi</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Surat Izin Usaha (SIUP) Kementerian Perdagangan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Nomor Induk Berusaha (NIB) dari OSS Online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Sertifikat NPWP Perusahaan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Asuransi Tanggung Jawab Produk</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <CheckCircle size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Komitmen Kami</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Transparansi penuh dalam setiap transaksi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Perlindungan data pribadi pelanggan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Layanan purna jual yang responsif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Pengelolaan lingkungan yang bertanggung jawab</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="mt-12 bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto text-center">
              <MapPin size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Kunjungi Kami</h3>
              <p className="text-gray-600 mb-2">
                <strong>Alamat:</strong> Jl. Outdoor No. 123, Jakarta Timur, Indonesia
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Telepon:</strong> +62 812-3456-7890
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Email:</strong> info@outdoorcamp.id
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                Jam Operasional: Senin - Minggu, 08:00 - 18:00 WIB
              </p>
              <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors">
                Lihat di Maps
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-green-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bergabunglah dengan Ribuan Petualang Kami
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Rasakan pengalaman camping terbaik dengan peralatan berkualitas dan layanan terpercaya dari OutdoorCamp.
            </p>
            <Link
              to="/katalog"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Mulai Pesan Sekarang
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
