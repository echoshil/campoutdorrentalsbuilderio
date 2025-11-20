import { Link } from "react-router-dom";
import { Star, MapPin, Users, Clock, ArrowRight, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Tenda Dome 2 Orang",
      price: 150000,
      image: "🏕️",
      rating: 4.8,
      reviews: 248,
      category: "Tenda & Shelter",
    },
    {
      id: 2,
      name: "Carrier Hiking 60L",
      price: 200000,
      image: "🎒",
      rating: 4.9,
      reviews: 312,
      category: "Tas Carrier",
    },
    {
      id: 3,
      name: "Sleeping Bag Premium",
      price: 120000,
      image: "🛌",
      rating: 4.7,
      reviews: 189,
      category: "Sleeping Gear",
    },
    {
      id: 4,
      name: "Kompor Camping Portable",
      price: 180000,
      image: "🍳",
      rating: 4.6,
      reviews: 156,
      category: "Masak & Dapur",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Petualang Outdoor",
      text: "Perlengkapan camping dari OutdoorCamp sangat berkualitas dan proses sewa sangat mudah. Rekomendasi terbaik!",
      rating: 5,
      avatar: "👨",
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Pemandu Gunung",
      text: "Telah menyewa berkali-kali untuk kegiatan pendakian. Equipment selalu dalam kondisi prima dan harga terjangkau.",
      rating: 5,
      avatar: "👩",
    },
    {
      id: 3,
      name: "Ahmad Wijaya",
      role: "Event Organizer",
      text: "Layanan customer service sangat responsif. Untuk event camping besar, OutdoorCamp adalah pilihan utama kami.",
      rating: 5,
      avatar: "👨",
    },
  ];

  const stats = [
    { label: "Produk Tersedia", value: "150+", icon: "📦" },
    { label: "Pelanggan Puas", value: "2,500+", icon: "👥" },
    { label: "Sewa Sukses", value: "10,000+", icon: "✅" },
    { label: "Rating", value: "4.8/5", icon: "⭐" },
  ];

  const categories = [
    { name: "Tenda & Shelter", icon: "⛺", href: "/katalog?category=tenda" },
    { name: "Tas Carrier", icon: "🎒", href: "/katalog?category=tas" },
    { name: "Sleeping Gear", icon: "🛌", href: "/katalog?category=sleeping" },
    { name: "Masak & Dapur", icon: "🍳", href: "/katalog?category=masak" },
    { name: "Hiking Gear", icon: "🥾", href: "/katalog?category=hiking" },
    { name: "Lighting", icon: "🔦", href: "/katalog?category=lighting" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-green-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-40 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full transform -translate-x-40 translate-y-20"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Jelajahi Alam Bebas dengan Percaya Diri
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
                Sewa perlengkapan camping berkualitas tinggi dengan harga terjangkau. Nikmati petualangan outdoor Anda tanpa khawatir tentang equipmentnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/katalog"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Lihat Katalog
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/cara-sewa"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Pelajari Cara Sewa
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/20 rounded-lg p-4">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex items-center justify-center text-9xl animate-fade-in">
              ⛺
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Jelajahi Kategori</h2>
          <p className="section-subheading">
            Temukan perlengkapan camping yang sesuai dengan kebutuhan Anda
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group bg-white p-6 rounded-xl text-center hover:shadow-lg hover:border-primary border-2 border-transparent transition-all"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <p className="font-semibold text-sm text-gray-700 group-hover:text-primary transition-colors">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Produk Unggulan
              </h2>
              <p className="text-gray-600">
                Pilihan peralatan camping terpopuler dengan kualitas terjamin
              </p>
            </div>
            <Link
              to="/katalog"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Lihat Semua <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center text-7xl">
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-secondary mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>
                    <Link
                      to="/katalog"
                      className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/katalog"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Lihat Semua Produk
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Cara Sewa Mudah</h2>
          <p className="section-subheading">
            Hanya 4 langkah sederhana untuk memulai petualangan Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "1",
                title: "Pilih Produk",
                description:
                  "Jelajahi katalog kami dan pilih perlengkapan yang Anda butuhkan",
                icon: "🔍",
              },
              {
                number: "2",
                title: "Tentukan Tanggal",
                description:
                  "Pilih tanggal sewa dan pengembalian sesuai kebutuhan Anda",
                icon: "📅",
              },
              {
                number: "3",
                title: "Lakukan Pembayaran",
                description:
                  "Bayar dengan DP atau full payment melalui berbagai metode",
                icon: "💳",
              },
              {
                number: "4",
                title: "Nikmati Petualangan",
                description:
                  "Ambil barang dan mulai petualangan outdoor Anda sekarang",
                icon: "🚀",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{step.icon}</span>
                  <span className="text-3xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-heading">Apa Kata Pelanggan Kami</h2>
          <p className="section-subheading">
            Ribuan pelanggan puas telah mempercayai OutdoorCamp
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap untuk Petualangan?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Mulai sewa perlengkapan camping berkualitas tinggi hari ini dan
            ciptakan kenangan yang tak terlupakan bersama keluarga dan teman.
          </p>
          <Link
            to="/katalog"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Mulai Sekarang
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Mengapa Memilih OutdoorCamp?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✨",
                title: "Kualitas Terjamin",
                description:
                  "Semua equipment kami terawat dan dalam kondisi prima",
              },
              {
                icon: "💰",
                title: "Harga Terjangkau",
                description:
                  "Harga kompetitif dengan kualitas yang tidak tertandingi",
              },
              {
                icon: "⚡",
                title: "Proses Cepat",
                description:
                  "Booking mudah, proses persetujuan cepat, dan siap diambil",
              },
              {
                icon: "🤝",
                title: "Layanan Terbaik",
                description:
                  "Customer service responsif siap membantu 24/7 untuk Anda",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
