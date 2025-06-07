
import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">DevBlog</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Um blog dedicado a compartilhar conhecimento sobre desenvolvimento de software, dicas de programação e muito mais. Siga-me nas redes sociais para ficar por dentro das novidades!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Artigos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Frontend
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Backend
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  DevOps & Infraestrutura
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Boas Práticas
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Programação de baixo nível
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} DevBlog. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
