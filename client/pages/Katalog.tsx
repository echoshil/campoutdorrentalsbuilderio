import { useState, useMemo } from "react";
import { ChevronDown, Search, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  capacity?: string;
  brand: string;
}

export default function Katalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedBrand, setSelectedBrand] = useState("all");

  // Sample product data
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Tenda Dome 2 Orang",
      category: "Tenda & Shelter",
      price: 150000,
      image: "🏕️",
      rating: 4.8,
      reviews: 248,
      stock: 12,
      capacity: "2 Orang",
      brand: "Coleman",
    },
    {
      id: 2,
      name: "Tenda Dome 4 Orang",
      category: "Tenda & Shelter",
      price: 280000,
      image: "🏕️",
      rating: 4.9,
      reviews: 312,
      stock: 8,
      capacity: "4 Orang",
      brand: "Coleman",
    },
    {
      id: 3,
      name: "Tenda Dome 6 Orang",
      category: "Tenda & Shelter",
      price: 420000,
      image: "⛺",
      rating: 4.7,
      reviews: 189,
      stock: 5,
      capacity: "6 Orang",
      brand: "Naturehike",
    },
    {
      id: 4,
      name: "Carrier Hiking 60L",
      category: "Tas Carrier",
      price: 200000,
      image: "🎒",
      rating: 4.9,
      reviews: 312,
      stock: 15,
      capacity: "60L",
      brand: "Osprey",
    },
    {
      id: 5,
      name: "Carrier Hiking 80L",
      category: "Tas Carrier",
      price: 250000,
      image: "🎒",
      rating: 4.8,
      reviews: 267,
      stock: 10,
      capacity: "80L",
      brand: "Osprey",
    },
    {
      id: 6,
      name: "Sleeping Bag Premium",
      category: "Sleeping Gear",
      price: 120000,
      image: "🛌",
      rating: 4.7,
      reviews: 189,
      stock: 20,
      capacity: "1 Orang",
      brand: "Thermal",
    },
    {
      id: 7,
      name: "Sleeping Bag Ultra Premium",
      category: "Sleeping Gear",
      price: 180000,
      image: "🛌",
      rating: 4.9,
      reviews: 245,
      stock: 18,
      capacity: "1 Orang",
      brand: "Thermal",
    },
    {
      id: 8,
      name: "Matras Camping",
      category: "Sleeping Gear",
      price: 85000,
      image: "🧳",
      rating: 4.6,
      reviews: 156,
      stock: 25,
      capacity: "1 Orang",
      brand: "Generic",
    },
    {
      id: 9,
      name: "Kompor Camping Portable",
      category: "Masak & Dapur",
      price: 180000,
      image: "🍳",
      rating: 4.6,
      reviews: 156,
      stock: 14,
      capacity: "2-3 Orang",
      brand: "Primus",
    },
    {
      id: 10,
      name: "Panci Set Camping",
      category: "Masak & Dapur",
      price: 120000,
      image: "🍳",
      rating: 4.5,
      reviews: 128,
      stock: 16,
      capacity: "4 Orang",
      brand: "Generic",
    },
    {
      id: 11,
      name: "Trekking Pole Set",
      category: "Hiking Gear",
      price: 150000,
      image: "🥾",
      rating: 4.7,
      reviews: 198,
      stock: 19,
      capacity: "Dewasa",
      brand: "Decathlon",
    },
    {
      id: 12,
      name: "Hiking Boot Profesional",
      category: "Hiking Gear",
      price: 220000,
      image: "🥾",
      rating: 4.8,
      reviews: 274,
      stock: 11,
      capacity: "All Size",
      brand: "Salomon",
    },
    {
      id: 13,
      name: "Headlamp LED",
      category: "Lighting",
      price: 95000,
      image: "🔦",
      rating: 4.6,
      reviews: 142,
      stock: 22,
      capacity: "1 Orang",
      brand: "Black Diamond",
    },
    {
      id: 14,
      name: "Lantern Camping",
      category: "Lighting",
      price: 135000,
      image: "🔦",
      rating: 4.5,
      reviews: 117,
      stock: 13,
      capacity: "Umum",
      brand: "Generic",
    },
    {
      id: 15,
      name: "Hammock Portable",
      category: "Sleeping Gear",
      price: 165000,
      image: "🪑",
      rating: 4.7,
      reviews: 203,
      stock: 17,
      capacity: "1 Orang",
      brand: "ENO",
    },
  ];

  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "tenda", label: "Tenda & Shelter" },
    { value: "tas", label: "Tas Carrier" },
    { value: "sleeping", label: "Sleeping Gear" },
    { value: "masak", label: "Masak & Dapur" },
    { value: "hiking", label: "Hiking Gear" },
    { value: "lighting", label: "Lighting" },
  ];

  const brands = [
    "Coleman",
    "Osprey",
    "Thermal",
    "Primus",
    "Decathlon",
    "Salomon",
    "Black Diamond",
    "ENO",
    "Naturehike",
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      // Search filter
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Category filter
      const categoryMap: { [key: string]: string } = {
        tenda: "Tenda & Shelter",
        tas: "Tas Carrier",
        sleeping: "Sleeping Gear",
        masak: "Masak & Dapur",
        hiking: "Hiking Gear",
        lighting: "Lighting",
      };
      const matchesCategory =
        selectedCategory === "all" ||
        product.category === categoryMap[selectedCategory];

      // Price filter
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      // Brand filter
      const matchesBrand =
        selectedBrand === "all" || product.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
    });

    // Sort
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "newest":
        return filtered.reverse();
      default:
        return filtered.sort((a, b) => b.reviews - a.reviews);
    }
  }, [searchQuery, selectedCategory, priceRange, selectedBrand, sortBy]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Katalog Produk
          </h1>
          <p className="text-green-100">
            Temukan perlengkapan camping impian Anda
          </p>
        </div>
      </section>

      <div className="flex-1">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Cari Produk
                  </label>
                  <div className="relative">
                    <Search
                      size={18}
                      className="absolute left-3 top-3 text-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Cari nama produk..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <label className="block text-sm font-semibold mb-3">
                    Kategori
                  </label>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label
                        key={cat.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="category"
                          value={cat.value}
                          checked={selectedCategory === cat.value}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-primary cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">
                          {cat.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <label className="block text-sm font-semibold mb-3">
                    Harga Sewa
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="10000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Rp {priceRange[0].toLocaleString("id-ID")}</span>
                      <span>Rp {priceRange[1].toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="pb-6 border-b border-gray-200">
                  <label className="block text-sm font-semibold mb-3">
                    Brand
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="all">Semua Brand</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setPriceRange([0, 500000]);
                    setSelectedBrand("all");
                  }}
                  className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            </div>

            {/* Products Section */}
            <div className="lg:col-span-3">
              {/* Sorting and Results Info */}
              <div className="flex justify-between items-center mb-8 bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-600">
                  Menampilkan <strong>{filteredProducts.length}</strong> produk
                </p>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold">Urutkan:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-sm"
                  >
                    <option value="popular">Paling Populer</option>
                    <option value="newest">Terbaru</option>
                    <option value="rating">Rating Tertinggi</option>
                    <option value="price-low">Harga Terendah</option>
                    <option value="price-high">Harga Tertinggi</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center text-7xl relative">
                        {product.image}
                        {product.stock > 0 ? (
                          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Stok: {product.stock}
                          </div>
                        ) : (
                          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Habis
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <p className="text-xs font-semibold text-secondary mb-2">
                          {product.category}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>

                        {/* Capacity */}
                        {product.capacity && (
                          <p className="text-xs text-gray-600 mb-3">
                            Kapasitas: {product.capacity}
                          </p>
                        )}

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
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
                          <span className="text-xs text-gray-600 ml-1">
                            ({product.reviews})
                          </span>
                        </div>

                        {/* Price and Button */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              Per Hari
                            </p>
                            <p className="text-2xl font-bold text-primary">
                              Rp {product.price.toLocaleString("id-ID")}
                            </p>
                          </div>
                          <button
                            disabled={product.stock === 0}
                            className={`p-2 rounded-lg transition-colors ${
                              product.stock > 0
                                ? "bg-primary text-white hover:bg-primary/90"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                          >
                            <ArrowRight size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl">
                  <p className="text-gray-600 text-lg">
                    Tidak ada produk yang sesuai dengan filter Anda
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setPriceRange([0, 500000]);
                      setSelectedBrand("all");
                    }}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
