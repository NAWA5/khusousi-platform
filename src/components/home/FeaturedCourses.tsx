import React, { useState } from 'react';
import CourseCard, { CourseProps } from '../courses/CourseCard';

const courseCategories = [
    "علوم الحاسب",
    "الرياضيات",
    "الكيمياء",
    "اللغة الإنجليزية",
    "الفيزياء",
    "العلوم الصحية",
    "الإحصاء",
    "الهندسة",
    "القانون"
];

const featuredCourses: CourseProps[] = [
    {
        id: 21,
        title: "Operating system - نظم التشغيل",
        university: "جامعة الأمير سلطان",
        instructor: "نوق البدر",
        rating: 4.7,
        reviews: 210,
        price: 150,
        originalPrice: 300,
        image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Operating+System",
        category: "علوم الحاسب",
        badge: "جامعة الأميرة نورة"
    },
    {
        id: 22,
        title: "Artificial intelligence - الذكاء الاصطناعي",
        university: "جامعة الأميرة نورة",
        instructor: "نوق البدر",
        rating: 4.8,
        reviews: 180,
        price: 150,
        originalPrice: 300,
        image: "https://placehold.co/600x400/475569/ffffff?text=AI+Course",
        category: "علوم الحاسب",
        badge: "جامعة الأميرة نورة"
    },
    {
        id: 23,
        title: "جافا 2 جامعة الإمام",
        university: "جامعة الإمام محمد",
        instructor: "عبدالرحمن العمار",
        rating: 4.5,
        reviews: 90,
        price: 0,
        originalPrice: 120,
        image: "https://placehold.co/600x400/94a3b8/ffffff?text=Java+2",
        category: "علوم الحاسب",
        badge: "جامعة الإمام محمد"
    },
    {
        id: 24,
        title: "جافا 1 جامعة الإمام",
        university: "جامعة الإمام محمد",
        instructor: "عبدالرحمن العمار",
        rating: 4.6,
        reviews: 110,
        price: 0,
        originalPrice: 120,
        image: "https://placehold.co/600x400/e2e8f0/1f2937?text=Java+1",
        category: "علوم الحاسب",
        badge: "جامعة الإمام محمد"
    }
];

const FeaturedCourses = () => {
    const [activeCategory, setActiveCategory] = useState("علوم الحاسب");

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">أبرز المقررات</h2>
                    <div className="flex flex-wrap gap-2 text-sm">
                        {courseCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full border ${activeCategory === cat ? 'border-primary text-primary bg-white shadow-sm' : 'border-gray-200 text-gray-600 hover:border-primary/50 hover:text-primary'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredCourses
                        .filter((course) => course.category === activeCategory)
                        .map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                </div>

                <div className="text-center mt-10">
                    <button className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors">
                        تصفح كافة المقررات
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
