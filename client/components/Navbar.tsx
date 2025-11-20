import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/katalog", label: "Katalog" },
    { href: "/cara-sewa", label: "Cara Sewa" },
    { href: "/paket-camping", label: "Paket Camping" },
    { href: "/blog", label: "Blog" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⛺</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">OutdoorCamp</h1>
              <p className="text-xs text-gray-600">Rental Perlengkapan Camping</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {isLoggedIn ? (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/akun"
                  className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <User size={18} />
                  <span className="text-sm font-medium">Akun</span>
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <LogOut size={18} />
                  <span className="text-sm font-medium">Keluar</span>
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Masuk
                </button>
                <Link
                  to="/daftar"
                  className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Daftar
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-1 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-200 my-2 pt-2">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/akun"
                      className="block px-3 py-2 text-sm font-medium text-primary hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Akun
                    </Link>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Keluar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setIsLoggedIn(true);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-primary hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Masuk
                    </button>
                    <Link
                      to="/daftar"
                      className="block px-3 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors mt-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Daftar
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
