'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold">Khusousi</Link>
          <nav className="hidden md:flex gap-3">
            <Link href="/courses" className="text-gray-700">الدورات</Link>
            <Link href="/blog" className="text-gray-700">المقالات</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <input
            aria-label="بحث"
            placeholder="ابحث عن دورة أو مقال"
            className="border rounded px-3 py-2 w-60"
          />
          <Link href="/login" className="text-sm text-blue-600">تسجيل / دخول</Link>
        </div>
      </div>
    </header>
  );
}
