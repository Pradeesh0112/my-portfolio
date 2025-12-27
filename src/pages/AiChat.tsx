'use client';

import { useState, useRef, useEffect } from 'react';

export default function AiChatWidget() {
  const [open, setOpen] = useState<any>(false);
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);
  const messagesEndRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (e:any) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev:any) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage.content }),
      });

      const data = await res.json();

      setMessages((prev:any) => [
        ...prev,
        {
          role: 'assistant',
          content: data.answer || 'I don’t have that information.',
        },
      ]);
    } catch {
      setMessages((prev:any) => [
        ...prev,
        { role: 'assistant', content: 'Network error. Try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-14 z-50  border border-slate hover:border-green text-green
                   w-12 h-12 rounded-full shadow-lg flex items-center justify-center
                   font-mono hover:text-slate transition"
      >
        🤖
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-24 right-14 max-h-[300px] !z-[100000] w-80 bg-navy border border-green
                        rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono">
          
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-green/30">
            <span className="text-green text-sm tracking-wide">
              Portfolio Assistant
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-lightSlate hover:text-green transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && (
              <p className="text-xs text-lightSlate text-center mt-6">
                Ask about skills, projects, or experience
              </p>
            )}

            {messages.map((msg:any, i:any) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 text-[11px] rounded-md leading-relaxed
                    ${
                      msg.role === 'user'
                        ? ' border border-green text-slate'
                        : ' border border-lightSlate/30 text-lightSlate'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <p className="text-xs text-lightSlate animate-pulse">
                Thinking...
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 p-3 border-t border-green/30"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 bg-transparent text-lightSlate placeholder-lightSlate/50
                         border border-lightSlate/30 rounded-full px-3 py-2 text-xs
                         focus:outline-none focus:border-green"
              disabled={loading}
            />
            <button
              disabled={loading || !input.trim()}
              className="text-green  border-[1px] border-green px-3 py-1 rounded-full text-xs
                         hover:bg-green hover:text-slate transition disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
