import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 px-2 sm:px-4 lg:px-6">
      <div className="text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-slate-800"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
          Eai dev! Seja bem vindo. Sou Victor Montebello, {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Engenheiro de Software
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Seja muito bem vindo ao meu blog! Aqui você encontrará artigos sobre desenvolvimento de software, dicas de programação, e muito mais. Estou animado para compartilhar meu conhecimento e experiências com você.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/victormontebello"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-montebello-b91a79263/"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        
        <a
          href="/articles"
          className="inline-flex items-center space-x-2 bg-blue-600 dark:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span>Leia meus artigos</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
