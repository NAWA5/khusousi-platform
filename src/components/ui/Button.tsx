'use client';

export default function Button({ children, className = '', ...props }: any) {
  return (
    <button {...props} className={`px-4 py-2 rounded bg-blue-600 text-white ${className}`}>
      {children}
    </button>
  );
}
