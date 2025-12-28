import React from 'react';
import Link from 'next/link';
import { School, Book, GraduationCap, Microscope, Calculator } from 'lucide-react';

const categories = [
    {
        icon: School,
        title: "جامعة الملك سعود",
        couresCount: 120,
        color: "bg-blue-50 text-blue-600",
        href: "/universities/ksu"
    },
    {
        icon: School,
        title: "جامعة الإمام",
        couresCount: 85,
        color: "bg-green-50 text-green-600",
        href: "/universities/imamu"
    },
    {
        icon: School,
        title: "جامعة الأميرة نورة",
        couresCount: 94,
        color: "bg-purple-50 text-purple-600",
        href: "/universities/pnu"
    },
    {
        icon: Microscope,
        title: "السنة التحضيرية - صحي",
        couresCount: 45,
        color: "bg-red-50 text-red-600",
        href: "/tracks/health"
    },
    {
        icon: Calculator,
        title: "السنة التحضيرية - علمي",
        couresCount: 60,
        color: "bg-orange-50 text-orange-600",
        href: "/tracks/science"
    },
    {
        icon: GraduationCap,
        title: "كليات الإدارة والأعمال",
        couresCount: 30,
        color: "bg-indigo-50 text-indigo-600",
        href: "/colleges/business"
    }
];

const Categories = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">تصفح حسب الجامعة أو المسار</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        اختر جامعتك أو تخصصك للوصول إلى كافة المواد الدراسية المتاحة من شروحات وملخصات.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={category.href}
                            className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary/20"
                        >
                            <div className={`p-4 rounded-full mb-4 ${category.color} group-hover:scale-110 transition-transform`}>
                                <category.icon size={28} />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-center mb-1 group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>
                            <span className="text-xs text-gray-500">{category.couresCount} مادة</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
