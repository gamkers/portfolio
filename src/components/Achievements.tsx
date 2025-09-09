import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Award, 
  DollarSign,
  Target,
  Zap,
  Shield,
  Star
} from 'lucide-react';

const achievements = [
  {
    icon: DollarSign,
    title: 'Revenue Generation',
    value: '₹1+ Lakh',
    description: 'Generated through AI automation systems in 6 months',
    color: 'from-green-500 to-emerald-500',
    metrics: [
      'AI-powered Instagram marketing',
      '30-50% conversion rates',
      'Automated sales processes'
    ]
  },
  {
    icon: Users,
    title: 'Community Growth',
    value: '227K+',
    description: 'Followers across social media platforms',
    color: 'from-blue-500 to-cyan-500',
    metrics: [
      '500 to 227K growth',
      'Viral AI projects',
      'Educational content creation'
    ]
  },
  {
    icon: Target,
    title: 'Pipeline Reliability',
    value: '99.9%',
    description: 'Uptime for enterprise data processing systems',
    color: 'from-cyan-500 to-teal-500',
    metrics: [
      'Zero downtime migrations',
      'Automated recovery systems',
      'Comprehensive monitoring'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Performance Improvement',
    value: '40%',
    description: 'Average improvement in data processing efficiency',
    color: 'from-orange-500 to-red-500',
    metrics: [
      'Query optimization',
      'Infrastructure scaling',
      'Process automation'
    ]
  },
  {
    icon: Zap,
    title: 'Automation Rate',
    value: '80%',
    description: 'Of manual processes successfully automated',
    color: 'from-purple-500 to-indigo-500',
    metrics: [
      'ETL pipeline automation',
      'Report generation',
      'Data quality checks'
    ]
  },
  {
    icon: Shield,
    title: 'Security Score',
    value: '95%',
    description: 'Security compliance and best practices implementation',
    color: 'from-red-500 to-pink-500',
    metrics: [
      'Data privacy protection',
      'Security auditing',
      'Compliance frameworks'
    ]
  }
];

const recognitions = [
  {
    title: 'Top Performer Award',
    organization: 'InfoCepts',
    year: '2024',
    description: 'Recognized for exceptional performance in cloud migration projects'
  },
  {
    title: 'Innovation Excellence',
    organization: 'AI Community',
    year: '2024',
    description: 'For developing revolutionary Discord AI bot with agentic architecture'
  },
  {
    title: 'Community Impact Award',
    organization: 'Tech Influencers',
    year: '2024',
    description: 'For building and engaging a community of 227K+ followers'
  },
  {
    title: 'Revenue Generation Champion',
    organization: 'Entrepreneurship Hub',
    year: '2024',
    description: 'For successfully monetizing AI automation solutions'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    rating: 5,
    text: 'Akash transformed our data infrastructure completely. The 40% performance improvement he delivered exceeded all expectations.'
  },
  {
    name: 'Raj Patel',
    role: 'Data Science Manager',
    rating: 5,
    text: 'His AI automation systems are revolutionary. The revenue generation capabilities he built are simply outstanding.'
  },
  {
    name: 'Emily Chen',
    role: 'Product Director',
    rating: 5,
    text: 'Working with Akash was incredible. His expertise in both technical implementation and business value delivery is unmatched.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
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
              The Results Maker
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Measurable impact through innovative solutions and relentless pursuit of excellence
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/25 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              {/* Icon and Value */}
              <div className="text-center mb-4">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} bg-opacity-20 mb-4`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {achievement.value}
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>

              {/* Metrics */}
              <div className="space-y-2">
                {achievement.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Recognition & Awards
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-slate-800/25 to-slate-900/25 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-cyan-400 text-sm font-medium">{recognition.year}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{recognition.title}</h4>
                <p className="text-cyan-400 text-sm mb-2">{recognition.organization}</p>
                <p className="text-gray-400 text-sm">{recognition.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/25 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.text}"</p>

                {/* Client Info */}
                <div className="border-t border-slate-700 pt-4">
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-green-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-4">Impact Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-sm text-gray-400">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">87%</div>
                <div className="text-sm text-gray-400">Project Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">2.6+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Successful Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}