
import { 
  Post, 
  News,
} from '@/types/api';

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  posts = {
    getAll: (): Promise<Post[]> =>
      this.request(`/posts`),

    getById: (id: string): Promise<Post> =>
      this.request(`/posts/${id}`),

    create: (data): Promise<Post> =>
      this.request('/posts', {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    update: (id: string, data): Promise<Post> =>
      this.request(`/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),

    delete: (id: string): Promise<void> =>
      this.request(`/posts/${id}`, {
        method: 'DELETE',
      }),

    publish: (id: string): Promise<Post> =>
      this.request(`/posts/${id}/publish`, {
        method: 'PATCH',
      }),
  };

  news = {
    getAll: (page = 1, limit = 10, category?: string): Promise<News[]> => {
      const params = new URLSearchParams({ 
        page: page.toString(), 
        limit: limit.toString() 
      });
      if (category) params.append('category', category);
      
      return this.request(`/news?${params.toString()}`);
    },

    getById: (id: string): Promise<News> =>
      this.request(`/news/${id}`),

    getByCategory: (category: string, page = 1, limit = 10): Promise<News[]> =>
      this.request(`/news/category/${category}?page=${page}&limit=${limit}`),

    getLatest: (limit = 5): Promise<News[]> =>
      this.request(`/news/latest?limit=${limit}`),
  };
}

export const apiService = new ApiService();
