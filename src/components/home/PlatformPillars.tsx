import React from 'react';
import {
    LayoutDashboard,
    GraduationCap,
    Layers,
    Users,
    Smartphone,
    LifeBuoy
} from 'lucide-react';

const pillars = [
    {
        title: "الواجهة العامة (Public Interface)",
        description: "تصميم موحد يسهل الوصول للمقررات والمسارات مع محرك بحث متقدم وروابط سريعة.",
        icon: LayoutDashboard,
        color: "bg-primary/10 text-primary",
        bullets: [
            "قوائم واضحة للجامعات والمسارات",
            "بحث ذكي عن المواد والمدرسين",
            "تصفح سريع للمحتوى المجاني قبل الشراء"
        ]
    },
    {
        title: "الهيكل التعليمي (Core Educational Structure)",
        description: "تنظيم دروس ومحاور كل مقرر على شكل وحدات ومسارات تدرجية مدعمة بالاختبارات.",
        icon: GraduationCap,
        color: "bg-blue-100 text-blue-600",
        bullets: [
            "وحدات دراسية مترابطة بمؤشرات تقدم",
            "دروس فيديو، ملفات مرفقة، وتمارين",
            "اختبارات قصيرة مع تقرير نتائج فوري"
        ]
    },
    {
        title: "المقررات (Courses System)",
        description: "نظام مقررات متكامل يدعم الأسعار المتغيرة، عروض الحزم، وتجربة شراء سلسة.",
        icon: Layers,
        color: "bg-purple-100 text-purple-600",
        bullets: [
            "خطط تسعير وخصومات موسمية",
            "بنرات إبراز للمقررات الموصى بها",
            "تقييمات وبيانات تفصيلية لكل مقرر"
        ]
    },
    {
        title: "نظام المستخدم (User System)",
        description: "حساب موحد للطالب والمدرس مع أدوار وصلاحيات واضحة وسجل نشاط.",
        icon: Users,
        color: "bg-amber-100 text-amber-600",
        bullets: [
            "تتبع المشتريات والتحضير للدروس",
            "ملف شخصي محدث للطالب والمدرس",
            "إشعارات فورية للمهام والرسائل"
        ]
    },
    {
        title: "التطبيق (Mobile App)",
        description: "تجربة متنقلة تحاكي الشروحات مع إمكانية المتابعة بلا إنترنت وإشعارات لحظية.",
        icon: Smartphone,
        color: "bg-green-100 text-green-600",
        bullets: [
            "وضع مشاهدة بلا إنترنت للدروس",
            "إشعارات بالمواعيد والاختبارات",
            "دعم وضع الليلي وخيار حفظ البيانات"
        ]
    },
    {
        title: "الخدمات المساندة",
        description: "قنوات مساعدة متعددة لأسئلة الطلاب وإدارة تذاكر الدعم والردود السريعة.",
        icon: LifeBuoy,
        color: "bg-orange-100 text-orange-600",
        bullets: [
            "تذاكر دعم ودردشة مباشرة",
            "مكتبة أسئلة متكررة مهيكلة",
            "تتبع حالة الطلبات والردود"
        ]
    }
];

const PlatformPillars = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        خارطة المنصة
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">تجربة شاملة مثل شروح</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        قمنا بتجزئة المنصة إلى محاور واضحة تغطي الواجهة العامة، الهيكل التعليمي، المقررات، نظام المستخدم، التطبيق، والخدمات المساندة لضمان رحلة تعلم متناسقة.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="h-full bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                        >
                            <div className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center mb-4`}>
                                <pillar.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{pillar.description}</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {pillar.bullets.map((point) => (
                                    <li key={point} className="flex items-start gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformPillars;
