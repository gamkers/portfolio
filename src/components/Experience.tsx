import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Calendar, TrendingUp, Users, Award } from 'lucide-react';

const experiences = [
  {
    company: 'InfoCepts',
    role: 'Data Engineer',
    location: 'Chennai, India',
    duration: '2022 - Present',
    type: 'Full-time',
    description: 'Leading big data engineering initiatives and cloud infrastructure optimization for enterprise clients.',
    achievements: [
      'Architected and executed complete MySQL to Snowflake migration with zero downtime',
      'Improved data processing efficiency by 40% through advanced optimization techniques',
      'Built scalable AWS EMR clusters processing petabytes of data with 99.9% uptime',
      'Developed custom Snowflake functions and stored procedures for complex business logic',
      'Implemented comprehensive data governance and quality assurance frameworks',
      'Worked cross-functional teams in delivering critical data infrastructure projects'
    ],
    technologies: ['AWS EMR', 'Apache Spark', 'Snowflake', 'Python', 'Scala', 'Apache Airflow', 'Docker'],
    impact: {
      performance: '+40%',
      uptime: '99.9%',
      teamSize: '30+ members',
      projects: '12+ pipelines'
    }
  },
  {
    company: 'GAMKERS',
    role: 'AI Solutions Architect - Personal branding',
    location: 'Chennai',
    duration: '2023 - Present',
    type: 'Entrepreneur',
    description: 'Building revolutionary AI automation systems and generating revenue through innovative solutions.',
    achievements: [
      'Developed GAMKERSAI: Revolutionary Discord bot with agentic AI architecture',
      'Built AI-powered revenue generation engine earning ₹1+ lakh in 6 months',
      'Created JARVIS AI assistant with advanced contextual memory and voice processing',
      'Grew social media following from 500 to 227K+ through viral AI projects',
      'Developed privacy-first analytics platform with natural language querying',
      'Built enterprise-grade CLI tool for natural language to shell command translation'
    ],
    technologies: ['LLM APIs', 'LangChain', 'Discord.py', 'Vector Databases', 'N8N', 'Supabase', 'React'],
    impact: {
      revenue: '₹1+ Lakh',
      followers: '227K+',
      engagement: '+300%',
      users: '10K+ active'
    }
  },
  {
    company: 'Cybersecurity Community',
    role: 'Technical Content Creator',
    location: 'Global',
    duration: '2021 - Present',
    type: 'Community Building',
    description: 'Educating and inspiring the next generation of cybersecurity professionals through content creation.',
    achievements: [
      'Created comprehensive cybersecurity educational content reaching 227K+ followers',
      'Developed automated security news tracking and publishing system',
      'Built interactive CTF challenge generation platform',
      'Mentored 500+ students in cybersecurity career transitions',
      'Delivered expert-level security guidance through AI-powered systems',
      'Established thought leadership in AI-driven cybersecurity education'
    ],
    technologies: ['Content Creation', 'Educational Platforms', 'AI Content Generation', 'Social Media APIs'],
    impact: {
      students: '500+',
      followers: '227K+',
      engagement: '95%',
      courses: '15+ created'
    }
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
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
              The Cloud Engineer
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of transforming enterprise data infrastructure and building revolutionary AI systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-green-500 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full transform md:-translate-x-2 border-4 border-slate-950 z-10"></div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-slate-900/25 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                        <Building className="w-6 h-6 text-cyan-400" />
                        <div>
                          <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                          <p className="text-cyan-400 font-medium">{experience.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:text-right">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                        {experience.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6">{experience.description}</p>

                    {/* Impact Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {Object.entries(experience.impact).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-green-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {experience.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-300 text-sm">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-gray-300 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overall Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/25 to-slate-900/25 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Career Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">40%</div>
                <div className="text-sm text-gray-400">Avg. Performance Improvement</div>
              </div>
              <div className="group">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">227K+</div>
                <div className="text-sm text-gray-400">Community Members</div>
              </div>
              <div className="group">
                <Building className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="group">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">2.6+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}