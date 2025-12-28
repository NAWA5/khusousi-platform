import React from 'react';
import Link from 'next/link';
import CourseCard, { CourseProps } from '../courses/CourseCard';

const courses: CourseProps[] = [
    {
        id: 1,
        title: "مقدمة في البرمجة بلغة جافا",
        university: "جامعة الملك سعود",
        instructor: "د. أحمد علي",
        rating: 4.8,
        reviews: 120,
        price: 150,
        originalPrice: 200,
        image: "https://placehold.co/600x400/10b981/ffffff?text=Java+Course",
        category: "علوم الحاسب"
    },
    {
        id: 2,
        title: "مبادئ الاقتصاد الجزئي",
        university: "جامعة الإمام",
        instructor: "أ. سارة محمد",
        rating: 4.5,
        reviews: 85,
        price: 100,
        originalPrice: 100,
        image: "https://placehold.co/600x400/2563eb/ffffff?text=Microeconomics",
        category: "إدارة أعمال"
    },
    {
        id: 3,
        title: "تفاضل وتكامل 101",
        university: "جامعة الملك سعود",
        instructor: "د. محمد حسن",
        rating: 4.9,
        reviews: 200,
        price: 180,
        originalPrice: 250,
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=Calculus+101",
        category: "رياضيات"
    },
    {
        id: 4,
        title: "كيمياء عامة",
        university: "جامعة الأميرة نورة",
        instructor: "د. ليلى خالد",
        rating: 4.7,
        reviews: 95,
        price: 120,
        originalPrice: 150,
        image: "https://placehold.co/600x400/ec4899/ffffff?text=Chemistry",
        category: "علوم"
    }
];

const LatestCourses = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">أحدث المواد المضافة</h2>
                        <p className="text-gray-600">اكتشف أحدث الشروحات التي تمت إضافتها مؤخراً</p>
                    </div>
                    <Link href="/courses" className="hidden sm:inline-flex text-primary font-medium hover:underline">
                        عرض الكل
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                <div className="mt-10 text-center sm:hidden">
                    <Link href="/courses" className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-primary">
                        عرض كل المواد
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestCourses;
