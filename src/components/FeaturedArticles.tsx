import { ArrowRight, ArrowLeft, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { usePosts } from "@/hooks/usePosts";

export const FeaturedArticles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: posts, isLoading, error } = usePosts(); 

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / 1.2;
      container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 px-2 sm:px-4 lg:px-6 bg-white dark:bg-slate-900">
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">
            Artigos em destaque
          </h2>
          <div className="flex gap-6 overflow-x-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-full sm:w-[400px] md:w-[500px] lg:w-[420px]">
                <div className="h-64 bg-gray-200 dark:bg-slate-700 rounded-xl animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !posts || posts.length === 0) {
    return (
      <section className="py-20 px-2 sm:px-4 lg:px-6 bg-white dark:bg-slate-900">
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">
            Artigos em destaque
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400">
            Nenhum artigo encontrado.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-2 sm:px-4 lg:px-6 bg-white dark:bg-slate-900">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">
          Artigos em destaque
        </h2>

        <div className="flex justify-end mb-4 gap-2">
          <button onClick={() => scroll("left")} className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition">
            <ArrowLeft className="w-5 h-5 text-slate-700 dark:text-white" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition">
            <ArrowRight className="w-5 h-5 text-slate-700 dark:text-white" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        >
          {posts.map((post) => (
            <Link
              to={`/post/${post._id}`}
              key={post._id}
              className="flex-shrink-0 w-full sm:w-[400px] md:w-[500px] lg:w-[420px] group"
            >
              <article className="h-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-3 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.author}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};