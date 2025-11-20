# OutdoorCamp Backend API

Backend untuk website rental perlengkapan camping OutdoorCamp.

## Setup Lokal

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy `.env.example` ke `.env` dan isi dengan data Anda:

```bash
cp .env.example .env
```

Edit `.env`:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://dikirifala12_db_user:wZAF5BExkkQHTKzy@rentalscamp.gtk87fd.mongodb.net/?appName=rentalscamp
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

### 3. Run Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5000`

### 4. Build untuk Production

```bash
npm run build
npm start
```

## Deploy ke Railway

### 1. Persiapan

- Pastikan sudah install Railway CLI: https://docs.railway.app/cli/installation

### 2. Login ke Railway

```bash
railway login
```

### 3. Initialize Railway Project

```bash
railway init
```

### 4. Set Environment Variables di Railway

```bash
railway variables set MONGODB_URI "mongodb+srv://dikirifala12_db_user:wZAF5BExkkQHTKzy@rentalscamp.gtk87fd.mongodb.net/?appName=rentalscamp"
railway variables set JWT_SECRET "your-secret-key"
railway variables set ADMIN_USERNAME "admin"
railway variables set ADMIN_PASSWORD "admin123"
railway variables set CLIENT_URL "https://your-frontend-domain.com"
railway variables set NODE_ENV "production"
```

### 5. Deploy

```bash
railway up
```

### 6. Get Your Backend URL

Setelah deployment, Railway akan memberikan URL public backend Anda. Update `VITE_API_URL` di frontend dengan URL ini.

## API Endpoints

### Authentication

- `POST /api/auth/admin/login` - Admin Login
- `POST /api/auth/customer/login` - Customer Login
- `POST /api/auth/customer/register` - Customer Register
- `GET /api/auth/me` - Get Current User (require token)

### Products

- `GET /api/products` - Get All Products (with filters)
- `GET /api/products/:id` - Get Product by ID
- `POST /api/products` - Create Product (admin only)
- `PUT /api/products/:id` - Update Product (admin only)
- `DELETE /api/products/:id` - Delete Product (admin only)
- `PATCH /api/products/:id/stock` - Update Stock (admin only)

### Orders

- `POST /api/orders` - Create Order (customer)
- `GET /api/orders` - Get User Orders (customer)
- `GET /api/orders/:id` - Get Order Detail
- `POST /api/orders/:id/payment-proof` - Upload Payment Proof
- `GET /api/orders/admin/all` - Get All Orders (admin)
- `PATCH /api/orders/:id/status` - Update Order Status (admin)

## Database Schema

### User Collection

```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  role: "admin" | "customer",
  firstName: String,
  lastName: String,
  phone: String,
  address: String,
  identityNumber: String,
  identityType: "ktp" | "sim" | "passport",
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Collection

```javascript
{
  _id: ObjectId,
  name: String,
  category: String,
  description: String,
  price: Number,
  stock: Number,
  capacity: String,
  brand: String,
  image: String,
  specifications: Map,
  rating: Number,
  reviews: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [{
    productId: ObjectId,
    productName: String,
    quantity: Number,
    price: Number,
    startDate: Date,
    endDate: Date,
    durationDays: Number,
    subtotal: Number
  }],
  totalAmount: Number,
  status: "pending" | "confirmed" | "processing" | "ready" | "returned" | "cancelled",
  paymentMethod: "transfer" | "ewallet" | "cod",
  paymentProof: String,
  paymentStatus: "unpaid" | "partial" | "paid",
  depositPaid: Number,
  notes: String,
  pickupDate: Date,
  returnDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Teknologi

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Password**: bcryptjs
- **Language**: TypeScript

## Support

Untuk pertanyaan atau issue, hubungi tim development OutdoorCamp.
