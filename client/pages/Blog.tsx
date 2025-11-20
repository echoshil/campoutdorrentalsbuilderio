import { useState } from "react";
import { Search, Clock, User, ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Panduan Lengkap Camping untuk Pemula",
      excerpt:
        "Memulai petualangan camping tidak pernah semudah ini. Pelajari tips-tips penting untuk membuat pengalaman camping pertama Anda tak terlupakan.",
      content:
        "Camping adalah petualangan luar yang menyenangkan dan menenangkan. Artikel ini memberikan panduan lengkap tentang cara mempersiapkan camping pertama Anda, dari memilih lokasi, peralatan yang dibutuhkan, hingga tips keamanan.",
      category: "Tips & Panduan",
      author: "Budi Santoso",
      date: "2024-01-15",
      readTime: 8,
      image: "🏕️",
      tags: ["camping", "pemula", "tips"],
    },
    {
      id: 2,
      title: "Review: Tenda Dome vs Tunnel - Mana yang Lebih Baik?",
      excerpt:
        "Membandingkan dua jenis tenda populer untuk membantu Anda memilih yang tepat sesuai kebutuhan camping.",
      content:
        "Tenda dome dan tenda tunnel memiliki kelebihan dan kekurangan masing-masing. Review mendalam ini membantu Anda memahami perbedaan kedua jenis tenda dan memilih yang paling sesuai dengan gaya camping Anda.",
      category: "Review Peralatan",
      author: "Siti Nurhaliza",
      date: "2024-01-10",
      readTime: 10,
      image: "⛺",
      tags: ["review", "tenda", "perbandingan"],
    },
    {
      id: 3,
      title: "Destinasi Camping Terbaik di Indonesia: Bagian 1",
      excerpt:
        "Jelajahi 5 destinasi camping terindah yang wajib dikunjungi di pulau Jawa dan sekitarnya.",
      content:
        "Indonesia memiliki banyak destinasi camping yang menakjubkan. Artikel ini menghadirkan rekomendasi 5 destinasi camping terbaik yang cocok untuk berbagai tingkat kesulitan dan preferensi.",
      category: "Destinasi",
      author: "Ahmad Wijaya",
      date: "2024-01-05",
      readTime: 12,
      image: "🏔️",
      tags: ["destinasi", "gunung", "camping"],
    },
    {
      id: 4,
      title: "Cara Merawat Peralatan Camping Agar Tahan Lama",
      excerpt:
        "Tips dan trik merawat peralatan camping Anda agar selalu dalam kondisi prima dan awet bertahun-tahun.",
      content:
        "Investasi pada peralatan camping berkualitas harus dijaga dengan perawatan yang tepat. Pelajari cara membersihkan, menyimpan, dan merawat berbagai jenis peralatan camping untuk memaksimalkan umur pakainya.",
      category: "Tips & Panduan",
      author: "Budi Santoso",
      date: "2024-01-01",
      readTime: 7,
      image: "🧹",
      tags: ["perawatan", "tips", "perlengkapan"],
    },
    {
      id: 5,
      title: "Paket Makanan Ideal untuk Camping 3 Hari",
      excerpt:
        "Menu camping sehat dan lezat yang mudah disiapkan dan tidak memerlukan peralatan rumit.",
      content:
        "Makanan adalah bagian penting dari pengalaman camping. Artikel ini menyajikan ide-ide menu camping sehat yang praktis, lezat, dan mudah disiapkan dengan peralatan terbatas.",
      category: "Tips & Panduan",
      author: "Siti Nurhaliza",
      date: "2023-12-28",
      readTime: 9,
      image: "🍽️",
      tags: ["makanan", "camping", "menu"],
    },
    {
      id: 6,
      title: "Safety Tips: Camping di Musim Hujan",
      excerpt:
        "Panduan keamanan penting untuk camping selama musim hujan agar tetap aman dan nyaman.",
      content:
        "Camping di musim hujan membutuhkan persiapan khusus dan pengetahuan tentang keselamatan. Pelajari tips-tips penting untuk tetap aman dan nyaman saat camping di musim basah.",
      category: "Keselamatan",
      author: "Ahmad Wijaya",
      date: "2023-12-25",
      readTime: 8,
      image: "⛈️",
      tags: ["keselamatan", "hujan", "camping"],
    },
    {
      id: 7,
      title: "Sleeping Bag 101: Memilih Sleeping Bag yang Tepat",
      excerpt:
        "Panduan komprehensif memilih sleeping bag yang sesuai dengan jenis camping dan iklim Anda.",
      content:
        "Sleeping bag yang tepat sangat penting untuk kenyamanan camping. Artikel ini menjelaskan berbagai jenis sleeping bag, rating suhu, dan bagaimana memilih yang terbaik untuk kebutuhan Anda.",
      category: "Review Peralatan",
      author: "Budi Santoso",
      date: "2023-12-20",
      readTime: 11,
      image: "🛌",
      tags: ["sleeping-bag", "perlengkapan", "review"],
    },
    {
      id: 8,
      title: "Gunung Merbabu: Pendakian Pemula yang Sempurna",
      excerpt:
        "Panduan lengkap mendaki Gunung Merbabu, cocok untuk pemula dengan rute yang indah dan tidak terlalu sulit.",
      content:
        "Gunung Merbabu adalah destinasi pendakian terbaik untuk pemula. Artikel ini memberikan informasi lengkap tentang rute, durasi, persiapan, dan tips untuk sukses mendaki gunung ini.",
      category: "Destinasi",
      author: "Ahmad Wijaya",
      date: "2023-12-15",
      readTime: 13,
      image: "⛰️",
      tags: ["gunung-merbabu", "pendakian", "pemula"],
    },
  ];

  const categories = [
    "all",
    "Tips & Panduan",
    "Review Peralatan",
    "Destinasi",
    "Keselamatan",
  ];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Blog & Artikel
          </h1>
          <p className="text-green-100">
            Tips, panduan, review, dan destinasi untuk petualangan camping Anda
          </p>
        </div>
      </section>

      <div className="flex-1">
        <div className="container-custom py-12">
          {/* Search and Filter */}
          <div className="mb-12">
            {/* Search Box */}
            <div className="relative mb-8">
              <Search
                size={20}
                className="absolute left-4 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {cat === "all" ? "Semua" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && selectedCategory === "all" && (
            <div className="mb-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>

                  <div className="flex flex-wrap gap-4 items-center mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{filteredPosts[0].readTime} min baca</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(filteredPosts[0].date).toLocaleDateString(
                        "id-ID",
                      )}
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                    Baca Selengkapnya <ArrowRight size={18} />
                  </button>
                </div>
                <div className="flex items-center justify-center text-8xl">
                  {filteredPosts[0].image}
                </div>
              </div>
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts
                .slice(selectedCategory === "all" ? 1 : 0)
                .map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                      {post.image}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Tag */}
                      <div className="flex items-center gap-2 mb-3">
                        <Tag size={14} className="text-secondary" />
                        <span className="text-xs font-semibold text-secondary">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime} min
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-600 text-lg">
                Tidak ada artikel yang sesuai dengan pencarian Anda
              </p>
            </div>
          )}

          {/* Newsletter Signup */}
          <section className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border-2 border-primary/20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-2">
                Dapatkan Tips Camping Terbaru
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe ke newsletter kami dan dapatkan tips, review, dan
                rekomendasi destinasi camping langsung ke email Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email Anda..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
