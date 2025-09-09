import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cloud, 
  Brain, 
  Code, 
  Shield, 
  Zap,
  Server,
  BarChart3,
  GitBranch,
  Container
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Big Data & Analytics',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Apache Spark', level: 95 },
      { name: 'Scala/PySpark', level: 90 },
      { name: 'Snowflake', level: 88 },
      { name: 'Apache Airflow', level: 85 }
    ]
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'AWS (EMR, S3, EC2)', level: 92 },
      { name: 'Google Cloud Platform', level: 78 },
      { name: 'Azure Services', level: 75 },
      { name: 'Kubernetes', level: 80 }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'LLM Integration', level: 95 },
      { name: 'LangChain/Agents', level: 90 },
      { name: 'Vector Databases', level: 88 },
      { name: 'MLOps', level: 82 }
    ]
  },
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Scala', level: 85 },
      { name: 'JavaScript/TypeScript', level: 88 },
      { name: 'SQL', level: 92 }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Server,
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'Infrastructure as Code', level: 85 },
      { name: 'Monitoring & Logging', level: 87 }
    ]
  },
  {
    title: 'Automation & Integration',
    icon: Zap,
    color: 'from-pink-500 to-red-500',
    skills: [
      { name: 'Process Automation', level: 96 },
      { name: 'API Development', level: 90 },
      { name: 'Workflow Orchestration', level: 88 },
      { name: 'System Integration', level: 92 }
    ]
  }
];



export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
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
              The Technology Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning big data, cloud platforms, AI/ML, and automation technologies
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/25 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>



        {/* GitHub Contribution Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Development Activity
            </span>
          </h3>
          
          <div className="bg-slate-900/25 border border-slate-700 rounded-xl p-8">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">Commits This Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">8</div>
                <div className="text-sm text-gray-400">Languages Used</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4 text-cyan-400" />
                <span>Continuous Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Container className="w-4 h-4 text-green-400" />
                <span>Containerized Deployments</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span>Performance Monitoring</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}