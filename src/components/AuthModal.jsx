import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';

export default function AuthModal({ open, onClose, onAuth }) {
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={`fixed inset-0 z-50 transition ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div className={`absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-6 shadow-xl transition ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{mode === 'signin' ? 'Sign in' : 'Create account'}</h3>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3">
          <label className="block">
            <span className="mb-1 flex items-center gap-2 text-xs font-medium text-slate-600"><Mail className="h-3.5 w-3.5" /> Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-slate-900/10 focus:ring"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="mb-1 flex items-center gap-2 text-xs font-medium text-slate-600"><Lock className="h-3.5 w-3.5" /> Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-slate-900/10 focus:ring"
              placeholder="••••••••"
            />
          </label>
        </div>

        <button
          onClick={() => onAuth?.({ email, mode })}
          className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          {mode === 'signin' ? 'Sign in' : 'Sign up'}
        </button>

        <p className="mt-3 text-center text-xs text-slate-500">
          {mode === 'signin' ? (
            <>
              New here?{' '}
              <button onClick={() => setMode('signup')} className="font-medium text-slate-900 underline-offset-2 hover:underline">
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setMode('signin')} className="font-medium text-slate-900 underline-offset-2 hover:underline">
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
