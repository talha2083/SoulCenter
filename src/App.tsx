import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Leaf, 
  Heart, 
  Sparkles, 
  Calendar, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'blog' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { name: string, id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Resources', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-stone-50/80 backdrop-blur-lg py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center group-hover:bg-sage-200 transition-colors">
            <Leaf className="w-5 h-5 text-sage-800" />
          </div>
          <span className="font-serif text-xl font-medium tracking-tight">SoulCenter</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={cn(
                "nav-link",
                currentPage === item.id ? "text-sage-800 after:w-full" : "text-stone-600"
              )}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="btn-primary py-2 px-6 text-sm"
          >
            Book Session
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-stone-50 border-b border-stone-200 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-left py-2 text-lg font-serif",
                  currentPage === item.id ? "text-sage-800" : "text-stone-600"
                )}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setIsMobileMenuOpen(false);
              }}
              className="btn-primary w-full mt-2"
            >
              Book Session
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-sage-50 -z-10 rounded-l-[100px] hidden lg:block" />
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 2 }}
      className="absolute -top-20 -left-20 w-96 h-96 bg-sage-200 rounded-full blur-3xl -z-10" 
    />
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-medium mb-6">
          <Sparkles className="w-3 h-3" />
          <span>Soul-Centered Healing</span>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-8">
          Find Your <br />
          <span className="italic text-sage-800">Inner Peace</span>
        </h1>
        <p className="text-lg text-stone-600 max-w-md mb-10 leading-relaxed">
          A sanctuary for emotional healing, mindfulness, and holistic wellness. 
          We help you navigate life's transitions with grace and clarity.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={onExplore} className="btn-primary">
            Start Your Journey
          </button>
          <button className="btn-secondary flex items-center gap-2">
            Our Philosophy <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000" 
            alt="Mindfulness" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Floating card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl max-w-[200px]"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-sage-800 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Holistic</span>
          </div>
          <p className="text-xs text-stone-600 italic">"Healing is not linear, but it is possible."</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Individual Therapy",
      desc: "One-on-one sessions focused on your personal growth and emotional well-being.",
      icon: <MessageCircle className="w-6 h-6" />,
      tag: "Popular"
    },
    {
      title: "Mindfulness Coaching",
      desc: "Learn practical techniques to stay present and reduce daily stress.",
      icon: <Leaf className="w-6 h-6" />,
      tag: "Wellness"
    },
    {
      title: "Spiritual Guidance",
      desc: "Explore your deeper purpose and connect with your soul's journey.",
      icon: <Sparkles className="w-6 h-6" />,
      tag: "Soul"
    },
    {
      title: "Group Healing",
      desc: "Community-based sessions for shared experiences and collective support.",
      icon: <Heart className="w-6 h-6" />,
      tag: "Community"
    }
  ];

  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Nurturing Your <span className="italic">Whole Self</span></h2>
          <p className="text-stone-600">We offer a range of services designed to support your mental, emotional, and spiritual health.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-sage-50 flex items-center justify-center text-sage-800 mb-6">
                {s.icon}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-sage-800 mb-2">{s.tag}</span>
              <h3 className="text-2xl mb-4">{s.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-8 flex-grow">{s.desc}</p>
              <button className="text-sage-800 font-medium text-sm flex items-center gap-2 group">
                Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-square rounded-full overflow-hidden border-8 border-stone-100 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
            alt="Therapist" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-10 -right-10 w-40 h-40 bg-sage-100 rounded-full -z-10 animate-pulse" />
      </div>

      <div>
        <h2 className="text-4xl md:text-5xl mb-8">Meet Your <span className="italic">Guide</span></h2>
        <p className="text-lg text-stone-700 mb-6 leading-relaxed">
          Hello, I'm Dr. Elena Vance. With over 15 years of experience in clinical psychology and spiritual studies, 
          I've dedicated my life to helping others find their way back to themselves.
        </p>
        <p className="text-stone-600 mb-8 leading-relaxed">
          My approach combines evidence-based therapeutic techniques with ancient mindfulness practices. 
          I believe that every individual has the innate capacity for healing; sometimes we just need a 
          compassionate witness and a few tools to unlock it.
        </p>
        
        <div className="space-y-4 mb-10">
          {['Certified Clinical Psychologist', 'Mindfulness Master Practitioner', 'Holistic Wellness Advocate'].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-sage-800" />
              <span className="text-stone-700 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <button className="btn-secondary">Read Full Story</button>
      </div>
    </div>
  </section>
);

const Blog = () => {
  const posts = [
    {
      title: "5 Rituals for Morning Peace",
      category: "Mindfulness",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Understanding Emotional Resilience",
      category: "Therapy",
      image: "https://images.unsplash.com/photo-1499209974431-9ddd3e2f01f3?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "The Power of Deep Breathing",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Soulful <span className="italic">Resources</span></h2>
            <p className="text-stone-600">Insights and tools for your daily wellness journey.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sage-800 font-medium group">
            View All Resources <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-sage-800 mb-2 block">{post.category}</span>
              <h3 className="text-2xl group-hover:text-sage-800 transition-colors">{post.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8">Let's <span className="italic">Connect</span></h2>
          <p className="text-stone-600 mb-12 leading-relaxed">
            Ready to take the first step? Whether you have a question or want to book a session, 
            I'm here to listen and support you.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-50 flex items-center justify-center text-sage-800">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Email Us</h4>
                <p className="text-stone-600">hello@soulcenter.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-50 flex items-center justify-center text-sage-800">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Office Hours</h4>
                <p className="text-stone-600">Mon - Fri: 9am - 6pm</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <button key={i} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-sage-800 hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-800/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-800/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Message</label>
              <textarea 
                rows={4}
                required
                className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage-800/20 transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button type="submit" className="btn-primary w-full py-4">
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-sage-800 text-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-6 h-6 text-sage-200" />
            <span className="font-serif text-2xl">SoulCenter</span>
          </div>
          <p className="text-sage-200/70 text-sm leading-relaxed mb-8">
            A sanctuary for the soul. Dedicated to providing compassionate care and spiritual guidance for modern life.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sage-200/70 text-sm">
            <li><button className="hover:text-white transition-colors">About Elena</button></li>
            <li><button className="hover:text-white transition-colors">Therapy Services</button></li>
            <li><button className="hover:text-white transition-colors">Mindfulness Blog</button></li>
            <li><button className="hover:text-white transition-colors">Book Appointment</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Contact</h4>
          <ul className="space-y-4 text-sage-200/70 text-sm">
            <li>123 Healing Way, Suite 100</li>
            <li>San Francisco, CA 94103</li>
            <li>+1 (555) 123-4567</li>
            <li>hello@soulcenter.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Newsletter</h4>
          <p className="text-sage-200/70 text-sm mb-6">Join our community for weekly mindfulness tips.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sage-200/50 w-full"
            />
            <button className="w-10 h-10 rounded-full bg-sage-200 text-sage-800 flex items-center justify-center hover:bg-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-sage-200/40 font-bold">
        <p>© 2024 SoulCenter Therapy. All rights reserved.</p>
        <div className="flex gap-8">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <button className="hover:text-white transition-colors">Terms of Service</button>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setCurrentPage('services')} />
            <Services />
            <About />
            <Blog />
            <Contact />
          </>
        );
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onExplore={() => setCurrentPage('services')} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-sage-200 selection:text-sage-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
