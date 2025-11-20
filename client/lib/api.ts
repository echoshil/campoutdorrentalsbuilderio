const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface RequestOptions extends RequestInit {
  token?: string;
}

class ApiError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data: any) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = 'ApiError';
  }
}

const request = async (endpoint: string, options: RequestOptions = {}) => {
  const { token, ...fetchOptions } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(data.message || 'Request failed', response.status, data);
  }

  return data;
};

// Auth APIs
export const authApi = {
  adminLogin: (username: string, password: string) =>
    request('/api/auth/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),

  customerLogin: (email: string, password: string) =>
    request('/api/auth/customer/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  customerRegister: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
  }) =>
    request('/api/auth/customer/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getMe: (token: string) =>
    request('/api/auth/me', {
      token,
    }),
};

// Products APIs
export const productsApi = {
  getAll: (params?: { category?: string; search?: string; sort?: string }) => {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.search) queryParams.append('search', params.search);
    if (params?.sort) queryParams.append('sort', params.sort);

    const query = queryParams.toString();
    return request(`/api/products${query ? `?${query}` : ''}`);
  },

  getById: (id: string) => request(`/api/products/${id}`),

  create: (data: any, token: string) =>
    request('/api/products', {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    }),

  update: (id: string, data: any, token: string) =>
    request(`/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      token,
    }),

  delete: (id: string, token: string) =>
    request(`/api/products/${id}`, {
      method: 'DELETE',
      token,
    }),

  updateStock: (id: string, quantity: number, token: string) =>
    request(`/api/products/${id}/stock`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
      token,
    }),
};

// Orders APIs
export const ordersApi = {
  create: (data: any, token: string) =>
    request('/api/orders', {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    }),

  getUserOrders: (token: string) =>
    request('/api/orders', {
      token,
    }),

  getById: (id: string, token: string) =>
    request(`/api/orders/${id}`, {
      token,
    }),

  uploadPaymentProof: (id: string, paymentProof: string, token: string) =>
    request(`/api/orders/${id}/payment-proof`, {
      method: 'POST',
      body: JSON.stringify({ paymentProof }),
      token,
    }),

  getAllOrders: (token: string) =>
    request('/api/orders/admin/all', {
      token,
    }),

  updateStatus: (
    id: string,
    data: { status?: string; paymentStatus?: string },
    token: string
  ) =>
    request(`/api/orders/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      token,
    }),
};

export { ApiError };
