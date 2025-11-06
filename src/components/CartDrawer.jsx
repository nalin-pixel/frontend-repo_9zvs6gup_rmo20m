import React from 'react';
import { X, Trash2 } from 'lucide-react';

export default function CartDrawer({ open, onClose, items, onRemove, onCheckout }) {
  const total = items.reduce((sum, it) => sum + it.price * (it.qty || 1), 0);

  return (
    <div className={`fixed inset-0 z-50 transition ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-[calc(100%-140px)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-sm text-slate-600">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="mb-3 flex items-center gap-3 rounded-xl border p-3">
                <img src={item.img} alt={item.title} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-slate-500">${item.price} • Qty {item.qty || 1}</p>
                </div>
                <button onClick={() => onRemove?.(item.id)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t p-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition enabled:hover:bg-slate-800 disabled:opacity-50"
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
