import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⛺</span>
              </div>
              <h3 className="text-lg font-bold">OutdoorCamp</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Penyedia perlengkapan camping berkualitas tinggi untuk petualangan
              Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/katalog"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  to="/paket-camping"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Paket Camping
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Blog & Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-semibold text-white mb-4">Informasi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tentang-kami"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/cara-sewa"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Cara Sewa
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-secondary mt-1 flex-shrink-0"
                />
                <p className="text-gray-400 text-sm">
                  Jl. Outdoor No. 123, Jakarta, Indonesia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <p className="text-gray-400 text-sm">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@outdoorcamp.id</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>
              &copy; {currentYear} OutdoorCamp. Semua hak dilindungi
              undang-undang.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
