import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 'p1',
    title: 'Glass Card - Aurora',
    price: 129,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1611162618071-b39a2ec1ef01?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Minimal Wallet',
    price: 89,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1544256718-3bcf237f3978?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Contactless Reader',
    price: 159,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1556742400-b5b7c5121f9a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Metal Card - Onyx',
    price: 149,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1616077168122-0223bce04388?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGrid({ onAdd }) {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 pb-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Featured Products</h2>
          <p className="mt-1 text-sm text-slate-600">Fintech gear with a modern, minimalist aesthetic.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-700 shadow">
                <Star className="h-3 w-3 text-amber-500" /> {p.rating}
              </div>
            </div>
            <div className="p-4">
              <h3 className="truncate text-sm font-medium text-slate-900">{p.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900">${p.price}</span>
                <button
                  onClick={() => onAdd?.(p)}
                  className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
