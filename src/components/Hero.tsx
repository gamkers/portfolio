import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink, Users, TrendingUp, Shield } from 'lucide-react';

const techStack = ['Python', 'Spark', 'AWS', 'Docker', 'Snowflake', 'AI/ML'];
const stats = [
  { value: '₹1+ Lakh', label: 'Revenue Generated' },
  { value: '227K+', label: 'Followers' },
  { value: '99.9%', label: 'Pipeline Reliability' },
  { value: '2.6+ Years', label: 'Experience' }
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Transforming Data into Intelligence';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-0">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech}
            className="absolute text-cyan-400/20 font-mono text-sm"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.5 
            }}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-6">
            <span className="text-white">
              AKASH M
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-4 h-12">
            <span className="text-cyan-400">Data Engineer</span>
            <span className="text-gray-400 mx-4">•</span>
            <span className="text-green-400">AI Solutions Architect</span>
          </div>

          <div className="text-xl sm:text-2xl text-gray-400 mb-12 h-8 font-mono">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-cyan-400"
            >
              |
            </motion.span>
          </div>

          {/* Statistics Grid */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-900/25 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Projects</span>
            </motion.button>
            
            <motion.a
              href="https://github.com/gamkers/gamkers-portfolio/blob/5b8c974f8c6a6fca17e7cb9fdccd140eeeab3e7d/AkashMCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-cyan-400 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Key Highlights */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>Agentic AI Systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Cybersecurity Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Community Builder</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}