import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Target, 
  Zap, 
  Users, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Brain, 
  Rocket, 
  Shield, 
  Clock,
  BarChart3,
  DollarSign
} from 'lucide-react';

const Portfolio = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    roi: 0,
    conversions: 0,
    clients: 0
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const metrics = [
    { label: "Average ROAS Achievement", value: "4.2x", icon: TrendingUp },
    { label: "Lead Generation Boost", value: "8x", icon: Target },
    { label: "Happy Clients Worldwide", value: "100+", icon: Users }
  ];

  const services = [
    {
      title: "Meta Ads Mastery",
      problem: "Burning budget on irrelevant clicks, poor audience targeting",
      solution: "Custom audience creation + AI-powered creative testing",
      result: "4x ROAS with 60% lower cost per conversion",
      icon: Target
    },
    {
      title: "Google Ads Excellence", 
      problem: "High cost per click, low-quality traffic, poor conversions",
      solution: "Intent-based keyword strategy + smart bidding optimization",
      result: "70% cost reduction, 8x more qualified leads",
      icon: TrendingUp
    },
    {
      title: "AI-Driven SEO",
      problem: "Zero online visibility, not ranking for any keywords",
      solution: "AI content optimization + technical SEO implementation",
      result: "12x organic traffic, #1 rankings for target terms",
      icon: Brain
    },
    {
      title: "LinkedIn Lead Generation",
      problem: "Cold outreach with minimal response and engagement",
      solution: "AI-personalized messaging + strategic connection building",
      result: "8x response rate, 12x more qualified prospects",
      icon: Users
    }
  ];

  const caseStudies = [
    {
      client: "Fashion E-commerce Store",
      challenge: "Meta ads burning through budget with 0.8x return on ad spend",
      solution: "Rebuilt targeting strategy with custom audiences and optimized ad creatives",
      results: {
        roas: "4.2x ROAS",
        sales: "6x monthly sales",
        cpc: "65% lower CPC"
      },
      timeframe: "35 days"
    },
    {
      client: "B2B Software Company",
      challenge: "Google Ads generating expensive clicks but zero qualified leads",
      solution: "Complete account restructure with intent-based keywords and landing page optimization",
      results: {
        leads: "8x qualified leads",
        cost: "70% lower cost per lead",
        quality: "3x lead-to-sale rate"
      },
      timeframe: "50 days"
    },
    {
      client: "Local Medical Practice",
      challenge: "Completely invisible online with zero organic traffic",
      solution: "AI-powered SEO strategy with local optimization and content marketing",
      results: {
        traffic: "12x organic visitors",
        rankings: "#1 for 15 key terms",
        bookings: "5x patient inquiries"
      },
      timeframe: "75 days"
    }
  ];

  const testimonials = [
    {
      quote: "Our Meta ads were losing money at 0.8x ROAS. Pranav turned it around to 4.2x return - now we're scaling profitably!",
      author: "Rajesh Sharma",
      position: "E-commerce Business Owner, Mumbai, India",
      rating: 4.5
    },
    {
      quote: "Google Ads was draining our budget with zero results. After Pranav's optimization, we get 8x more qualified leads at 70% lower cost.",
      author: "David Thompson", 
      position: "Marketing Director, London, UK",
      rating: 4
    },
    {
      quote: "We had zero online presence. Pranav's AI SEO strategy got us 12x organic traffic and #1 rankings for our main keywords.",
      author: "Ahmed Al-Rashid",
      position: "Real Estate Developer, Dubai, UAE",
      rating: 4.5
    },
    {
      quote: "From burning money on ads to 4x ROAS in just 5 weeks. Pranav's strategies completely transformed our marketing ROI.",
      author: "Sarah Chen",
      position: "Restaurant Chain Owner, Toronto, Canada",
      rating: 4
    },
    {
      quote: "Our Google Ads were a disaster - high costs, poor leads. Now we get 8x qualified prospects while spending 60% less. Amazing!",
      author: "James Mitchell",
      position: "Fitness Industry Entrepreneur, Sydney, Australia",
      rating: 4.5
    }
  ];

  const skills = [
    { name: "Meta Ads", level: 95, icon: Target },
    { name: "Google Ads", level: 92, icon: TrendingUp },
    { name: "AI SEO", level: 88, icon: Brain },
    { name: "LinkedIn Marketing", level: 90, icon: Users },
    { name: "Analytics & Data", level: 94, icon: BarChart3 },
    { name: "ROI Optimization", level: 96, icon: DollarSign }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateNumber = (target: number, key: string) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 20);
    };

    animateNumber(320, 'roi');
    animateNumber(185, 'conversions');
    animateNumber(100, 'clients');
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918278840007?text=Hi Pranav! I saw your portfolio and I\'m interested in discussing how you can help grow my business with AI-powered marketing strategies.', '_blank');
  };

  const handleHireMeClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.open('mailto:prnbverma97@gmail.com?subject=Marketing Partnership Inquiry&body=Hi Pranav, I would like to discuss how you can help grow my business with your AI-powered marketing strategies.', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* SEO and Accessibility */}
      <div className="sr-only">
        <h1>Pranav - AI-Powered Digital Marketing Expert Portfolio</h1>
        <p>Professional freelance digital marketing services including Meta Ads, Google Ads, SEO, and LinkedIn marketing with proven ROI results</p>
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{ y }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-green-400 rounded-full"
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 bg-green-400 hover:bg-green-300 text-black p-4 rounded-full shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6" role="banner">
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-6 bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Pranav
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-light mb-8 text-green-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            AI-Powered Digital Marketing Expert
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-16 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Transforming clicks into conversions with 
            <span className="text-green-400"> AI precision</span> and 5 years of proven expertise
          </motion.p>

          {/* Animated Metrics */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className={`p-8 bg-gray-900/30 backdrop-blur-sm rounded-lg border transition-all duration-500 ${
                  currentMetric === index ? 'border-green-400 bg-gray-900/50' : 'border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                role="article"
                aria-label={`Metric: ${metric.label}`}
              >
                <metric.icon className="mx-auto mb-4 text-green-400" size={32} aria-hidden="true" />
                <div className="text-4xl font-light mb-2 text-white">
                  {index === 0 && `4.2x`}
                  {index === 1 && `8x`}
                  {index === 2 && `100+`}
                </div>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              onClick={handleHireMeClick}
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Hire me - scroll to contact section"
            >
              <Target size={20} aria-hidden="true" />
              Hire Me
            </motion.button>
            
            <motion.button
              onClick={handleContactClick}
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact me via email"
            >
              Contact Me
              <ArrowRight size={20} aria-hidden="true" />
            </motion.button>
          </motion.div>

          {/* Ready to start notice */}
          <motion.div 
            className="p-4 bg-gray-900/50 rounded-lg border border-green-400/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-green-400 flex items-center justify-center gap-2 text-sm">
              <CheckCircle size={16} aria-hidden="true" />
              Ready to start your growth journey today
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative z-10 py-24 px-6" role="main" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="about-heading" className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              5 years of transforming businesses through AI-enhanced digital marketing strategies with proven results across 100+ clients worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                role="article"
                aria-label={`Skill: ${skill.name}`}
              >
                <skill.icon className="text-green-400 mb-4" size={28} aria-hidden="true" />
                <h3 className="text-lg font-medium text-white mb-3">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div 
                    className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-green-400 text-sm font-medium">{skill.level}% Expertise</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-24 px-6 bg-gray-900/20" role="main" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="services-heading" className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-xl text-gray-400 font-light">
              AI-enhanced strategies for measurable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                role="article"
                aria-label={`Service: ${service.title}`}
              >
                <service.icon className="text-green-400 mb-6" size={32} aria-hidden="true" />
                <h3 className="text-2xl font-light mb-6 text-white">{service.title}</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="p-4 bg-red-500/10 rounded border-l-2 border-red-400">
                    <p className="text-red-400 font-medium mb-1">Challenge:</p>
                    <p className="text-gray-300">{service.problem}</p>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 rounded border-l-2 border-blue-400">
                    <p className="text-blue-400 font-medium mb-1">Solution:</p>
                    <p className="text-gray-300">{service.solution}</p>
                  </div>
                  
                  <div className="p-4 bg-green-500/10 rounded border-l-2 border-green-400">
                    <p className="text-green-400 font-medium mb-1">Result:</p>
                    <p className="text-gray-300">{service.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 py-24 px-6" role="main" aria-labelledby="results-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="results-heading" className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Results
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Proven success across industries
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                role="article"
                aria-label={`Case study: ${study.client}`}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-green-400 mb-3">{study.client}</h3>
                  <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                      <span className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-green-400 font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <Clock size={14} aria-hidden="true" />
                  <span>Delivered in {study.timeframe}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 px-6 bg-gray-900/20" role="main" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Testimonials
            </h2>
            <p className="text-xl text-gray-400 font-light">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                role="article"
                aria-label={`Testimonial from ${testimonial.author}`}
              >
                <div className="flex mb-4" aria-label={`Rating: ${testimonial.rating} stars`}>
                  {[...Array(Math.floor(testimonial.rating || 0))].map((_, i) => (
                    <Star key={i} className="text-green-400 fill-current" size={16} aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 font-light italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-green-400 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="relative z-10 py-24 px-6" role="main" aria-labelledby="ai-advantage-heading">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            id="ai-advantage-heading"
            className="text-4xl font-light mb-16 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The AI Advantage
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-8 bg-gray-900/40 rounded-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="mx-auto mb-4 text-green-400" size={40} aria-hidden="true" />
              <h3 className="text-lg font-medium mb-2 text-white">AI Analysis</h3>
              <p className="text-gray-400 text-sm">Advanced data processing for optimal targeting</p>
            </motion.div>

            <div className="text-4xl text-green-400 font-light" aria-hidden="true">+</div>

            <motion.div 
              className="p-8 bg-gray-900/40 rounded-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="mx-auto mb-4 text-green-400" size={40} aria-hidden="true" />
              <h3 className="text-lg font-medium mb-2 text-white">Expert Strategy</h3>
              <p className="text-gray-400 text-sm">5 years of proven campaign optimization</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="p-8 bg-gradient-to-r from-gray-900/50 to-green-900/20 rounded-lg border border-green-400/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Rocket className="mx-auto mb-4 text-green-400" size={48} aria-hidden="true" />
            <h3 className="text-2xl font-light mb-4 text-white">= Exceptional Results</h3>
            <p className="text-gray-300">Consistent ROI improvements that drive real business growth</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6 bg-gray-900/20" role="main" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Ready to transform your marketing results?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 p-6 bg-gray-900/30 rounded-lg border border-gray-700">
                <Phone className="text-green-400" size={20} aria-hidden="true" />
                <div>
                  <p className="text-white font-medium">Phone & WhatsApp</p>
                  <p className="text-gray-400">+91 8278840007</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-900/30 rounded-lg border border-gray-700">
                <Mail className="text-green-400" size={20} aria-hidden="true" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">prnbverma97@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-900/30 rounded-lg border border-gray-700">
                <MapPin className="text-green-400" size={20} aria-hidden="true" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">India (Serving Worldwide)</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-white mb-4">Ready to Scale Your Business?</h3>
                <p className="text-gray-400 mb-8">Let's discuss your marketing goals and create a custom growth strategy</p>
              </div>

              <div className="space-y-4">
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-black p-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start WhatsApp conversation"
                >
                  <MessageCircle size={24} aria-hidden="true" />
                  Start WhatsApp Conversation
                </motion.button>

                <div className="grid md:grid-cols-2 gap-4">
                  <motion.a
                    href="tel:+918278840007"
                    className="flex items-center justify-center gap-3 p-4 bg-gray-900/50 border border-gray-700 hover:border-green-400 rounded-lg text-white transition-all duration-300 hover:bg-gray-900/70"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Call now"
                  >
                    <Phone size={20} aria-hidden="true" />
                    Call Now
                  </motion.a>
                  
                  <motion.a
                    href="mailto:prnbverma97@gmail.com"
                    className="flex items-center justify-center gap-3 p-4 bg-gray-900/50 border border-gray-700 hover:border-green-400 rounded-lg text-white transition-all duration-300 hover:bg-gray-900/70"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Send email"
                  >
                    <Mail size={20} aria-hidden="true" />
                    Send Email
                  </motion.a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-900/30 rounded-lg border border-gray-700 text-center">
                <Clock className="mx-auto mb-3 text-green-400" size={24} aria-hidden="true" />
                <p className="text-green-400 font-medium mb-1">Quick Response Guarantee</p>
                <p className="text-gray-400 text-sm">I respond to all inquiries within 2 hours during business hours</p>
              </div>
            </motion.div>
          </div>

          {/* Guarantee */}
          <motion.div 
            className="mt-16 p-6 bg-green-900/20 rounded-lg border border-green-400/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Shield className="mx-auto mb-4 text-green-400" size={32} aria-hidden="true" />
            <h3 className="text-xl font-medium text-white mb-2">Results Guarantee</h3>
            <p className="text-gray-400">60-day money-back guarantee if results don't meet expectations</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-gray-800" role="contentinfo">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light mb-2 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Pranav
          </h3>
          <p className="text-gray-400 mb-4">AI-Powered Digital Marketing Expert</p>
          <p className="text-sm text-gray-500">
            © 2025 All Rights Reserved | Transforming Business Growth with AI Precision
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Portfolio;