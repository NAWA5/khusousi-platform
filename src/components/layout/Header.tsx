'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useTheme } from 'next-themes';

const Header = () => {
    const router = useRouter();
    const { cartCount } = useCart();
    const { theme, setTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/courses?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-4">

                    {/* Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        </nav>

                        <div className="hidden md:flex flex-1 max-w-md relative">
                            <form onSubmit={handleSearch} className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="ابحث"
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
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                        </button>

                        <button className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors relative">
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
                        <Link href="/login" className="sm:hidden p-2 text-gray-600">
                            <User size={24} />
                        </Link>
            </div>
        </header>
    );
};

export default Header;
