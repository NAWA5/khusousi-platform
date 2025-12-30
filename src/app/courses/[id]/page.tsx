'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Play,
    Lock,
    CheckCircle,
    Star,
    Clock,
    FileText,
    Share2
} from 'lucide-react';

export default function CourseDetailsPage() {
    const [activeTab, setActiveTab] = useState('syllabus');

    // Mock Data
    const course = {
        id: 1,
        title: "مقدمة في البرمجة بلغة جافا",
        description: "تعلم أساسيات البرمجة بلغة جافا من الصفر حتى الاحتراف. هذا الكورس مصمم لطلاب السنة التحضيرية وتخصص علوم الحاسب.",
        instructor: {
            name: "د. أحمد علي",
            title: "أستاذ مشارك - علوم الحاسب",
            image: "https://ui-avatars.com/api/?name=Ahmed+Ali&background=random",
            rating: 4.9,
            students: 1500,
            courses: 5
        },
        rating: 4.8,
        reviews: 120,
        students: 450,
        lastUpdated: "أكتوبر 2023",
        language: "العربية",
        price: 150,
        originalPrice: 200,
        features: [
            "20 ساعة فيديو",
            "50 تمرين تطبيقي",
            "شهادة إتمام",
            "وصول مدى الحياة"
        ],
        syllabus: [
            {
                title: "المقدمة وإعداد البيئة",
                lessons: [
                    { title: "ما هي لغة جافا؟", duration: "10:00", isFree: true },
                    { title: "تحميل JDK و IntelliJ", duration: "15:00", isFree: true },
                    { title: "كتابة أول برنامج", duration: "08:00", isFree: false },
                ]
            },
            {
                title: "المتغيرات والأنواع",
                lessons: [
                    { title: "أنواع البيانات الأولية", duration: "20:00", isFree: false },
                    { title: "العمليات الحسابية", duration: "18:00", isFree: false },
                    { title: "التحويل بين الأنواع", duration: "12:00", isFree: false },
                ]
            },
            {
                title: "الجمل الشرطية والتكرار",
                lessons: [
                    { title: "جملة If-Else", duration: "25:00", isFree: false },
                    { title: "Looping (For, While)", duration: "30:00", isFree: false },
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-primary">الرئيسية</Link>
                        <span>/</span>
                        <Link href="/courses" className="hover:text-primary">المواد</Link>
                        <span>/</span>
                        <span className="text-gray-900 line-clamp-1">{course.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content (Right Column) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Video Player Placeholder */}
                        <div className="bg-black rounded-2xl overflow-hidden aspect-video relative group cursor-pointer shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Play size={32} className="text-white ml-1" fill="currentColor" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <p className="font-medium">مشاهدة المقدمة المجانية</p>
                            </div>
                        </div>

                        {/* Course Header Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star size={18} fill="currentColor" />
                                    <span className="font-bold text-gray-900">{course.rating}</span>
                                    <span className="text-gray-400">({course.reviews} تقييم)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={18} />
                                    <span>آخر تحديث: {course.lastUpdated}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FileText size={18} />
                                    <span>{course.language}</span>
                                </div>
                            </div>

                            {/* Instructor Small Card */}
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                                <Image
                                    src={course.instructor.image}
                                    alt={course.instructor.name}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-gray-900">{course.instructor.name}</p>
                                    <p className="text-sm text-gray-500">{course.instructor.title}</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="border-b border-gray-200">
                            <div className="flex gap-8">
                                {['syllabus', 'reviews'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                    >
                                        {tab === 'syllabus' ? 'محتوى الدورة' : 'التقييمات'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content: Syllabus */}
                        {activeTab === 'syllabus' && (
                            <div className="space-y-4">
                                {course.syllabus.map((chapter, idx) => (
                                    <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                        <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-right">
                                            <span className="font-bold text-gray-900">{chapter.title}</span>
                                            <span className="text-sm text-gray-500">{chapter.lessons.length} دروس</span>
                                        </button>
                                        <div className="divide-y divide-gray-100">
                                            {chapter.lessons.map((lesson, lessonIdx) => (
                                                <div key={lessonIdx} className="p-4 flex items-center justify-between group hover:bg-gray-50 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-full ${lesson.isFree ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                                            {lesson.isFree ? <Play size={16} fill="currentColor" /> : <Lock size={16} />}
                                                        </div>
                                                        <span className={`text-sm group-hover:text-primary transition-colors ${lesson.isFree ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                                                            {lesson.title}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{lesson.duration}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Tab Content: Reviews (Placeholder) */}
                        {activeTab === 'reviews' && (
                            <div className="text-center py-10 bg-white rounded-xl border border-gray-200">
                                <div className="bg-yellow-50 text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star size={32} fill="currentColor" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">تقييمات الطلاب</h3>
                                <p className="text-gray-500">لا توجد تقييمات مكتوبة بعد، كن أول من يقيم هذا الكورس!</p>
                            </div>
                        )}

                    </div>

                    {/* Sidebar (Left Column) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">

                            {/* Purchase Card */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-3xl font-bold text-gray-900">{course.price} ر.س</span>
                                    <span className="text-sm text-gray-400 line-through">{course.originalPrice} ر.س</span>
                                </div>
                                <div className="h-1 w-full bg-gray-100 rounded-full mb-6">
                                    <div className="h-full bg-red-500 w-2/3 rounded-full"></div>
                                    <p className="text-xs text-red-500 mt-1 font-medium">خصم 25% لفترة محدودة</p>
                                </div>

                                <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-xl mb-3">
                                    شراء الكورس الآن
                                </button>
                                <button className="w-full bg-white border-2 border-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:border-gray-200 hover:bg-gray-50 transition-all">
                                    إضافة للسلة
                                </button>

                                <div className="mt-6 space-y-3">
                                    <h4 className="font-bold text-gray-900 text-sm">مميزات الكورس:</h4>
                                    <ul className="space-y-2">
                                        {course.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle size={16} className="text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Share Card */}
                            <div className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">شارك الكورس لأصدقائك</span>
                                <button className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                                    <Share2 size={20} />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
