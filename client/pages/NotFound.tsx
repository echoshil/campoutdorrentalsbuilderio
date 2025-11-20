import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container-custom text-center">
          <div className="bg-white rounded-xl shadow-md p-12 max-w-2xl mx-auto">
            <div className="text-8xl mb-4">404</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. Kemungkinan
              halaman telah dihapus atau URL yang Anda masukkan salah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ArrowLeft size={20} />
                Kembali ke Beranda
              </Link>
              <Link
                to="/katalog"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold py-3 px-8 rounded-lg hover:bg-primary/10 transition-colors"
              >
                Lihat Katalog
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
