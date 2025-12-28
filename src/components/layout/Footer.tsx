import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* About Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <span className="text-2xl font-bold text-white">خصوصي</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 mb-4">
                            منصتك الأولى للدروس الخصوصية الجامعية. نجمع أفضل المدرسين لمساعدتك في التفوق في دراستك الجامعية بأسهل الطرق وأفضل الأسعار.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Youtube size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">روابط سريعة</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/courses" className="hover:text-primary transition-colors">تصفح المواد</Link></li>
                            <li><Link href="/universities" className="hover:text-primary transition-colors">الجامعات</Link></li>
                            <li><Link href="/instructors" className="hover:text-primary transition-colors">المدرسين</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">من نحن</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">المساعدة</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">شروط الاستخدام</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">تواصل معنا</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-primary" />
                                <span>الرياض، المملكة العربية السعودية</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary" />
                                <span>support@khusousi.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary" />
                                <span dir="ltr">+966 50 000 0000</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} منصة خصوصي التعليمية. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
