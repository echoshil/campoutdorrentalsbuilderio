import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { productsApi, ordersApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { LogOut, Package, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    if (!isAdmin) {
      toast.error('Akses ditolak. Hanya untuk admin.');
      navigate('/');
      return;
    }
    fetchData();
  }, [isAdmin, navigate]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token') || '';
      
      // Fetch products
      const productsRes = await productsApi.getAll();
      setProducts(productsRes.data || []);

      // Fetch orders
      const ordersRes = await ordersApi.getAllOrders(token);
      setOrders(ordersRes.data || []);

      // Calculate stats
      const totalRevenue = (ordersRes.data || []).reduce(
        (sum: number, order: any) => sum + (order.totalAmount || 0),
        0
      );
      const pendingOrders = (ordersRes.data || []).filter(
        (order: any) => order.status === 'pending'
      ).length;

      setStats({
        totalProducts: productsRes.count || 0,
        totalOrders: ordersRes.count || 0,
        totalRevenue,
        pendingOrders,
      });
    } catch (error: any) {
      console.error('Error fetching data:', error);
      toast.error('Gagal memuat data');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateOrderStatus = async (orderId: string, status: string) => {
    try {
      const token = localStorage.getItem('token') || '';
      await ordersApi.updateStatus(orderId, { status }, token);
      toast.success('Status order berhasil diperbarui');
      fetchData();
    } catch (error) {
      toast.error('Gagal memperbarui status order');
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      pending: 'default',
      confirmed: 'secondary',
      processing: 'default',
      ready: 'default',
      returned: 'default',
      cancelled: 'destructive',
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  const getPaymentStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      unpaid: 'destructive',
      partial: 'default',
      paid: 'default',
    };
    const colors: Record<string, string> = {
      unpaid: 'bg-red-100 text-red-800',
      partial: 'bg-yellow-100 text-yellow-800',
      paid: 'bg-green-100 text-green-800',
    };
    return (
      <Badge variant={variants[status] || 'default'} className={colors[status]}>
        {status === 'unpaid' ? 'Belum Bayar' : status === 'partial' ? 'DP' : 'Lunas'}
      </Badge>
    );
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900" data-testid="admin-dashboard-title">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">Selamat datang, {user?.username || 'Admin'}</p>
            </div>
            <Button onClick={logout} variant="outline" data-testid="admin-logout-button">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Produk</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="total-products">{stats.totalProducts}</div>
              <p className="text-xs text-muted-foreground">Produk tersedia</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="total-orders">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">{stats.pendingOrders} pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="total-revenue">
                Rp {stats.totalRevenue.toLocaleString('id-ID')}
              </div>
              <p className="text-xs text-muted-foreground">Total pendapatan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="pending-orders">{stats.pendingOrders}</div>
              <p className="text-xs text-muted-foreground">Perlu diproses</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="orders" className="space-y-4">
          <TabsList>
            <TabsTrigger value="orders" data-testid="orders-tab">Orders</TabsTrigger>
            <TabsTrigger value="products" data-testid="products-tab">Produk</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Semua Orders</CardTitle>
                <CardDescription>Kelola pesanan dari customer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Pembayaran</TableHead>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center text-gray-500">
                            Belum ada order
                          </TableCell>
                        </TableRow>
                      ) : (
                        orders.map((order: any) => (
                          <TableRow key={order._id}>
                            <TableCell className="font-mono text-xs">
                              {order._id.substring(0, 8)}...
                            </TableCell>
                            <TableCell>
                              {order.userId?.firstName} {order.userId?.lastName}
                            </TableCell>
                            <TableCell>Rp {order.totalAmount?.toLocaleString('id-ID')}</TableCell>
                            <TableCell>{getStatusBadge(order.status)}</TableCell>
                            <TableCell>{getPaymentStatusBadge(order.paymentStatus)}</TableCell>
                            <TableCell>
                              {new Date(order.createdAt).toLocaleDateString('id-ID')}
                            </TableCell>
                            <TableCell>
                              <select
                                className="text-sm border rounded px-2 py-1"
                                value={order.status}
                                onChange={(e) =>
                                  handleUpdateOrderStatus(order._id, e.target.value)
                                }
                                data-testid={`order-status-select-${order._id}`}
                              >
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="processing">Processing</option>
                                <option value="ready">Ready</option>
                                <option value="returned">Returned</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Semua Produk</CardTitle>
                <CardDescription>Daftar produk yang tersedia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nama Produk</TableHead>
                        <TableHead>Kategori</TableHead>
                        <TableHead>Harga/Hari</TableHead>
                        <TableHead>Stok</TableHead>
                        <TableHead>Rating</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-gray-500">
                            Belum ada produk
                          </TableCell>
                        </TableRow>
                      ) : (
                        products.map((product: any) => (
                          <TableRow key={product._id}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>Rp {product.price?.toLocaleString('id-ID')}</TableCell>
                            <TableCell>
                              <Badge variant={product.stock > 0 ? 'default' : 'destructive'}>
                                {product.stock} unit
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {product.rating} ⭐ ({product.reviews} reviews)
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
