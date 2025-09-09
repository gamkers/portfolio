import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Cloud, Shield, Zap } from 'lucide-react';

const skills = [
  { name: 'Big Data Engineering', level: 95, icon: Database, color: 'text-blue-400' },
  { name: 'AI/ML Development', level: 90, icon: Brain, color: 'text-green-400' },
  { name: 'Cloud Architecture', level: 88, icon: Cloud, color: 'text-cyan-400' },
  { name: 'Python/Scala', level: 92, icon: Code, color: 'text-yellow-400' },
  { name: 'Cybersecurity', level: 85, icon: Shield, color: 'text-red-400' },
  { name: 'Automation', level: 96, icon: Zap, color: 'text-purple-400' }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              The Data Visionary
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building AI systems that don't just process data—they understand it
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-green-500/20 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                    AM
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                With 2.6+ years of experience in big data engineering and AI automation, 
                I specialize in creating intelligent systems that bridge the gap between 
                raw data and actionable insights.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise spans from petabyte-scale data processing on AWS to building 
                revolutionary AI agents that generate real business value. I've successfully 
                automated revenue generation systems, created viral Discord bots with agentic 
                AI architecture, and built a community of 227K+ followers.
              </p>
              <div className="bg-slate-800/25 rounded-lg p-4 border-l-4 border-cyan-400">
                <p className="text-cyan-400 font-semibold text-lg italic">
                  "I don't just build systems—I architect intelligent solutions that learn, 
                  adapt, and deliver exponential value."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Radar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-center text-cyan-400 mb-8">Core Expertise</h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/25 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-green-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-4 text-center border border-cyan-500/20">
                <div className="text-2xl font-bold text-cyan-400">40%</div>
                <div className="text-sm text-gray-400">Performance Improvement</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-4 text-center border border-green-500/20">
                <div className="text-2xl font-bold text-green-400">80%</div>
                <div className="text-sm text-gray-400">Process Automation</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}