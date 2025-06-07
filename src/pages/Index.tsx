
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <Navigation />
      <Hero />
      <FeaturedArticles />
      <Footer />
    </div>
  );
};

export default Index;
