import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { usePosts } from '@/hooks/usePosts';

const Articles = () => {
  const { data: articles, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-800 dark:text-white">Carregando artigos...</p>
        </div>
      </div>
    );
  }

  if (error || !articles || articles.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="text-center">
          <p className="text-red-500 dark:text-red-400">Nenhum artigo encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Artigos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link to={`/article/${article._id}`} key={article._id} className="block">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <h2 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{article.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Autor: {article.author}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Criado em: {new Date(article.createdAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles; 