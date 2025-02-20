import React from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import FloatingElements from "./FloatingElements";
import LevelIndicator from "./LevelIndicator";
import user from "../assets/user1.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient"></div>

      {/* Interactive Floating Elements */}
      <FloatingElements />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-block">
              <LevelIndicator />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Software engineer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              I am a computer science student with a passion for software
              engineering. My goal of becoming an engineer is to innovate
              software solutions that eases daily lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                View My Work
                <ArrowDown className="w-5 h-5" />
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Puthi-sgr"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mey-chethaputhi/"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-spin-slow"></div>
              {/* Image Container */}
              <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <img
                    src={user}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* Background Blur Effect */}
            <div className="absolute -inset-4 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
