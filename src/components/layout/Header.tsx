'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, User, ShoppingCart, Sun, Moon, ChevronDown, LayoutGrid } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useTheme } from 'next-themes';

const Header = () => {
    const router = useRouter();
    const { cartCount } = useCart();
    const { theme, setTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/courses?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-6">

                    {/* Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                            <Menu size={24} />
                        </button>
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-primary">شروح</span>
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-2 relative">
                        <form onSubmit={handleSearch} className="relative w-full">
                            <input
                                type="text"
                                placeholder="ابحث عن مقرر أو جامعة..."
                                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pr-12 pl-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-700 placeholder:text-gray-400 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                                <Search size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Navigation & Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-gray-700">
                            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                            <div className="relative group">
                                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                                    المقررات
                                    <ChevronDown size={16} />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                                    <ul className="py-3 text-sm text-gray-700">
                                        {['جامعة الملك سعود', 'جامعة الإمام محمد', 'جامعة الأميرة نورة', 'جامعة طيبة', 'جامعة الملك عبدالعزيز', 'جامعة الأمير سلطان', 'جامعة اليمامة', 'جامعة الطائف'].map((uni) => (
                                            <li key={uni} className="px-4 py-2 hover:bg-gray-50 cursor-pointer">{uni}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <Link href="/courses" className="hover:text-primary transition-colors">تصفح المقررات</Link>
                            <Link href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                                <LayoutGrid size={16} />
                                التصنيفات
                            </Link>
                        </nav>

                        <div className="h-6 w-px bg-gray-200 hidden lg:block" />

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors hidden sm:block"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                        </button>

                        {/* Cart */}
                        <button className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors relative">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-2">
                            <Link
                                href="/login"
                                className="hidden sm:inline-flex items-center justify-center rounded-lg border border-primary text-primary px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary/10"
                            >
                                تسجيل الدخول
                            </Link>
                            <Link
                                href="/register"
                                className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90"
                            >
                                ابدأ الآن
                            </Link>
                            {/* Mobile User Icon */}
                            <Link href="/login" className="sm:hidden p-2 text-gray-600">
                                <User size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
