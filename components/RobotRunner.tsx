'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function RobotRunner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBackendConnected, setIsBackendConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m the PMG AI assistant. How can I help you with lead generation or our services today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const checkBackendConnection = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/health');
        if (response.ok) {
          setIsBackendConnected(true);
        }
      } catch (error) {
        setIsBackendConnected(false);
      }
    };

    checkBackendConnection();
    const interval = setInterval(checkBackendConnection, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages.slice(1)
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again or contact our team directly.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <style>{`
        .robot-runner {
          position: fixed;
          bottom: 10px;
          left: 0;
          z-index: 9999;
          pointer-events: auto;
          animation: robot-run-x 5s cubic-bezier(.45,.05,.55,.95) forwards;
        }
        @keyframes robot-run-x {
          0%   { transform: translateX(-220px); }
          100% { transform: translateX(calc(100vw - 210px)); }
        }
        .robot-bob {
          animation: robot-bob 0.32s ease-in-out 15 alternate;
        }
        @keyframes robot-bob {
          0%   { transform: translateY(0) rotate(-3deg); }
          100% { transform: translateY(-16px) rotate(3deg); }
        }
        .robot-face {
          display: inline-block;
          animation: robot-face 5s steps(1) forwards;
        }
        @keyframes robot-face {
          0%, 96% { transform: scaleX(-1); }
          100%    { transform: scaleX(1); }
        }
        .robot-hii {
          position: absolute;
          top: -34px;
          left: 10px;
          background: #ffffff;
          color: #7255F6;
          font: 700 16px/1 system-ui, sans-serif;
          padding: 8px 14px;
          border-radius: 16px 16px 16px 4px;
          box-shadow: 0 4px 14px rgba(0,0,0,.25);
          opacity: 0;
          animation: robot-hii .4s ease-out 5.3s forwards;
          white-space: nowrap;
          cursor: pointer;
        }
        @keyframes robot-hii {
          0%   { opacity: 0; transform: translateY(10px) scale(.6); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .robot-svg {
          cursor: pointer;
          transition: transform 0.2s;
        }
        .robot-svg:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div 
        className="robot-runner"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="robot-hii" onClick={() => setIsOpen(true)}>
          {isHovered ? 'Chat with me! 👋' : 'Hii! 👋'}
        </div>
        <div className="robot-bob">
          <div className="robot-face">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="20 80 470 490" 
              width="160" 
              role="img" 
              aria-label="Cute robot waving hi"
              className="robot-svg"
              onClick={() => setIsOpen(true)}
            >
              <defs>
                <radialGradient id="white3d" cx="38%" cy="28%" r="85%">
                  <stop offset="0%" stopColor="#ffffff" /><stop offset="55%" stopColor="#f2f5fa" />
                  <stop offset="85%" stopColor="#cdd8e8" /><stop offset="100%" stopColor="#aebfd6" />
                </radialGradient>
                <radialGradient id="blue3d" cx="35%" cy="25%" r="90%">
                  <stop offset="0%" stopColor="#e0d4ff" /><stop offset="45%" stopColor="#a896f5" />
                  <stop offset="80%" stopColor="#7a63e8" /><stop offset="100%" stopColor="#7255F6" />
                </radialGradient>
                <radialGradient id="blueDeep" cx="35%" cy="25%" r="90%">
                  <stop offset="0%" stopColor="#c4b0f7" /><stop offset="55%" stopColor="#8b6fe8" />
                  <stop offset="100%" stopColor="#5a3ad8" />
                </radialGradient>
                <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a2a35" /><stop offset="100%" stopColor="#101018" />
                </linearGradient>
                <radialGradient id="eye" cx="40%" cy="35%" r="80%">
                  <stop offset="0%" stopColor="#b6f4ff" /><stop offset="60%" stopColor="#6fe3f7" />
                  <stop offset="100%" stopColor="#3fc7e8" />
                </radialGradient>
                <radialGradient id="orb" cx="35%" cy="30%" r="90%">
                  <stop offset="0%" stopColor="#7f7ff0" /><stop offset="45%" stopColor="#4a49d8" />
                  <stop offset="100%" stopColor="#2b2a9e" />
                </radialGradient>
                <radialGradient id="btn" cx="40%" cy="35%" r="80%">
                  <stop offset="0%" stopColor="#aef0ff" /><stop offset="70%" stopColor="#5fd6f2" />
                  <stop offset="100%" stopColor="#38b8de" />
                </radialGradient>
                <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* antennae */}
              <ellipse cx="205" cy="120" rx="16" ry="42" fill="url(#blue3d)" transform="rotate(-32 205 120)" />
              <ellipse cx="199" cy="104" rx="5" ry="14" fill="#e8d8ff" opacity="0.8" transform="rotate(-32 199 104)" />
              <ellipse cx="418" cy="128" rx="15" ry="44" fill="url(#blue3d)" transform="rotate(34 418 128)" />
              <ellipse cx="424" cy="112" rx="5" ry="14" fill="#e8d8ff" opacity="0.8" transform="rotate(34 424 112)" />

              {/* right arm swept back */}
              <ellipse cx="424" cy="388" rx="26" ry="58" fill="url(#blueDeep)" transform="rotate(-36 424 388)" />
              <ellipse cx="448" cy="440" rx="28" ry="52" fill="url(#white3d)" transform="rotate(-30 448 440)" />

              {/* waving arm + orb */}
              <g>
                <ellipse cx="196" cy="290" rx="30" ry="52" fill="url(#blueDeep)" transform="rotate(38 196 290)" />
                <ellipse cx="176" cy="344" rx="58" ry="27" fill="url(#white3d)" transform="rotate(-16 176 344)" />
                <ellipse cx="136" cy="338" rx="26" ry="20" fill="url(#white3d)" transform="rotate(-12 136 338)" />
                <ellipse cx="156" cy="330" rx="20" ry="8" fill="#ffffff" opacity="0.85" transform="rotate(-14 156 330)" />

                <g filter="url(#softGlow)" transform="translate(-30,90) scale(0.14)">
                  <g fill="#7255F6">
                    {/* Top bar */}
                    <path d="M648.2 683.9 Q631.0 555.0 761.0 555.0 L1489.0 555.0
                             Q1619.0 555.0 1601.4 683.8 L1582.5 822.6
                             Q1573.0 892.0 1503.0 892.0 L746.0 892.0
                             Q676.0 892.0 666.7 822.6 Z"/>
                    {/* Middle bar */}
                    <path d="M744.7 1068.7 Q718.0 962.0 828.0 962.0 L1426.0 962.0
                             Q1536.0 962.0 1508.1 1068.4 L1465.7 1230.3
                             Q1448.0 1298.0 1378.0 1298.0 L872.0 1298.0
                             Q802.0 1298.0 785.0 1230.1 Z"/>
                    {/* Bottom bar */}
                    <path d="M864.8 1473.7 Q838.0 1367.0 948.0 1367.0 L1302.0 1367.0
                             Q1412.0 1367.0 1385.9 1473.8 L1350.5 1618.2
                             Q1332.0 1694.0 1254.0 1694.0 L998.0 1694.0
                             Q920.0 1694.0 901.0 1618.3 Z"/>
                  </g>
                </g>

                <animateTransform
                  attributeName="transform" type="rotate"
                  values="0 232 340; -55 232 340; -30 232 340; -55 232 340; -30 232 340; -55 232 340; 0 232 340"
                  keyTimes="0; .2; .35; .5; .65; .8; 1"
                  dur="2.4s" repeatCount="indefinite"
                />
              </g>

              {/* neck */}
              <ellipse cx="330" cy="316" rx="34" ry="24" fill="url(#blueDeep)" />

              {/* body */}
              <path d="M256 356 C236 380 224 424 228 458 C233 512 280 548 330 548 C382 548 424 510 428 458 C431 420 420 384 400 358 Z" fill="url(#white3d)" />
              <path d="M252 360 C268 344 300 336 330 336 C362 336 392 346 404 360 C414 372 418 388 416 402 C400 414 382 420 366 420 C362 420 360 424 360 432 L360 462 C360 476 348 484 336 484 C324 484 314 476 314 464 L314 436 C314 428 310 424 304 424 C282 424 258 414 242 400 C242 384 245 370 252 360 Z" fill="url(#blue3d)" />
              <ellipse cx="296" cy="360" rx="34" ry="10" fill="#e0d0ff" opacity="0.7" transform="rotate(-8 296 360)" />
              <circle cx="330" cy="392" r="26" fill="#e8f6ff" />
              <circle cx="330" cy="392" r="20" fill="url(#btn)" filter="url(#softGlow)" />
              <ellipse cx="300" cy="500" rx="46" ry="18" fill="#ffffff" opacity="0.35" transform="rotate(-10 300 500)" />

              {/* shoulders */}
              <ellipse cx="242" cy="352" rx="20" ry="24" fill="url(#blueDeep)" transform="rotate(24 242 352)" />
              <ellipse cx="412" cy="356" rx="20" ry="24" fill="url(#blueDeep)" transform="rotate(-20 412 356)" />

              {/* head */}
              <path d="M232 196 C232 132 286 92 330 92 C380 92 428 130 428 196 C428 258 382 296 330 296 C280 296 232 258 232 196 Z" fill="url(#white3d)" />
              <ellipse cx="300" cy="122" rx="52" ry="18" fill="#ffffff" opacity="0.8" transform="rotate(-10 300 122)" />
              <ellipse cx="432" cy="212" rx="24" ry="34" fill="url(#blue3d)" />
              <ellipse cx="426" cy="198" rx="9" ry="13" fill="#e8d8ff" opacity="0.8" />
              <rect x="256" y="140" width="150" height="112" rx="30" fill="url(#screen)" />
              <rect x="256" y="140" width="150" height="112" rx="30" fill="none" stroke="#0a0a12" strokeWidth="4" />
              <path d="M266 156 q66 -14 130 0 q-4 -10 -16 -12 l-98 0 q-12 2 -16 12z" fill="#ffffff" opacity="0.10" />
              <g stroke="#a878f5" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.95">
                <path d="M272 166 v-8 h8" /><path d="M390 158 h8 v8" />
                <path d="M272 226 v8 h8" /><path d="M398 226 v8 h-8" />
              </g>
              <ellipse cx="302" cy="196" rx="21" ry="26" fill="url(#eye)" filter="url(#softGlow)" />
              <ellipse cx="360" cy="196" rx="21" ry="26" fill="url(#eye)" filter="url(#softGlow)" />
              <ellipse cx="296" cy="186" rx="6" ry="8" fill="#eafcff" opacity="0.9" />
              <ellipse cx="354" cy="186" rx="6" ry="8" fill="#eafcff" opacity="0.9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl z-[10000] transition-all ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
        }`}>
          {/* Header */}
          <div className="bg-[#7255F6] p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold text-white">PMG Assistant</h3>
                <p className="text-xs text-white/70 flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${isBackendConnected ? 'bg-green-400' : 'bg-red-400'}`}></span>
                  {isBackendConnected ? 'Backend Connected' : 'Backend Disconnected'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? (
                  <Maximize2 className="w-5 h-5 text-white" />
                ) : (
                  <Minimize2 className="w-5 h-5 text-white" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100%-140px)]">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-[#7255F6] text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#7255F6] text-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-[#7255F6] text-white p-2 rounded-full hover:bg-[#5a3ad8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
