import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3.5 text-white shadow-2xl animate-fade-up max-w-md">
      {toast.type === 'success' ? (
        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
      ) : toast.type === 'error' ? (
        <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />
      ) : (
        <Info className="h-5 w-5 text-sky-400 shrink-0" />
      )}
      <div className="text-sm font-medium pr-2 leading-snug">{toast.message}</div>
      <button
        onClick={onClose}
        className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition shrink-0 ml-auto"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
