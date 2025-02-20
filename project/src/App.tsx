import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <ThemeToggle />
      <ProgressBar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Mey ChethaPuthi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
