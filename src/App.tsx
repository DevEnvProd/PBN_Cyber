import { 
  Search, 
  User, 
  MessageSquare, 
  TrendingUp, 
  Trophy, 
  Users, 
  Gamepad2, 
  ChevronRight,
  ShieldCheck,
  Info,
  Scale,
  Play,
  Pause,
  ArrowRight,
  Zap,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

const CATEGORIES = [
  { id: 1, name: 'PC GAMING', icon: <Gamepad2 className="w-6 h-6" />, threads: '12.4k', posts: '89.2k', color: 'from-blue-500/20 to-cyan-500/20' },
  { id: 2, name: 'MOBILE LEGENDS', icon: <TrendingUp className="w-6 h-6" />, threads: '8.1k', posts: '45.6k', color: 'from-purple-500/20 to-pink-500/20' },
  { id: 3, name: 'CASINO STRATEGY', icon: <Trophy className="w-6 h-6" />, threads: '5.2k', posts: '22.1k', color: 'from-amber-500/20 to-orange-500/20' },
  { id: 4, name: 'LOCAL TOURNAMENTS', icon: <Users className="w-6 h-6" />, threads: '2.8k', posts: '15.4k', color: 'from-emerald-500/20 to-teal-500/20' },
];

const THREADS = [
  { id: 1, title: 'Best Loadout for Warzone Season 3 Meta?', author: 'GhostRider99', replies: 42, views: '1.2k', time: '2h ago', category: 'PC GAMING' },
  { id: 2, title: 'MLBB: How to counter the new Fanny buff?', author: 'SlayerX', replies: 156, views: '5.4k', time: '5h ago', category: 'MOBILE LEGENDS' },
  { id: 3, title: 'Casino Strategy: Why the Martingale system is a trap', author: 'ProPunter', replies: 89, views: '3.1k', time: '1d ago', category: 'CASINO STRATEGY' },
  { id: 4, title: 'JB Tournament: Registration open for Johor Bahru Open 2026', author: 'Admin_Z', replies: 234, views: '10.2k', time: '3h ago', category: 'LOCAL TOURNAMENTS' },
  { id: 5, title: 'Building a $2000 Pro Gaming Rig - Parts List', author: 'TechGuru', replies: 67, views: '2.5k', time: '12h ago', category: 'PC GAMING' },
];

const CONTRIBUTORS = [
  { name: 'GhostRider99', points: '15,420', rank: 'Grandmaster', avatar: 'https://picsum.photos/seed/user1/100/100' },
  { name: 'SlayerX', points: '12,100', rank: 'Master', avatar: 'https://picsum.photos/seed/user2/100/100' },
  { name: 'TechGuru', points: '9,850', rank: 'Elite', avatar: 'https://picsum.photos/seed/user3/100/100' },
];

export default function App() {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cyber-bg selection:bg-cyber-cyan selection:text-cyber-bg">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="font-bold text-2xl tracking-tighter text-white">
              CYBER<span className="text-cyber-cyan">PULSE</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-white/70">
            <a href="#" className="hover:text-white transition-colors">Forums</a>
            <a href="#" className="hover:text-white transition-colors">Tournaments</a>
            <a href="#" className="hover:text-white transition-colors">Gear</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-white/30 transition-all w-40 focus:w-64"
              />
            </div>
            <button className="bg-white text-black px-6 py-2.5 rounded font-bold text-sm hover:bg-cyber-cyan transition-all uppercase tracking-wider">
              Join Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://picsum.photos/seed/gaming/1920/1080"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-gaming-setup-with-neon-lights-and-keyboard-41355-large.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 video-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-white/30" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60">Professional Gaming Community</span>
              <span className="h-[1px] w-12 bg-white/30" />
            </div>
            
            <h1 className="hero-title text-[12vw] md:text-[10vw] lg:text-[140px] text-white mb-6">
              CYBERPULSE <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px white' }}>SEASON 2026</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10 leading-relaxed font-light">
              Experience the next level of competitive gaming. Join the elite network of pro players, 
              strategic masters, and local tournament champions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-cyber-cyan text-black px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 group">
                Enter Forums <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all">
                View Tournaments
              </button>
            </div>
          </motion.div>
        </div>

        {/* Video Control */}
        <button 
          onClick={toggleVideo}
          className="absolute bottom-10 right-10 z-20 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
          {isPaused ? <Play className="w-5 h-5 fill-current" /> : <Pause className="w-5 h-5" />}
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Marquee Bar */}
      <div className="bg-cyber-card border-y border-white/5 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-12 text-sm font-bold uppercase tracking-widest text-white/30 flex items-center gap-4 inline-flex">
              <Zap className="w-4 h-4 text-cyber-cyan" /> Trending: New MLBB Patch Notes
              <Zap className="w-4 h-4 text-cyber-gold" /> JB Tournament Finals
              <Zap className="w-4 h-4 text-cyber-cyan" /> RTX 5090 Benchmarks
            </span>
          ))}
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-24">
          {/* Categories - Bento Grid Style */}
          <section>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-cyber-cyan uppercase tracking-[0.3em] mb-2 block">Explore</span>
                <h2 className="text-4xl font-bold text-white tracking-tight">FORUM CATEGORIES</h2>
              </div>
              <div className="hidden sm:block h-[1px] flex-1 mx-12 bg-white/10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CATEGORIES.map((cat, idx) => (
                <motion.div 
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative p-8 rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-white/20 cursor-pointer bg-gradient-to-br ${cat.color}`}
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{cat.name}</h3>
                    <p className="text-white/50 text-sm mb-8 leading-relaxed">
                      Deep dive into strategies, meta updates, and community insights.
                    </p>
                    <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      <span>{cat.threads} Threads</span>
                      <span>{cat.posts} Posts</span>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Winbox Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl min-h-[300px] flex items-center"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://illuminatelabs.space/asset/video/banner_promo_winbox.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-[0_4px_2px_rgba(0,0,0,0.8)]">WIN BIG WITH WINBOX 888</h3>
                <p className="text-amber-100 text-lg drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">Join the elite winners circle and claim your massive prize today!</p>
              </div>
              <button className="bg-white text-amber-900 px-8 py-3 rounded font-bold text-sm uppercase tracking-widest hover:bg-amber-100 transition-all shadow-lg">
                Play Now
              </button>
            </div>
          </motion.div>

          {/* Latest Threads - Feed Style */}
          <section>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-cyber-gold uppercase tracking-[0.3em] mb-2 block">Live Feed</span>
                <h2 className="text-4xl font-bold text-white tracking-tight">LATEST DISCUSSIONS</h2>
              </div>
              <button className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2">
                View All Feed <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-4">
              {THREADS.map((thread, idx) => (
                <motion.div 
                  key={thread.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-center gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all cursor-pointer"
                >
                  <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyber-cyan transition-colors">
                    <span className="text-lg font-bold text-white">{thread.replies}</span>
                    <span className="text-[8px] uppercase tracking-widest text-white/40">Replies</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white/60 uppercase tracking-wider">
                        {thread.category}
                      </span>
                      <span className="text-[10px] text-white/30 uppercase tracking-widest">{thread.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white/90 group-hover:text-cyber-cyan transition-colors truncate">
                      {thread.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-5 h-5 rounded-full bg-white/10 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${thread.author}/20/20`} alt="" />
                      </div>
                      <span className="text-xs text-white/40 font-medium">{thread.author}</span>
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <div className="text-sm font-bold text-white/60">{thread.views}</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/30">Views</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-16">
          {/* Top Contributors */}
          <section>
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="w-5 h-5 text-cyber-cyan" />
              TOP CONTRIBUTORS
            </h2>
            <div className="space-y-6">
              {CONTRIBUTORS.map((user, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img src={user.avatar} className="w-12 h-12 rounded-full border-2 border-white/10 group-hover:border-cyber-cyan transition-colors" alt="" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cyber-bg border border-white/10 rounded-full flex items-center justify-center text-[10px] font-bold text-cyber-gold">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-cyber-cyan transition-colors">{user.name}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest">{user.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-white/60">{user.points}</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/30">Points</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tournament Results */}
          <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy className="w-5 h-5 text-cyber-gold" />
              LIVE RESULTS
            </h2>
            <div className="space-y-6">
              <div className="relative pl-4 border-l border-white/10">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">JB Open 2026 • MLBB</div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Team Liquid</span>
                  <span className="text-cyber-cyan font-mono font-bold">2 - 0</span>
                  <span className="font-bold text-white">EVOS SG</span>
                </div>
              </div>
              <div className="relative pl-4 border-l border-white/10">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Weekly Slot Tourney</div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">User_Jackpot</span>
                  <div className="flex items-center gap-1 text-cyber-gold">
                    <Flame className="w-3 h-3" />
                    <span className="font-mono font-bold">$12,400</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-3 rounded bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
              Full Schedule
            </button>
          </section>

          {/* CTA Card */}
          <div className="relative p-8 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan to-cyber-gold opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="absolute inset-0 backdrop-blur-3xl" />
            <div className="relative z-10 text-center">
              <h4 className="text-white font-bold text-lg mb-2 tracking-tight">PRO GAMING GEAR</h4>
              <p className="text-white/50 text-xs mb-6 leading-relaxed">Upgrade your setup with the latest tech from our official partners.</p>
              <button className="w-full bg-white text-black py-3 rounded font-bold text-[10px] uppercase tracking-widest hover:bg-cyber-cyan transition-all">
                Shop Collection
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-cyber-card border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-bold text-2xl tracking-tighter text-white">
                  CYBER<span className="text-cyber-cyan">PULSE</span>
                </span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                The ultimate destination for professional gamers and strategic enthusiasts. Join the pulse of the gaming world.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white mb-8">Community</h4>
              <ul className="text-sm text-white/40 space-y-4">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Support</li>
                <li className="hover:text-white cursor-pointer transition-colors">Forum Rules</li>
                <li className="hover:text-white cursor-pointer transition-colors">Staff Members</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white mb-8">Legal</h4>
              <ul className="text-sm text-white/40 space-y-4">
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-white cursor-pointer transition-colors">Responsible Gaming</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white mb-8">Newsletter</h4>
              <p className="text-sm text-white/40 mb-6">Get the latest meta updates and tournament news directly.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-all"
                />
                <button className="bg-white text-black px-6 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-cyber-cyan transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Schema Section */}
          <div className="border-t border-white/5 pt-12 mb-12">
            <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-8">Frequently Asked Questions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-sm text-white/40">
              <div>
                <p className="font-bold text-white/70 mb-2">How do I join the JB Local Tournaments?</p>
                <p>Register an account and visit the "JB Local Tournaments" category for active registration links and schedules.</p>
              </div>
              <div>
                <p className="font-bold text-white/70 mb-2">What is the best strategy for high-volatility slots?</p>
                <p>Check our "Casino & Slots Strategy" section for detailed guides on bankroll management and volatility analysis.</p>
              </div>
              <div>
                <p className="font-bold text-white/70 mb-2">Are the forum discussions moderated?</p>
                <p>Yes, CyberPulse uses a team of professional moderators to maintain high-quality, relevant discussions for our community.</p>
              </div>
              <div>
                <p className="font-bold text-white/70 mb-2">Can I contribute gaming guides to the platform?</p>
                <p>Absolutely. Top contributors are rewarded with points and exclusive ranks based on the quality of their shared strategies.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
            <p>© 2026 CyberPulse Pro Gaming Community. All rights reserved.</p>
            <div className="flex gap-8">
              <span className="hover:text-white cursor-pointer transition-colors">English (US)</span>
              <span className="hover:text-white cursor-pointer transition-colors">Dark Mode Active</span>
            </div>
          </div>
        </div>

        {/* JSON-LD FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I join the JB Local Tournaments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Register an account and visit the 'JB Local Tournaments' category for active registration links and schedules."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best strategy for high-volatility slots?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Check our 'Casino & Slots Strategy' section for detailed guides on bankroll management and volatility analysis."
                }
              }
            ]
          })}
        </script>
      </footer>
    </div>
  );
}
