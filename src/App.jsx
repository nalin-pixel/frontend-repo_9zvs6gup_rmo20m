import React, { useMemo, useState } from 'react';
import { ShoppingCart, User } from 'lucide-react';
import Hero3D from './components/Hero3D';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';

function useCart() {
  const [items, setItems] = useState([]);

  const add = (p) => {
    setItems((prev) => {
      const exists = prev.find((it) => it.id === p.id);
      if (exists) {
        return prev.map((it) => (it.id === p.id ? { ...it, qty: (it.qty || 1) + 1 } : it));
      }
      return [...prev, { ...p, qty: 1 }];
    });
  };
  const remove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));
  const clear = () => setItems([]);
  const count = useMemo(() => items.reduce((n, it) => n + (it.qty || 1), 0), [items]);

  return { items, add, remove, clear, count };
}

export default function App() {
  const cart = useCart();
  const [openCart, setOpenCart] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleCheckout = () => {
    // For now, prompt auth if not signed in
    if (!user) {
      setAuthOpen(true);
    } else {
      alert('Proceeding to secure checkout...');
    }
  };

  const handleAuth = ({ email }) => {
    setUser({ email });
    setAuthOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900"></div>
            <span className="text-base font-semibold tracking-tight">Glasmart</span>
          </a>

          <div className="flex items-center gap-2">
            {user ? (
              <span className="hidden text-sm text-slate-600 md:block">Hi, {user.email}</span>
            ) : null}
            <button
              onClick={() => setAuthOpen(true)}
              className="hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:flex"
            >
              <User className="h-4 w-4" /> {user ? 'Account' : 'Sign in'}
            </button>
            <button
              onClick={() => setOpenCart(true)}
              className="relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden md:inline">Cart</span>
              {cart.count > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-500 px-1.5 text-[10px] font-bold text-white">
                  {cart.count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-6 py-6 md:space-y-12 md:py-10">
        <Hero3D />
        <ProductGrid onAdd={cart.add} />

        {/* Benefits */}
        <section className="grid grid-cols-1 gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-3">
          {[
            { title: 'Bank-grade security', desc: 'Encrypted payments and privacy-first infrastructure.' },
            { title: 'Fast shipping', desc: 'Dispatched within 24 hours with real-time tracking.' },
            { title: 'Easy returns', desc: '30-day hassle-free returns on all items.' },
          ].map((b) => (
            <div key={b.title} className="rounded-xl border border-slate-200 p-4">
              <h4 className="text-sm font-semibold text-slate-900">{b.title}</h4>
              <p className="mt-1 text-xs text-slate-600">{b.desc}</p>
            </div>
          ))}
        </section>

        {/* Checkout CTA */}
        <section id="checkout" className="rounded-2xl bg-slate-900 p-8 text-white">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Ready for a secure checkout?</h3>
              <p className="mt-1 text-white/80">Sign in to sync your cart and complete purchase with confidence.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setAuthOpen(true)} className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90">Sign in</button>
              <button onClick={handleCheckout} className="rounded-xl border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/10">Checkout</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Glasmart. All rights reserved.
      </footer>

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
        items={cart.items}
        onRemove={cart.remove}
        onCheckout={handleCheckout}
      />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onAuth={handleAuth} />
    </div>
  );
}
