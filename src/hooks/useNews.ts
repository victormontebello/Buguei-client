
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services/api';

export const useNews = (page = 1, limit = 10, category?: string) => {
  return useQuery({
    queryKey: ['news', page, limit, category],
    queryFn: () => apiService.news.getAll(page, limit, category),
  });
};

export const useNewsItem = (id: string) => {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => apiService.news.getById(id),
    enabled: !!id,
  });
};

export const useNewsByCategory = (category: string, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['news', 'category', category, page, limit],
    queryFn: () => apiService.news.getByCategory(category, page, limit),
    enabled: !!category,
  });
};

export const useLatestNews = (limit = 5) => {
  return useQuery({
    queryKey: ['news', 'latest', limit],
    queryFn: () => apiService.news.getLatest(limit),
  });
};
