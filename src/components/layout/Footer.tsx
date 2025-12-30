import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">شروح</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              سهولة ومرونة في التعليم الحديث. نوفر محتوى يناسب خطتك الدراسية مع دعم فني مستمر.
            </p>
            <div className="flex gap-4 text-gray-500">
              <Link href="#" className="hover:text-primary transition-colors"><WhatsappIcon /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Youtube size={20} /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">روابط</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">المقررات</Link></li>
              <li><Link href="/login" className="hover:text-primary transition-colors">تسجيل الدخول</Link></li>
              <li><Link href="/register" className="hover:text-primary transition-colors">إنشاء حساب</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">التصنيفات</h3>
            <ul className="space-y-2 text-sm">
              <li>الرياضيات</li>
              <li>الفيزياء</li>
              <li>الإحصاء</li>
              <li>الكيمياء</li>
              <li>علوم الحاسب</li>
              <li>اللغة الإنجليزية</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">روابط مفيدة</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">شروط الاستخدام</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link></li>
              <li><Link href="/help" className="hover:text-primary transition-colors">مركز المساعدة</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-primary" />
            <span>الرياض، المملكة العربية السعودية</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-primary" />
            <span dir="ltr">0593399385</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-primary" />
            <span>help@shroo7.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={18} className="text-primary" />
            <span>خدمة العملاء</span>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} شروح. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.9 11.9 0 0012 0a12 12 0 00-10.3 17.96L0 24l6.2-1.62A12 12 0 0012 24a12 12 0 008.52-20.52zM12 22a9.85 9.85 0 01-5-1.36l-.36-.22-3.68.96.98-3.58-.23-.38A9.88 9.88 0 1122 12 9.87 9.87 0 0112 22zm5.24-7.18c-.3-.15-1.77-.87-2.04-.96s-.47-.15-.67.15-.77.96-.94 1.15-.35.22-.65.07a8.1 8.1 0 01-2.4-1.48 9 9 0 01-1.66-2.06c-.17-.3 0-.46.13-.61s.3-.35.45-.52a2 2 0 00.3-.5.56.56 0 000-.53c-.08-.15-.67-1.61-.92-2.2s-.5-.5-.67-.51h-.57a1.1 1.1 0 00-.78.36 3.27 3.27 0 00-1 2.44 5.7 5.7 0 001.2 3.02A13 13 0 0010 16a12.6 12.6 0 004.7 1.84 4.7 4.7 0 002.88-.18 2.4 2.4 0 001.65-1.14 2 2 0 00.14-1.12c-.06-.1-.25-.16-.53-.32z" />
  </svg>
);

export default Footer;
