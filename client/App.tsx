import './global.css';

import { Toaster } from '@/components/ui/toaster';
import { createRoot } from 'react-dom/client';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Pages
import Home from './pages/Home';
import Katalog from './pages/Katalog';
import CaraSewa from './pages/CaraSewa';
import PaketCamping from './pages/PaketCamping';
import Blog from './pages/Blog';
import TentangKami from './pages/TentangKami';
import Kontak from './pages/Kontak';
import Placeholder from './pages/Placeholder';
import NotFound from './pages/NotFound';

// Auth Pages
import AdminLogin from './pages/AdminLogin';
import CustomerLogin from './pages/CustomerLogin';
import CustomerRegister from './pages/CustomerRegister';
import AdminDashboard from './pages/AdminDashboard';
import CustomerDashboard from './pages/CustomerDashboard';

const queryClient = new QueryClient();

// Protected Route Component
function ProtectedRoute({
  children,
  requiredRole,
}: {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'customer';
}) {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/katalog" element={<Katalog />} />
      <Route path="/cara-sewa" element={<CaraSewa />} />
      <Route path="/paket-camping" element={<PaketCamping />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
      <Route path="/kontak" element={<Kontak />} />

      {/* Auth Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/login" element={<CustomerLogin />} />
      <Route path="/register" element={<CustomerRegister />} />

      {/* Protected Routes - Admin */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected Routes - Customer */}
      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute requiredRole="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Legacy routes - redirect */}
      <Route path="/akun" element={<Navigate to="/customer/dashboard" replace />} />
      <Route path="/daftar" element={<Navigate to="/register" replace />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById('root')!).render(<App />);
