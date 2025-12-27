'use client';

import { useEffect } from 'react';

type ToastProps = {
  message: string;
  show: boolean;
  type?: 'success' | 'error';
  onClose: () => void;
};

export default function Toast({
  message,
  show,
  type = 'success',
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  const baseStyles =
    'fixed top-6 right-6 z-50 flex items-center gap-1 px-4 py-3 br-99 text-white transition-all duration-300 shadow-2xl ring-1 ring-white/20';

  const visibilityStyles = show
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 translate-x-4 pointer-events-none';

  const variantStyles =
    type === 'success'
      ? 'bg-green-600/90 drop-shadow-[0_0_30px_rgba(34,197,94,0.8)]'
      : 'bg-red-600/90 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]';

  const icon = type === 'success' ? 'fa-check-circle' : 'fa-times-circle';

  return (
    <div className={`${baseStyles} ${variantStyles} ${visibilityStyles} shadow`}>
      <i className={`text-lg fa ${icon}`}></i>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
