import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';
import { askAIAssistant } from '../services/api';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am Ahmad Imran's AI Portfolio Assistant. I can answer questions about his MERN stack projects, AI models (CalTrack), internship experience at Star Automation & SkimCode, education at UCP, or contact info!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const chatContainerRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Only scroll the internal chat container if messages change AFTER initial mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    const botReply = await askAIAssistant(userMsg);

    setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    setLoading(false);
  };

  const samplePrompts = [
    "Tell me about CalTrack (FYP)",
    "What is Ahmad's MERN stack experience?",
    "Where did Ahmad intern?",
    "What is his education & CGPA?",
    "How do I contact Ahmad?"
  ];

  return (
    <section id="ai-assistant" className="py-24 relative bg-slate-950/70 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Interactive MERN & AI Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ask <span className="text-gradient-purple">Ahmad's AI Portfolio Assistant</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Powered by Ahmad's Express/Node REST API endpoint reflecting his NLP chatbot & deep learning expertise.
          </p>
        </div>

        {/* Chatbot Window */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 to-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-purple-500/20">
                <Bot className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Ahmad Imran Portfolio AI</h3>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  REST API Active
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setMessages([{
                sender: 'bot',
                text: "Chat history cleared. How can I help you regarding Ahmad Imran's portfolio?"
              }])}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/60"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Messages Area Container - Internal Scroll Only */}
          <div ref={chatContainerRef} className="p-6 h-80 overflow-y-auto space-y-4 bg-slate-950/50 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`p-4 rounded-2xl max-w-lg leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-slate-950 font-semibold rounded-tr-none shadow-md'
                    : 'bg-slate-900/90 text-slate-100 border border-white/10 rounded-tl-none font-sans whitespace-pre-line'
                }`}>
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-slate-900 p-3 rounded-2xl text-xs text-slate-400 font-mono">
                  Processing response via Express backend...
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="px-6 py-3 bg-slate-900/60 border-t border-white/5 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs text-slate-400 font-mono shrink-0">Try asking:</span>
            {samplePrompts.map((sp, idx) => (
              <button
                key={idx}
                onClick={() => { setInput(sp); }}
                className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 whitespace-nowrap transition-colors"
              >
                {sp}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-4 bg-slate-900 border-t border-white/10 flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Ahmad's projects, stack, or experience..."
              className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default AIAssistant;
