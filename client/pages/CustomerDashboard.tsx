import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ordersApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { LogOut, ShoppingBag, User, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CustomerDashboard() {
  const { user, logout, isCustomer } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isCustomer) {
      toast.error('Silakan login terlebih dahulu');
      navigate('/login');
      return;
    }
    fetchOrders();
  }, [isCustomer, navigate]);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token') || '';
      const response = await ordersApi.getUserOrders(token);
      setOrders(response.data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Gagal memuat data pesanan');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; label: string }> = {
      pending: { color: 'bg-yellow-100 text-yellow-800', label: 'Menunggu' },
      confirmed: { color: 'bg-blue-100 text-blue-800', label: 'Dikonfirmasi' },
      processing: { color: 'bg-purple-100 text-purple-800', label: 'Diproses' },
      ready: { color: 'bg-green-100 text-green-800', label: 'Siap Diambil' },
      returned: { color: 'bg-gray-100 text-gray-800', label: 'Dikembalikan' },
      cancelled: { color: 'bg-red-100 text-red-800', label: 'Dibatalkan' },
    };
    const config = statusConfig[status] || statusConfig.pending;
    return (
      <Badge className={config.color}>
        {config.label}
      </Badge>
    );
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; label: string }> = {
      unpaid: { color: 'bg-red-100 text-red-800', label: 'Belum Bayar' },
      partial: { color: 'bg-yellow-100 text-yellow-800', label: 'DP Dibayar' },
      paid: { color: 'bg-green-100 text-green-800', label: 'Lunas' },
    };
    const config = statusConfig[status] || statusConfig.unpaid;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const stats = {
    totalOrders: orders.length,
    activeOrders: orders.filter((o: any) => 
      ['pending', 'confirmed', 'processing', 'ready'].includes(o.status)
    ).length,
    completedOrders: orders.filter((o: any) => o.status === 'returned').length,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900" data-testid="customer-dashboard-title">
                  Dashboard Saya
                </h1>
                <p className="text-gray-600 mt-1">
                  Selamat datang, {user?.firstName} {user?.lastName}
                </p>
                <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
              </div>
              <Button onClick={logout} variant="outline" data-testid="customer-logout-button">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Pesanan</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="total-user-orders">{stats.totalOrders}</div>
                <p className="text-xs text-muted-foreground">Semua pesanan</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pesanan Aktif</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="active-orders">{stats.activeOrders}</div>
                <p className="text-xs text-muted-foreground">Sedang berjalan</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Selesai</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="completed-orders">{stats.completedOrders}</div>
                <p className="text-xs text-muted-foreground">Pesanan selesai</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="orders" className="space-y-4">
            <TabsList>
              <TabsTrigger value="orders" data-testid="my-orders-tab">Pesanan Saya</TabsTrigger>
              <TabsTrigger value="profile" data-testid="profile-tab">Profil</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-4">
              {orders.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Belum Ada Pesanan
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Anda belum memiliki pesanan. Mulai sewa perlengkapan camping sekarang!
                    </p>
                    <Button onClick={() => navigate('/katalog')} data-testid="browse-products-button">
                      Lihat Katalog Produk
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                orders.map((order: any) => (
                  <Card key={order._id} data-testid={`order-card-${order._id}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            Order #{order._id.substring(0, 8).toUpperCase()}
                          </CardTitle>
                          <CardDescription>
                            {new Date(order.createdAt).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </CardDescription>
                        </div>
                        <div className="text-right space-y-2">
                          {getStatusBadge(order.status)}
                          {getPaymentStatusBadge(order.paymentStatus)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Items */}
                        <div>
                          <h4 className="font-medium mb-2">Item Pesanan:</h4>
                          <div className="space-y-2">
                            {order.items?.map((item: any, idx: number) => (
                              <div
                                key={idx}
                                className="flex justify-between text-sm bg-gray-50 p-3 rounded"
                              >
                                <div>
                                  <p className="font-medium">{item.productName}</p>
                                  <p className="text-gray-600">
                                    {item.quantity} unit × {item.durationDays} hari
                                  </p>
                                </div>
                                <p className="font-medium">
                                  Rp {item.subtotal?.toLocaleString('id-ID')}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Total */}
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-gray-600">Total Pembayaran</p>
                              {order.paymentMethod === 'transfer' && (
                                <p className="text-xs text-gray-500">
                                  DP: Rp {order.depositPaid?.toLocaleString('id-ID')}
                                </p>
                              )}
                            </div>
                            <p className="text-xl font-bold text-primary">
                              Rp {order.totalAmount?.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>

                        {/* Rental Period */}
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="text-sm font-medium text-blue-900">Periode Sewa:</p>
                          <p className="text-sm text-blue-700">
                            {new Date(order.pickupDate).toLocaleDateString('id-ID')} -{' '}
                            {new Date(order.returnDate).toLocaleDateString('id-ID')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Profil</CardTitle>
                  <CardDescription>Data akun Anda</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Nama Depan</label>
                      <p className="mt-1 text-gray-900">{user?.firstName || '-'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Nama Belakang</label>
                      <p className="mt-1 text-gray-900">{user?.lastName || '-'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <p className="mt-1 text-gray-900">{user?.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">No. Telepon</label>
                      <p className="mt-1 text-gray-900">{user?.phone || '-'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
