const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem("authToken");
};

// API helper function
export const apiCall = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const url = `${API_URL}${endpoint}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const token = getToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Terjadi kesalahan pada server");
  }

  return data;
};

// Auth APIs
export const authAPI = {
  adminLogin: (username: string, password: string) =>
    apiCall("/auth/admin/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }),

  customerLogin: (email: string, password: string) =>
    apiCall("/auth/customer/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  customerRegister: (email: string, password: string, firstName?: string, lastName?: string, phone?: string) =>
    apiCall("/auth/customer/register", {
      method: "POST",
      body: JSON.stringify({ email, password, firstName, lastName, phone }),
    }),

  getMe: () => apiCall("/auth/me"),
};

// Product APIs
export const productAPI = {
  getAll: (category?: string, search?: string, sort?: string) => {
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (search) params.append("search", search);
    if (sort) params.append("sort", sort);
    return apiCall(`/products?${params.toString()}`);
  },

  getById: (id: string) => apiCall(`/products/${id}`),

  create: (product: any) =>
    apiCall("/products", {
      method: "POST",
      body: JSON.stringify(product),
    }),

  update: (id: string, product: any) =>
    apiCall(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    }),

  delete: (id: string) =>
    apiCall(`/products/${id}`, {
      method: "DELETE",
    }),

  updateStock: (id: string, quantity: number) =>
    apiCall(`/products/${id}/stock`, {
      method: "PATCH",
      body: JSON.stringify({ quantity }),
    }),
};

// Order APIs
export const orderAPI = {
  create: (order: any) =>
    apiCall("/orders", {
      method: "POST",
      body: JSON.stringify(order),
    }),

  getMyOrders: () => apiCall("/orders"),

  getById: (id: string) => apiCall(`/orders/${id}`),

  uploadPaymentProof: (orderId: string, paymentProof: string) =>
    apiCall(`/orders/${orderId}/payment-proof`, {
      method: "POST",
      body: JSON.stringify({ paymentProof }),
    }),

  getAllOrders: () => apiCall("/orders/admin/all"),

  updateStatus: (orderId: string, status: string, paymentStatus?: string) =>
    apiCall(`/orders/${orderId}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status, paymentStatus }),
    }),
};
