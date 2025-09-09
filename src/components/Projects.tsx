import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronRight, Bot, DollarSign, Brain, Terminal, BarChart3, Database } from 'lucide-react';

const projects = [
  {
    id: 'gamkersai',
    title: 'GAMKERSAI',
    subtitle: 'Revolutionizing Discord Community Engagement through Agentic AI',
    description: 'An autonomous AI agent with dual LLM architecture that transforms Discord communities through intelligent cybersecurity challenges and expert-level guidance.',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    tags: ['Agentic AI', 'Discord.py', 'LLM', 'Cybersecurity', 'Python'],
    metrics: [
      { label: 'User Engagement', value: '+40%' },
      { label: 'Operation Time', value: '24/7' },
      { label: 'Response Accuracy', value: '95%' }
    ],
    features: [
      'Dual LLM system with deepseek-r1-distill-llama-70b and llama3-70b-8192',
      'Autonomous CTF challenge generation with adaptive difficulty',
      'Expert-level cybersecurity guidance and code review',
      'Multi-platform orchestration (Discord, Telegram, Music services)',
      'Self-improving knowledge base with vector storage',
      'Real-time security threat analysis and response'
    ],
    techStack: ['Python', 'Discord.py', 'Groq API', 'Vector DB', 'Multi-threading', 'Custom Prompt Engineering'],
    learnMore: 'https://www.linkedin.com/posts/gamkers_agenticai-discordbot-cybersecurity-activity-7319230773335592960-4WGa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuE1GABcTnapcrQADUJoMMbWKt0O-WKGRA',
    impact: 'Transformed community engagement with autonomous AI that creates personalized learning experiences'
  },
  {
    id: 'revenue-engine',
    title: 'AI-Powered Revenue Generation Engine',
    subtitle: 'Automated Instagram Marketing & Sales System',
    description: 'Comprehensive automation system that generated ₹1+ lakh revenue through AI-driven content creation, lead management, and sales processes.',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    tags: ['Revenue Generation', 'Instagram API', 'Sales Automation', 'Content AI', 'Analytics'],
    metrics: [
      { label: 'Revenue Generated', value: '₹1+ Lakh' },
      { label: 'Conversion Rate', value: '30-50%' },
      { label: 'Daily Story Views', value: '1000+' }
    ],
    features: [
      'Automated Instagram content generation using Groq LLM and Google Gemini',
      'Intelligent sales agent with objection handling',
      'CyberGenie story bot for automated security news publishing',
      'Comprehensive lead tracking with Supabase analytics',
      'N8N workflow orchestration for seamless automation',
      'Real-time engagement analytics and optimization'
    ],
    techStack: ['Groq LLM', 'Google Gemini', 'N8N', 'Supabase', 'Instagram API', 'Telegram Bot API'],
    learnMore: 'https://www.linkedin.com/posts/gamkers_aiautomation-cybersecurity-instagramgrowth-activity-7351987958943510528-QM2e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuE1GABcTnapcrQADUJoMMbWKt0O-WKGRA',
    impact: '300% engagement boost with 95% customer satisfaction rate'
  },
  {
    id: 'jarvis-ai',
    title: 'JARVIS AI Assistant',
    subtitle: 'Advanced Conversational AI System',
    description: 'Sophisticated AI assistant with voice/text interfaces, contextual memory, and agentic reasoning capabilities for 24/7 intelligent assistance.',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    tags: ['Conversational AI', 'Voice Processing', 'LangChain', 'Context Memory', 'Task Management'],
    metrics: [
      { label: 'Context Retention', value: '100%' },
      { label: 'Response Time', value: '<2s' },
      { label: 'Task Accuracy', value: '92%' }
    ],
    features: [
      'Dual voice and text interaction with wake-word detection',
      'LangChain agents with comprehensive tool integration',
      'FAISS vector database for semantic search and memory',
      'Persistent conversation context and user preferences',
      'Intelligent task management and scheduling system',
      'Proactive assistance with context-aware suggestions'
    ],
    techStack: ['Google Gemini', 'Groq Llama3', 'LangChain', 'FAISS', 'Voice API', 'React Frontend'],
    demo: 'Interactive voice and chat demonstrations',
    sourceCode: 'https://github.com/gamkers/Project_Jarvis',
    impact: 'Personalized AI companion with advanced contextual understanding'
  },
  {
    id: 'flaw-hunt',
    title: 'Flaw Hunt CLI',
    subtitle: 'AI-Powered Terminal Assistant',
    description: 'Revolutionary command-line tool that translates natural language into precise shell commands with built-in safety validation.',
    icon: Terminal,
    color: 'from-orange-500 to-red-500',
    tags: ['CLI Tool', 'Natural Language', 'Shell Commands', 'Safety Validation', 'Cross-Platform'],
    metrics: [
      { label: 'Command Accuracy', value: '98%' },
      { label: 'Safety Checks', value: '100%' },
      { label: 'Platform Support', value: '3 OS' }
    ],
    features: [
      'Natural language to shell command translation',
      'Multi-layered safety validation before execution',
      'Cross-platform support (Windows, macOS, Linux)',
      'Context-aware project and environment suggestions',
      'Docker and CI/CD workflow integration',
      'User preference learning and command optimization'
    ],
    techStack: ['Advanced LLMs', 'Cross-platform Shell APIs', 'Security Validation', 'Context Engine'],
    demo: 'http://localhost:5173/FlawHunt/#features',
    impact: 'Bridges gap between natural language and system administration'
  },
  {
    id: 'clearvision-ai',
    title: 'ClearVision AI',
    subtitle: 'Privacy-First Analytics Platform',
    description: 'Advanced analytics platform with AI agents that process data without compromising privacy through schema-only analysis.',
    icon: BarChart3,
    color: 'from-indigo-500 to-purple-500',
    tags: ['Privacy-First', 'AI Agents', 'Data Analytics', 'Natural Language', 'Multi-Format'],
    metrics: [
      { label: 'Data Privacy', value: '100%' },
      { label: 'Format Support', value: '4 Types' },
      { label: 'Agent Accuracy', value: '94%' }
    ],
    features: [
      'Schema-only processing with zero raw data retention',
      'AI agent framework for natural language data queries',
      'Multi-format support (CSV, Excel, JSON, Parquet)',
      'Automated data profiling and quality assessment',
      'One-click dashboard and report generation',
      'Advanced SQL generation from natural language'
    ],
    techStack: ['Advanced LLM', 'Multi-format Processors', 'AI Agent Framework', 'Privacy Engine'],
    demo: 'https://clearvisionai.streamlit.app/',
    sourceCode: 'https://github.com/gamkers/ClearVision.AI',
    impact: 'Democratizes data analytics while ensuring complete privacy'
  },
  {
    id: 'enterprise-migration',
    title: 'Scalable Big Data Platform on AWS',
    subtitle: 'End-to-End Big Data Infrastructure',
    description: 'Built comprehensive big data processing infrastructure using AWS EMR, Spark, and Airflow orchestration handling petabyte-scale data workloads with 99.9% uptime.',
    icon: Database,
    color: 'from-teal-500 to-green-500',
    tags: ['Big Data', 'AWS EMR', 'Apache Spark', 'Data Engineering', 'Cloud Infrastructure'],
    metrics: [
      { label: 'Data Scale', value: 'Petabyte+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'AWS Services', value: '8+ Integrated' }
    ],
    features: [
      'Built end-to-end big data processing infrastructure using AWS EMR, Spark, and Airflow orchestration handling petabyte-scale data workloads',
      'Integrated comprehensive AWS service ecosystem (Lambda, Glue, S3, Athena, DynamoDB) creating seamless data ingestion, transformation, and analytics pipelines',
      'Implemented monitoring and alerting systems ensuring 99.9% uptime and automated failure recovery mechanisms',
      'Scalable architecture supporting dynamic resource allocation',
      'Advanced data partitioning and optimization strategies',
      'Real-time data streaming and batch processing capabilities'
    ],
    techStack: ['AWS EMR', 'Apache Spark', 'Apache Airflow', 'AWS Lambda', 'AWS Glue', 'S3', 'Athena', 'DynamoDB'],
    impact: 'Scalable big data platform processing petabytes with enterprise-grade reliability'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('features');

  return (
    <section id="projects" className="py-20 relative">
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
              AI Innovation Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionary projects that demonstrate the power of AI automation and data engineering excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-slate-900/25 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                   onClick={() => setSelectedProject(project.id)}>
                
                {/* Project Icon & Title */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Subtitle */}
                <p className="text-sm text-cyan-400 mb-3 font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-800 text-xs text-gray-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-800 text-xs text-gray-300 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-bold text-green-400">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/50 rounded-xl border border-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color}`}>
                            <project.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                            <p className="text-cyan-400 text-lg">{project.subtitle}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white text-2xl"
                        >
                          ×
                        </button>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-slate-800/25 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">{metric.value}</div>
                            <div className="text-sm text-gray-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tabs */}
                      <div className="flex space-x-4 mb-6 border-b border-slate-700">
                        {['features', 'tech-stack', 'impact'].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 px-1 text-sm font-medium transition-colors ${
                              activeTab === tab
                                ? 'text-cyan-400 border-b-2 border-cyan-400'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      <div className="mb-8">
                        {activeTab === 'features' && (
                          <div className="space-y-3">
                            <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                            {project.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                <p className="text-gray-300">{feature}</p>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {activeTab === 'tech-stack' && (
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Technology Stack</h4>
                            <div className="flex flex-wrap gap-3">
                              {project.techStack.map((tech, idx) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-medium"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'impact' && (
                          <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white mb-4">Impact & Results</h4>
                            <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/20 rounded-lg p-4">
                              <p className="text-gray-300 text-lg">{project.impact}</p>
                            </div>
                            {project.demo && (
                              <div className="bg-slate-800/25 rounded-lg p-4">
                                <p className="text-gray-400 mb-2">Demo Available:</p>
                                <p className="text-cyan-400">{project.demo}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all"
                          >
                            <Play className="w-5 h-5" />
                            <span>View Demo</span>
                          </a>
                        )}
                        {project.sourceCode && (
                          <a 
                            href={project.sourceCode} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 border-2 border-cyan-400 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all"
                          >
                            <Github className="w-5 h-5" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {project.learnMore && (
                          <a 
                            href={project.learnMore} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 border border-slate-600 rounded-lg text-gray-400 font-semibold hover:text-white hover:border-slate-500 transition-all"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>Learn More</span>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}