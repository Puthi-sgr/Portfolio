import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </span>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-gray-700 hover:text-purple-600 transition-colors">Work</a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#work" className="block text-gray-700 hover:text-purple-600 transition-colors">Work</a>
            <a href="#skills" className="block text-gray-700 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#contact" className="block text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}