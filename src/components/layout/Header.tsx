'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  Menu,
  User,
  ShoppingCart,
  Sun,
  Moon,
  ChevronDown,
  LayoutGrid,
  X,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const router = useRouter();
  const { cartCount } = useCart();
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const universities = [
    { name: 'جامعة الملك سعود', href: '/universities/ksu' },
    { name: 'جامعة الإمام محمد', href: '/universities/imamu' },
    { name: 'جامعة الأميرة نورة', href: '/universities/pnu' },
    { name: 'جامعة طيبة', href: '/universities/taybah' },
    { name: 'جامعة الملك عبدالعزيز', href: '/universities/kau' },
    { name: 'جامعة الأمير سلطان', href: '/universities/psu' },
    { name: 'جامعة اليمامة', href: '/universities/yu' },
    { name: 'جامعة الطائف', href: '/universities/tu' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?q=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">Khusousi</span>
            </Link>
          </div>

          {/* Navigation & Search */}
          <div className="flex flex-1 items-center justify-center gap-3">
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-700">
              <Link
                href="/"
                className="px-3 py-2 hover:text-primary transition-colors rounded-lg"
              >
                الرئيسية
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsCoursesOpen((prev) => !prev)}
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow-sm hover:bg-primary/90 transition"
                  aria-expanded={isCoursesOpen}
                >
                  المقررات
                  <ChevronDown size={16} />
                </button>

                {isCoursesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-gray-100 rounded-xl shadow-lg z-50">
                    <ul className="py-3 text-sm text-gray-700">
                      {universities.map((uni) => (
                        <li key={uni.href}>
                          <Link
                            href={uni.href}
                            className="block px-4 py-2 hover:bg-gray-50"
                            onClick={() => setIsCoursesOpen(false)}
                          >
                            {uni.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/courses"
                className="px-3 py-2 hover:text-primary transition-colors rounded-lg flex items-center gap-1"
              >
                <LayoutGrid size={16} />
                التصنيفات
              </Link>
            </nav>

            <div className="hidden md:flex flex-1 max-w-md relative">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="ابحث"
                  className="w-full rounded-full border border-gray-100 bg-white py-2.5 pr-12 pl-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 placeholder:text-gray-400 shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="بحث عن دورات"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white border border-primary rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                  aria-label="ابحث"
                >
                  <Search size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden sm:flex p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            <button
              className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors relative"
              aria-label="سلة المشتريات"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <Link
              href="/login"
              className="hidden sm:inline-flex items-center justify-center rounded-lg text-gray-700 px-3 py-2 text-sm font-semibold transition-colors hover:text-primary"
            >
              تسجيل الدخول
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-lg border border-primary text-primary px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary hover:text-white"
            >
              ابدأ الآن
            </Link>

            <Link href="/login" className="sm:hidden p-2 text-gray-600" aria-label="حساب المستخدم">
              <User size={24} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 rounded-2xl border border-gray-100 bg-white shadow-lg p-4 space-y-3">
            <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              <Link
                href="/"
                className="px-3 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>

              <div className="border rounded-xl border-gray-100">
                <button
                  className="w-full flex items-center justify-between px-3 py-2"
                  onClick={() => setIsCoursesOpen((prev) => !prev)}
                >
                  <span className="font-semibold text-primary">المقررات</span>
                  <ChevronDown size={16} />
                </button>
                {isCoursesOpen && (
                  <ul className="border-t border-gray-100">
                    {universities.map((uni) => (
                      <li key={uni.href}>
                        <Link
                          href={uni.href}
                          className="block px-4 py-2 hover:bg-gray-50"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsCoursesOpen(false);
                          }}
                        >
                          {uni.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                href="/courses"
                className="px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutGrid size={16} />
                التصنيفات
              </Link>
            </div>

            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="ابحث"
                className="flex-1 rounded-full border border-gray-200 bg-white py-2 px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="بحث عن دورات (موبايل)"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-sm hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                بحث
              </button>
            </form>

            <div className="flex gap-2">
              <Link
                href="/login"
                className="flex-1 inline-flex items-center justify-center rounded-lg border border-primary text-primary px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary/10"
                onClick={() => setIsMenuOpen(false)}
              >
                تسجيل الدخول
              </Link>

              <Link
                href="/register"
                className="flex-1 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                ابدأ الآن
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;