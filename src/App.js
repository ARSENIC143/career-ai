import React, { useState, useEffect, useRef } from 'react';
import { Upload, Mic, MicOff, MessageSquare, BookOpen, BarChart3, LogOut, Menu, X, CheckCircle, AlertCircle, Sparkles, Brain, Target, Award, ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (email, password) => {
    setUser({ name: email.split('@')[0], email });
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleSignup = (name, email, password) => {
    setUser({ name, email });
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {!isLoggedIn ? (
        currentPage === 'home' ? (
          <HomePage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'login' ? (
          <LoginPage setCurrentPage={setCurrentPage} handleLogin={handleLogin} />
        ) : (
          <SignupPage setCurrentPage={setCurrentPage} handleSignup={handleSignup} />
        )
      ) : (
        <Dashboard 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          user={user}
          handleLogout={handleLogout}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">HireFlow</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setCurrentPage('login')} className="text-gray-300 hover:text-white transition px-4 py-2">
              Login
            </button>
            <button onClick={() => setCurrentPage('signup')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">AI-Powered Career Growth</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Transform Your Career<br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                With AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to analyze your resume, practice interviews, discover personalized courses, and accelerate your professional growth.
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => setCurrentPage('signup')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { icon: Users, label: 'Active Users', value: '50K+' },
              { icon: TrendingUp, label: 'Success Rate', value: '94%' },
              { icon: Award, label: 'Certifications', value: '1000+' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features for Your Success
            </h2>
            <p className="text-xl text-gray-400">Everything you need to excel in your career journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Upload,
                title: 'Resume Analyzer',
                desc: 'AI-powered analysis with actionable feedback',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Mic,
                title: 'Mock Interviews',
                desc: 'Practice with AI interviewer and get instant feedback',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: BookOpen,
                title: 'Smart Courses',
                desc: 'Personalized course recommendations',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: MessageSquare,
                title: 'AI Chatbot',
                desc: '24/7 career guidance and support',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
          <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Level Up Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of professionals who trust CareerAI</p>
          <button onClick={() => setCurrentPage('signup')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 CareerAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const LoginPage = ({ setCurrentPage, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (email && password) handleLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Login to continue your career journey</p>
        </div>
        
        <form onSubmit={onSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
            Sign In
          </button>
          
          <p className="text-center text-gray-400">
            Don't have an account?{' '}
            <button type="button" onClick={() => setCurrentPage('signup')} className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

const SignupPage = ({ setCurrentPage, handleSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) handleSignup(name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Start Your Journey</h2>
          <p className="text-gray-400">Create your account and unlock AI-powered career tools</p>
        </div>
        
        <form onSubmit={onSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
            Create Account
          </button>
          
          <p className="text-center text-gray-400">
            Already have an account?{' '}
            <button type="button" onClick={() => setCurrentPage('login')} className="text-purple-400 hover:text-purple-300 font-semibold">
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

const Dashboard = ({ currentPage, setCurrentPage, user, handleLogout, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">CareerAI</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {[
            { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
            { id: 'resume', icon: Upload, label: 'Resume Analyzer' },
            { id: 'interview', icon: Mic, label: 'Mock Interview' },
            { id: 'courses', icon: BookOpen, label: 'Courses' },
            { id: 'chatbot', icon: MessageSquare, label: 'AI Assistant' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setCurrentPage(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="flex items-center space-x-3 mb-4 px-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
              {user?.name?.[0]?.toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-medium truncate">{user?.name}</div>
              <div className="text-gray-400 text-sm truncate">{user?.email}</div>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">
            {currentPage === 'dashboard' && 'Dashboard'}
            {currentPage === 'resume' && 'Resume Analyzer'}
            {currentPage === 'interview' && 'Mock Interview'}
            {currentPage === 'courses' && 'Courses & Certifications'}
            {currentPage === 'chatbot' && 'AI Career Assistant'}
          </h1>
          <div className="w-6 lg:w-0"></div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {currentPage === 'dashboard' && <DashboardContent />}
          {currentPage === 'resume' && <ResumeAnalyzer />}
          {currentPage === 'interview' && <MockInterview />}
          {currentPage === 'courses' && <Courses />}
          {currentPage === 'chatbot' && <Chatbot />}
        </div>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: Upload, label: 'Resumes Analyzed', value: '3', color: 'from-blue-500 to-cyan-500' },
          { icon: Mic, label: 'Interviews Completed', value: '7', color: 'from-purple-500 to-pink-500' },
          { icon: BookOpen, label: 'Courses Enrolled', value: '5', color: 'from-orange-500 to-red-500' },
          { icon: Target, label: 'Skills Improved', value: '12', color: 'from-green-500 to-emerald-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Completed Mock Interview', time: '2 hours ago', icon: Mic, color: 'text-purple-400' },
            { action: 'Analyzed Resume', time: '1 day ago', icon: Upload, color: 'text-blue-400' },
            { action: 'Enrolled in React Course', time: '3 days ago', icon: BookOpen, color: 'text-orange-400' }
          ].map((activity, i) => (
            <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
              <activity.icon className={`w-5 h-5 ${activity.color}`} />
              <div className="flex-1">
                <div className="text-white font-medium">{activity.action}</div>
                <div className="text-gray-400 text-sm">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setAnalysis(null);
    }
  };

  const analyzeResume = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalysis({
        score: 78,
        strengths: [
          'Strong technical skills section',
          'Clear work experience timeline',
          'Quantifiable achievements'
        ],
        improvements: [
          'Add more action verbs',
          'Include relevant certifications',
          'Optimize for ATS keywords',
          'Expand project descriptions'
        ],
        keywords: ['React', 'JavaScript', 'Python', 'AWS', 'Machine Learning']
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Upload Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept=".pdf,.doc,.docx"
          className="hidden"
        />
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Upload className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2">Upload Your Resume</h3>
        <p className="text-gray-400 mb-6">Support for PDF, DOC, and DOCX files</p>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
        >
          Choose File
        </button>
        {file && (
          <div className="mt-6 p-4 bg-white/5 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{file.name}</span>
              <button
                onClick={analyzeResume}
                disabled={analyzing}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
              >
                {analyzing ? 'Analyzing...' : 'Analyze Resume'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6">
          {/* Score */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              {analysis.score}%
            </div>
            <p className="text-gray-400">Overall Resume Score</p>
          </div>

          {/* Strengths */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Strengths</h3>
            </div>
            <ul className="space-y-3">
              {analysis.strengths.map((strength, i) => (
                <li key={i} className="flex items-start space-x-2 text-gray-300">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">Areas for Improvement</h3>
            </div>
            <ul className="space-y-3">
              {analysis.improvements.map((improvement, i) => (
                <li key={i} className="flex items-start space-x-2 text-gray-300">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Keywords */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Key Skills Detected</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.keywords.map((keyword, i) => (
                <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg text-purple-300 font-medium">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MockInterview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setHasRecorded(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const analyzeFeedback = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setFeedback({
        overall: 82,
        categories: [
          { name: 'Communication', score: 85, feedback: 'Clear and articulate responses' },
          { name: 'Technical Knowledge', score: 80, feedback: 'Good understanding of concepts' },
          { name: 'Confidence', score: 78, feedback: 'Maintain steady tone throughout' },
          { name: 'Clarity', score: 88, feedback: 'Excellent explanation skills' }
        ],
        suggestions: [
          'Reduce filler words like "um" and "like"',
          'Provide more specific examples from your experience',
          'Structure answers using STAR method',
          'Take brief pauses before answering to organize thoughts'
        ]
      });
      setAnalyzing(false);
    }, 2000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Interview Setup */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <div className="text-center mb-8">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-all ${
            isRecording 
              ? 'bg-gradient-to-br from-red-500 to-pink-500 animate-pulse' 
              : 'bg-gradient-to-br from-purple-500 to-pink-500'
          }`}>
            {isRecording ? <MicOff className="w-12 h-12 text-white" /> : <Mic className="w-12 h-12 text-white" />}
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            {isRecording ? 'Recording in Progress...' : hasRecorded ? 'Recording Complete' : 'Start Your Mock Interview'}
          </h3>
          {isRecording && (
            <div className="text-4xl font-bold text-white mt-4">{formatTime(recordingTime)}</div>
          )}
          <p className="text-gray-400 mt-2">
            {isRecording 
              ? 'Answer the interview questions naturally' 
              : hasRecorded 
              ? 'Ready to analyze your performance'
              : 'Click the button below to begin recording your responses'}
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          {!isRecording && !hasRecorded && (
            <button
              onClick={startRecording}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center space-x-2"
            >
              <Mic className="w-5 h-5" />
              <span>Start Recording</span>
            </button>
          )}
          
          {isRecording && (
            <button
              onClick={stopRecording}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition transform hover:scale-105 flex items-center space-x-2"
            >
              <MicOff className="w-5 h-5" />
              <span>Stop Recording</span>
            </button>
          )}

          {hasRecorded && !analyzing && !feedback && (
            <button
              onClick={analyzeFeedback}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition transform hover:scale-105"
            >
              Analyze Performance
            </button>
          )}
        </div>

        {analyzing && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-purple-400">
              <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
              <span>Analyzing your interview...</span>
            </div>
          </div>
        )}
      </div>

      {/* Sample Questions */}
      {!feedback && (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">Interview Questions</h3>
          <div className="space-y-3">
            {[
              'Tell me about yourself and your background',
              'What are your greatest strengths?',
              'Describe a challenging project you worked on',
              'Where do you see yourself in 5 years?'
            ].map((question, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-gray-300">{question}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feedback Results */}
      {feedback && (
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              {feedback.overall}%
            </div>
            <p className="text-gray-400">Overall Interview Performance</p>
          </div>

          {/* Category Scores */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Performance Breakdown</h3>
            <div className="space-y-4">
              {feedback.categories.map((category, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{category.name}</span>
                    <span className="text-purple-400 font-semibold">{category.score}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${category.score}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-400 text-sm">{category.feedback}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Improvement Suggestions</h3>
            <ul className="space-y-3">
              {feedback.suggestions.map((suggestion, i) => (
                <li key={i} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg">
                  <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                setHasRecorded(false);
                setFeedback(null);
                setRecordingTime(0);
              }}
              className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
            >
              Try Another Interview
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
              Download Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'web-dev', 'data-science', 'design', 'business'];
  
  const courses = [
    {
      title: 'Advanced React & Next.js',
      category: 'web-dev',
      level: 'Advanced',
      duration: '12 weeks',
      rating: 4.8,
      students: '45K',
      image: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Next.js', 'TypeScript']
    },
    {
      title: 'Machine Learning Fundamentals',
      category: 'data-science',
      level: 'Intermediate',
      duration: '10 weeks',
      rating: 4.9,
      students: '38K',
      image: 'from-green-500 to-emerald-500',
      skills: ['Python', 'TensorFlow', 'ML']
    },
    {
      title: 'UI/UX Design Mastery',
      category: 'design',
      level: 'Beginner',
      duration: '8 weeks',
      rating: 4.7,
      students: '52K',
      image: 'from-purple-500 to-pink-500',
      skills: ['Figma', 'Design Systems', 'Prototyping']
    },
    {
      title: 'Product Management Essentials',
      category: 'business',
      level: 'Intermediate',
      duration: '6 weeks',
      rating: 4.6,
      students: '29K',
      image: 'from-orange-500 to-red-500',
      skills: ['Strategy', 'Agile', 'Analytics']
    },
    {
      title: 'Full Stack Web Development',
      category: 'web-dev',
      level: 'Beginner',
      duration: '16 weeks',
      rating: 4.9,
      students: '67K',
      image: 'from-indigo-500 to-purple-500',
      skills: ['JavaScript', 'Node.js', 'MongoDB']
    },
    {
      title: 'Data Visualization with D3.js',
      category: 'data-science',
      level: 'Advanced',
      duration: '8 weeks',
      rating: 4.7,
      students: '15K',
      image: 'from-yellow-500 to-orange-500',
      skills: ['D3.js', 'Data Viz', 'JavaScript']
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-2">Recommended Courses</h2>
        <p className="text-gray-400">Personalized learning paths based on your skills and goals</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
        {[
          { id: 'all', label: 'All Courses' },
          { id: 'web-dev', label: 'Web Development' },
          { id: 'data-science', label: 'Data Science' },
          { id: 'design', label: 'Design' },
          { id: 'business', label: 'Business' }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition group">
            <div className={`h-40 bg-gradient-to-br ${course.image} flex items-center justify-center`}>
              <BookOpen className="w-16 h-16 text-white opacity-80" />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <span className="text-sm font-semibold">{course.rating}</span>
                    <span>★</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition">
                  {course.title}
                </h3>
                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{course.students} students</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, j) => (
                  <span key={j} className="px-2 py-1 bg-white/5 rounded text-gray-300 text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI Career Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        'Based on your resume, I recommend focusing on cloud computing skills. AWS and Azure certifications would significantly boost your profile.',
        'Great question! For software engineering roles, employers typically look for strong problem-solving skills, clean code practices, and experience with version control systems like Git.',
        'I can help you prepare for that! Let\'s start by reviewing common behavioral questions. The STAR method (Situation, Task, Action, Result) is an excellent framework for structuring your answers.',
        'Your current skill set is impressive! To advance to a senior role, consider developing leadership skills, contributing to open-source projects, and building a portfolio of complex projects.',
      ];
      
      const aiMessage = {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    'Help me improve my resume',
    'Tips for technical interviews',
    'Career path suggestions',
    'Salary negotiation advice'
  ];

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col">
      <div className="bg-white/5 backdrop-blur-sm rounded-t-2xl p-6 border border-white/10 border-b-0">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">AI Career Assistant</h3>
            <p className="text-gray-400 text-sm">Always here to help</p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white/5 backdrop-blur-sm border-x border-white/10 overflow-y-auto p-6 space-y-4">
        {messages.map((message, i) => (
          <div key={i} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              message.role === 'user'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-white/10 text-gray-200 border border-white/10'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 border border-white/10 p-4 rounded-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {messages.length === 1 && (
        <div className="bg-white/5 backdrop-blur-sm border-x border-white/10 px-6 py-4">
          <p className="text-gray-400 text-sm mb-3">Quick actions:</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={() => setInput(action)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 text-sm transition"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={sendMessage} className="bg-white/5 backdrop-blur-sm rounded-b-2xl p-6 border border-white/10 border-t-0">
        <div className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;