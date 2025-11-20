import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout, isAdmin, isCustomer } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const handleDashboardClick = () => {
    if (isAdmin) {
      navigate('/admin/dashboard');
    } else if (isCustomer) {
      navigate('/customer/dashboard');
    }
    setIsOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/katalog', label: 'Katalog' },
    { href: '/cara-sewa', label: 'Cara Sewa' },
    { href: '/paket-camping', label: 'Paket Camping' },
    { href: '/blog', label: 'Blog' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
    { href: '/kontak', label: 'Kontak' },
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
              <p className="text-xs text-gray-600">
                Rental Perlengkapan Camping
              </p>
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
            {isAuthenticated ? (
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  onClick={handleDashboardClick}
                  variant="ghost"
                  className="flex items-center gap-2"
                  data-testid="dashboard-button"
                >
                  {isAdmin ? (
                    <Shield size={18} className="text-blue-600" />
                  ) : (
                    <User size={18} />
                  )}
                  <span className="text-sm font-medium">
                    {isAdmin ? 'Admin' : user?.firstName || 'Akun'}
                  </span>
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="flex items-center gap-2"
                  data-testid="logout-button"
                >
                  <LogOut size={18} />
                  <span className="text-sm font-medium">Keluar</span>
                </Button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  onClick={() => navigate('/login')}
                  variant="ghost"
                  data-testid="login-button"
                >
                  Masuk
                </Button>
                <Button
                  onClick={() => navigate('/register')}
                  data-testid="register-button"
                >
                  Daftar
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              data-testid="mobile-menu-button"
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
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={handleDashboardClick}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-primary hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {isAdmin ? 'Admin Dashboard' : 'Dashboard Saya'}
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Keluar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate('/login');
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-primary hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Masuk
                    </button>
                    <button
                      onClick={() => {
                        navigate('/register');
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors mt-2"
                    >
                      Daftar
                    </button>
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
