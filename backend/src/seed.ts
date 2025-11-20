"import "dotenv/config";
import connectDB from "./config/database.js";
import Product from "./models/Product.js";
import User from "./models/User.js";

const seedProducts = [
  {
    name: "Tenda Kapasitas 4 Orang",
    category: "Tenda & Shelter",
    description:
      "Tenda berkualitas tinggi dengan kapasitas 4 orang, tahan air dan mudah dipasang. Cocok untuk camping keluarga.\",
    price: 75000,
    stock: 10,
    capacity: "4 orang",
    brand: "Eiger",
    specifications: {
      berat: "3.5 kg",
      dimensi: "210 x 210 x 130 cm",
      material: "Polyester 190T",
      waterproof: "2000mm",
    },
    rating: 4.8,
    reviews: 145,
  },
  {
    name: "Tenda Dome 2 Orang",
    category: "Tenda & Shelter",
    description:
      "Tenda dome ringan untuk 2 orang, ideal untuk pendakian dan camping ringan.",
    price: 50000,
    stock: 15,
    capacity: "2 orang",
    brand: "Consina",
    specifications: {
      berat: "2 kg",
      dimensi: "200 x 150 x 110 cm",
      material: "Polyester",
      waterproof: "1500mm",
    },
    rating: 4.6,
    reviews: 98,
  },
  {
    name: "Carrier 60L",
    category: "Tas Carrier",
    description:
      "Tas carrier 60 liter dengan sistem suspension nyaman, banyak kompartemen dan rain cover.\",
    price: 40000,
    stock: 12,
    capacity: "60L",
    brand: "Deuter",
    specifications: {
      volume: "60 liter",
      berat: "2.3 kg",
      material: "Nylon ripstop",
      system: "Aircomfort Sensic Vario",
    },
    rating: 4.9,
    reviews: 203,
  },
  {
    name: "Sleeping Bag Suhu -5°C",
    category: "Sleeping Gear",
    description:
      "Sleeping bag hangat untuk suhu ekstrem hingga -5°C, ringan dan mudah dikemas.",
    price: 35000,
    stock: 20,
    capacity: "1 orang",
    brand: "Rei",
    specifications: {
      temperature_rating: "-5°C hingga 10°C",
      berat: "1.2 kg",
      material: "Hollow fiber",
      ukuran: "210 x 80 cm",
    },
    rating: 4.7,
    reviews: 167,
  },
  {
    name: "Kompor Camping Portabel",
    category: "Masak & Dapur",
    description:
      "Kompor gas portable dengan sistem windproof, efisien dan aman untuk memasak di outdoor.",
    price: 25000,
    stock: 18,
    brand: "Kovea",
    specifications: {
      berat: "0.5 kg",
      fuel: "Gas cartridge",
      power: "3000W",
      material: "Stainless steel",
    },
    rating: 4.5,
    reviews: 89,
  },
  {
    name: "Sepatu Hiking Waterproof",
    category: "Hiking Gear",
    description:
      "Sepatu hiking waterproof dengan grip kuat, ankle support, dan breathable membrane.",
    price: 60000,
    stock: 8,
    brand: "Salomon",
    specifications: {
      material: "Gore-Tex + Suede",
      sole: "Contagrip rubber",
      waterproof: "Yes",
      ankle_support: "Mid-cut",
    },
    rating: 4.8,
    reviews: 234,
  },
  {
    name: "Headlamp LED 500 Lumens",
    category: "Lighting",
    description:
      "Headlamp LED super terang 500 lumens, waterproof dengan 4 mode pencahayaan.",
    price: 15000,
    stock: 25,
    brand: "Petzl",
    specifications: {
      brightness: "500 lumens",
      battery: "Rechargeable",
      waterproof: "IPX6",
      modes: "4 modes",
    },
    rating: 4.6,
    reviews: 156,
  },
  {
    name: "Matras Lipat Self-Inflating",
    category: "Sleeping Gear",
    description:
      "Matras self-inflating yang nyaman, ringan dan mudah dibawa. Ketebalan 5cm.",
    price: 30000,
    stock: 14,
    brand: "Thermarest",
    specifications: {
      thickness: "5 cm",
      berat: "1.5 kg",
      material: "Polyester + Foam",
      ukuran: "180 x 50 cm",
    },
    rating: 4.7,
    reviews: 112,
  },
  {
    name: "Nesting Cookware Set",
    category: "Masak & Dapur",
    description:
      "Set peralatan masak camping yang compact, terdiri dari panci, wajan, piring dan sendok.",
    price: 45000,
    stock: 10,
    brand: "GSI Outdoors",
    specifications: {
      pieces: "8 pieces",
      material: "Anodized aluminum",
      berat: "1.8 kg",
      non_stick: "Yes",
    },
    rating: 4.5,
    reviews: 78,
  },
  {
    name: "Trekking Pole Adjustable",
    category: "Hiking Gear",
    description:
      "Trekking pole aluminium adjustable dengan shock absorber dan grip ergonomis.",
    price: 20000,
    stock: 16,
    brand: "Black Diamond",
    specifications: {
      material: "Aluminum 7075",
      length: "65-135 cm adjustable",
      berat: "0.6 kg per pair",
      grip: "Cork",
    },
    rating: 4.6,
    reviews: 92,
  },
];

async function seedDatabase() {
  try {
    await connectDB();

    console.log("🗑️  Menghapus data lama...");
    await Product.deleteMany({});
    await User.deleteMany({ role: "customer" }); // Hanya hapus customer, biarkan admin

    console.log("🌱 Seeding products...");
    await Product.insertMany(seedProducts);
    console.log(`✅ ${seedProducts.length} produk berhasil ditambahkan`);

    // Create test customer
    const testCustomer = new User({
      email: "customer@test.com",
      password: "password123",
      firstName: "John",
      lastName: "Doe",
      phone: "08123456789",
      role: "customer",
      isVerified: true,
    });
    await testCustomer.save();
    console.log("✅ Test customer berhasil dibuat (customer@test.com / password123)");

    console.log("
🎉 Database seeding selesai!");
    console.log("
📝 Akun untuk testing:");
    console.log("   Admin: admin / admin123");
    console.log("   Customer: customer@test.com / password123");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
"
