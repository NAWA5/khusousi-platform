'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, User, ShoppingCart, Sun, Moon } from 'lucide-react';
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
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-4">

                    {/* Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                            <Menu size={24} />
                        </button>
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <span className="text-2xl font-bold text-primary">خصوصي</span>
                            </div>
                        </Link>
                    </div>

                    {/* Search Bar - Hidden on small mobile */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-4 relative">
                        <form onSubmit={handleSearch} className="relative w-full">
                            <input
                                type="text"
                                placeholder="ابحث عن مواد، جامعات، أو مدرسين..."
                                className="w-full rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 py-2.5 pr-12 pl-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-gray-200 dark:placeholder-gray-400 transition-all"
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
                        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Link href="/courses" className="hover:text-primary transition-colors">تصفح المواد</Link>
                            <Link href="#" className="hover:text-primary transition-colors">الجامعات</Link>
                            <Link href="#" className="hover:text-primary transition-colors">المدرسين</Link>
                        </nav>

                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 hidden lg:block"></div>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-colors hidden sm:block"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                        </button>

                        {/* Cart */}
                        <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-colors relative">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Eth Buttons */}
                        <div className="flex items-center gap-2">
                            <Link
                                href="/login"
                                className="hidden sm:inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary"
                            >
                                تسجيل الدخول
                            </Link>
                            <Link
                                href="/register"
                                className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
                            >
                                حساب جديد
                            </Link>
                            {/* Mobile User Icon */}
                            <Link href="/login" className="sm:hidden p-2 text-gray-600 dark:text-gray-300">
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
