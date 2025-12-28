'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Lock, Facebook, Github } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">تسجيل الدخول</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        أهلاً بك مجدداً في منصة خصوصي
                    </p>
                </div>

                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="email-address" className="sr-only">البريد الإلكتروني</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-xl relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="البريد الإلكتروني"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">كلمة المرور</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-xl relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="كلمة المرور"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-900">
                                تذكرني
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link href="#" className="font-medium text-primary hover:text-primary/80">
                                نسيت كلمة المرور؟
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-md transition-all"
                        >
                            تسجيل الدخول
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">
                                أو تابع باستخدام
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <div>
                            <a
                                href="#"
                                className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <span className="sr-only">Sign in with Facebook</span>
                                <Facebook className="h-5 w-5 text-blue-600" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <span className="sr-only">Sign in with Google</span>
                                <Github className="h-5 w-5" /> {/* Using Github icon as placeholder for generic OAuth */}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        ليس لديك حساب؟{' '}
                        <Link href="/register" className="font-medium text-primary hover:text-primary/80">
                            أنشئ حساب جديد
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
