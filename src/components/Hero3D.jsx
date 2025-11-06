import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[520px] md:h-[640px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Secure. Modern. Minimal.
        </span>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-6xl md:leading-[1.1]">
          Elevate your checkout with 3D fintech elegance
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
          Shop our curated collection and experience a glass-morphic, secure checkout powered by modern design.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-white/90"
          >
            Explore Products
          </a>
          <a
            href="#checkout"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Secure Checkout
          </a>
        </div>
      </div>
    </section>
  );
}
