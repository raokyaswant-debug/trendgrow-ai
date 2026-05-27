import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Send, Menu, X, LogOut, Settings, TrendingUp, Eye, Heart, Share2, MessageCircle, Zap, Star, Clock, Target, Sparkles, Search, Plus } from 'lucide-react';

export default function TrendGrowAI() {
  const [currentPage, setCurrentPage] = useState('splash');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);
  const [aiMessage, setAiMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'assistant', text: '🎬 Welcome to TrendGrow AI! I\'m your personal content strategist. Ask me about trending hooks, viral ideas, caption suggestions, or hashtag optimization.' }
  ]);

  const dashboardData = {
    totalViews: 1243890,
    engagementRate: 8.7,
    followerGrowth: 2456,
    avgWatchTime: '45.2s',
    topReels: [
      { id: 1, title: 'Morning Routine Hack', views: 234567, likes: 12345, viralScore: 94, thumbnail: '🎬' },
      { id: 2, title: 'Trending Dance', views: 189234, likes: 9876, viralScore: 87, thumbnail: '💃' },
      { id: 3, title: 'Life Tips', views: 156890, likes: 7654, viralScore: 81, thumbnail: '💡' },
    ],
    audienceActivity: [
      { time: '6am', followers: 234 },
      { time: '9am', followers: 456 },
      { time: '12pm', followers: 789 },
      { time: '3pm', followers: 567 },
      { time: '6pm', followers: 890 },
      { time: '9pm', followers: 1123 },
      { time: '12am', followers: 456 },
    ],
    bestUploadTime: '8:00 PM - 10:00 PM',
    trendinghashTags: ['#fyp', '#viral', '#trending', '#foryoupage', '#viraltrend'],
    trendingAudio: ['Trending Sound #1', 'Trending Sound #2', 'Trending Sound #3'],
  };

  const analyticsData = {
    retentionCurve: [
      { second: '0s', retention: 100 },
      { second: '3s', retention: 92 },
      { second: '6s', retention: 85 },
      { second: '10s', retention: 72 },
      { second: '15s', retention: 58 },
      { second: '20s', retention: 42 },
      { second: '30s', retention: 28 },
      { second: '45s', retention: 15 },
    ],
    contentStyle: [
      { name: 'Educational', value: 28, color: '#06b6d4' },
      { name: 'Entertainment', value: 35, color: '#a855f7' },
      { name: 'Lifestyle', value: 22, color: '#ec4899' },
      { name: 'Tutorial', value: 15, color: '#f59e0b' },
    ],
  };

  const handleGoogleLogin = () => {
    setUser({ name: 'Alex Creator', email: 'alex@example.com', avatar: '👤' });
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleSendAiMessage = () => {
    if (!aiMessage.trim()) return;

    const userMsg = { type: 'user', text: aiMessage };
    setChatHistory([...chatHistory, userMsg]);

    setTimeout(() => {
      const responses = [
        '✨ Great question! For viral first 3 seconds, start with a shocking fact or relatable hook. Then ask "what happens next?" to keep people watching.',
        '🎯 The best hashtag mix for your niche is 30% trending + 50% niche-specific + 20% broad. This maximizes discoverability while targeting your audience.',
        '📊 Your audience is most active at 8 PM-10 PM on weekends. I recommend posting 2-3 reels during these windows for maximum engagement.',
        '💡 For captions, use the 80/20 rule: 80% engaging question or relatable story, 20% call-to-action. This drives comments and engagement.',
        '🚀 The trending audio trends are shifting towards ambient and lo-fi sounds. I\'d recommend incorporating these with trending hooks for 40%+ better engagement.',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const aiMsg = { type: 'assistant', text: randomResponse };
      setChatHistory(prev => [...prev, aiMsg]);
    }, 800);

    setAiMessage('');
  };

  if (currentPage === 'splash') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="mb-8 animate-bounce">
            <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TrendGrow AI
            </div>
          </div>
          <p className="text-gray-300 text-lg mb-2 font-light">Social Media Analytics & Growth</p>
          <p className="text-gray-400 text-sm mb-12 max-w-xs">Transform your Instagram & Facebook presence with AI-powered insights</p>

          <button
            onClick={handleGoogleLogin}
            className="mb-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            🔵 Continue with Google
          </button>

          <button
            onClick={() => setCurrentPage('login')}
            className="px-8 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Sign Up with Email
          </button>

          <p className="text-gray-500 text-xs mt-8">Join 10,000+ creators growing smarter</p>
        </div>
      </div>
    );
  }

  const Navigation = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent backdrop-blur-lg border-t border-white/10 z-40 md:static md:border-t-0 md:border-r md:border-white/10 md:w-64 md:h-screen md:flex md:flex-col md:from-slate-950 md:via-slate-950/95 md:to-slate-950/90">
      <div className="hidden md:flex items-center justify-between p-6 border-b border-white/10">
        <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">TrendGrow</h1>
        <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition" />
      </div>

      <div className="flex md:flex-col justify-around md:justify-start md:flex-1 md:p-6 md:gap-2">
        {[
          { page: 'dashboard', icon: '📊', label: 'Dashboard' },
          { page: 'analytics', icon: '📈', label: 'Analytics' },
          { page: 'ai-assistant', icon: '✨', label: 'AI Assistant' },
        ].map(item => (
          <button
            key={item.page}
            onClick={() => {
              setCurrentPage(item.page);
              setMobileMenuOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              currentPage === item.page
                ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white border border-cyan-400/50'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-xl md:text-lg">{item.icon}</span>
            <span className="hidden md:inline font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="hidden md:flex flex-col gap-3 p-6 border-t border-white/10">
        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-lg">{user?.avatar}</div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsLoggedIn(false);
            setCurrentPage('splash');
          }}
          className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition text-sm"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </nav>
  );

  if (currentPage === 'dashboard') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-20 md:pb-0 md:pl-64">
        <Navigation />

        <div className="md:hidden sticky top-0 z-30 bg-gradient-to-b from-slate-950 to-transparent backdrop-blur-lg border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">TrendGrow</h1>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <div className="p-4 md:p-8 max-w-7xl">
          <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <h2 className="text-3xl md:text-4xl font-black mb-2">Welcome back, Alex! 👋</h2>
            <p className="text-gray-400">Your content is trending. Here's what's happening today.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Views', value: '1.2M', icon: Eye, change: '+12.5%' },
              { label: 'Engagement', value: '8.7%', icon: Heart, change: '+2.3%' },
              { label: 'Followers', value: '+2.4K', icon: TrendingUp, change: 'This month' },
              { label: 'Avg Watch', value: '45.2s', icon: Clock, change: '+8s' },
            ].map((metric, i) => (
              <div
                key={i}
                className="group p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:from-white/15 hover:to-white/10 cursor-pointer transform hover:scale-105"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <metric.icon className="w-6 h-6 text-cyan-400" />
                  <span className="text-xs font-bold text-green-400">{metric.change}</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl md:text-3xl font-black text-white">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Audience Activity
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dashboardData.audienceActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="followers" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Peak Upload Times
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                  <p className="text-sm text-gray-400 mb-1">Best Time to Post</p>
                  <p className="text-2xl font-bold text-white mb-2">{dashboardData.bestUploadTime}</p>
                  <p className="text-xs text-gray-500">🎯 Your audience is most active during evening hours</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm font-semibold text-gray-300 mb-2">💡 Optimization Tip</p>
                  <p className="text-sm text-gray-400">Post 1-2 reels during peak hours for 3-4x better engagement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Top Performing Reels
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {dashboardData.topReels.map((reel, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedReel(reel)}
                  className="group cursor-pointer p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:from-white/15 hover:to-white/10 transform hover:scale-105"
                >
                  <div className="w-full h-32 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-4xl mb-3">
                    {reel.thumbnail}
                  </div>
                  <h4 className="font-bold mb-2">{reel.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>👁️ {(reel.views / 1000).toFixed(0)}K</span>
                    <span>❤️ {(reel.likes / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Viral Score</span>
                    <div className="flex items-center gap-1">
                      <div className="w-12 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400" style={{width: `${reel.viralScore}%`}}></div>
                      </div>
                      <span className="text-xs font-bold text-cyan-400">{reel.viralScore}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-pink-400" />
                Trending Hashtags
              </h3>
              <div className="flex flex-wrap gap-2">
                {dashboardData.trendinghashTags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 border border-pink-400/30 text-sm font-medium text-pink-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Trending Audio
              </h3>
              <div className="space-y-2">
                {dashboardData.trendingAudio.map((audio, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer">
                    <p className="text-sm font-medium text-gray-200">🎵 {audio}</p>
                    <p className="text-xs text-gray-500">+{Math.floor(Math.random() * 500) + 100}K uses this week</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'analytics') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-20 md:pb-0 md:pl-64">
        <Navigation />

        <div className="md:hidden sticky top-0 z-30 bg-gradient-to-b from-slate-950 to-transparent backdrop-blur-lg border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Analytics</h1>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <div className="p-4 md:p-8 max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-2">Performance Analytics</h2>
            <p className="text-gray-400">Deep dive into your content performance and audience behavior</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
              <h3 className="text-lg font-bold mb-4">Content Style Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={analyticsData.contentStyle}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {analyticsData.contentStyle.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.2)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
                <h3 className="text-lg font-bold mb-4">🎯 AI Insights</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
                    <p className="text-sm font-semibold text-cyan-200">Highest Engagement</p>
                    <p className="text-xs text-gray-400 mt-1">Entertainment content performs 35% better</p>
                  </div>
                  <div className="p-3 bg-purple-500/10 border border-purple-400/30 rounded-lg">
                    <p className="text-sm font-semibold text-purple-200">First 3 Seconds</p>
                    <p className="text-xs text-gray-400 mt-1">Hook viewers with questions or shocking facts</p>
                  </div>
                  <div className="p-3 bg-pink-500/10 border border-pink-400/30 rounded-lg">
                    <p className="text-sm font-semibold text-pink-200">Best Posting Frequency</p>
                    <p className="text-xs text-gray-400 mt-1">3-4 reels per week for optimal growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 mb-8">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              Viewer Retention Curve
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData.retentionCurve}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="second" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.2)' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="retention" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">First 3 Seconds</p>
                <p className="text-lg font-bold">92%</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Halfway Point</p>
                <p className="text-lg font-bold">58%</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Full Completion</p>
                <p className="text-lg font-bold">28%</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Heart, label: 'Avg Likes', value: '8.2K', color: 'from-red-500 to-pink-500' },
              { icon: MessageCircle, label: 'Avg Comments', value: '2.1K', color: 'from-blue-500 to-cyan-500' },
              { icon: Share2, label: 'Avg Shares', value: '4.5K', color: 'from-green-500 to-emerald-500' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
                <item.icon className="w-6 h-6 mb-3 text-gray-400" />
                <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                <p className="text-3xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'ai-assistant') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-20 md:pb-0 md:pl-64 flex flex-col">
        <Navigation />

        <div className="md:hidden sticky top-0 z-30 bg-gradient-to-b from-slate-950 to-transparent backdrop-blur-lg border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Assistant</h1>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-2">Your AI Content Strategist ✨</h2>
            <p className="text-gray-400">Ask anything about captions, hashtags, viral ideas, and growth strategies</p>
          </div>

          <div className="space-y-4 mb-6">
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {[
              '💡 Generate caption ideas',
              '🎯 Suggest viral hooks',
              '#️⃣ Find trending hashtags',
              '🎬 Content improvement tips'
            ].map((action, i) => (
              <button
                key={i}
                onClick={() => {
                  setAiMessage(action);
                  setTimeout(() => handleSendAiMessage(), 0);
                }}
                className="p-3 rounded-lg text-left text-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition text-gray-300 hover:text-white"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 left-0 right-0 p-4 md:p-8 md:ml-64 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent">
          <div className="max-w-4xl mx-auto flex gap-3">
            <input
              type="text"
              value={aiMessage}
              onChange={(e) => setAiMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendAiMessage()}
              placeholder="Ask TrendGrow AI anything..."
              className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition"
            />
            <button
              onClick={handleSendAiMessage}
              className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
    }
