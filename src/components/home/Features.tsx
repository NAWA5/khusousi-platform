import React from 'react';
import { PlayCircle, ShieldCheck, Zap, Download, HeadphonesIcon, Clock3 } from 'lucide-react';

const features = [
    {
        title: "شروحات فيديو عالية الجودة",
        description: "محاضرات مسجلة بأحدث التقنيات تتيح لك المشاهدة في أي وقت ومن أي مكان.",
        icon: PlayCircle,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "مدرسين معتمدين",
        description: "نختار نخبة من المدرسين ذوي الكفاءة والخبرة في تدريس المناهج الجامعية.",
        icon: ShieldCheck,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "ملخصات ومراجعات",
        description: "ملفات PDF وملخصات شاملة للمواد تساعدك على المراجعة السريعة قبل الاختبارات.",
        icon: Download,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "تحديثات مستمرة",
        description: "نواكب تغييرات المناهج الجامعية بشكل مستمر لنضمن لك المحتوى الأحدث دائماً.",
        icon: Zap,
        color: "bg-orange-100 text-orange-600",
    },
];

const Features = () => {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                            حلول تعلم متكاملة
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            لماذا تختار منصة خصوصي؟
                        </h2>
                        <p className="text-gray-600 text-lg mb-6">
                            نقدم لك تجربة تعليمية متكاملة تضمن لك التفوق وفهم المواد بأفضل الطرق الحديثة مع متابعة دائمة.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                                <HeadphonesIcon className="text-primary" size={22} />
                                <div>
                                    <p className="font-semibold text-gray-900">دعم مباشر</p>
                                    <span className="text-sm text-gray-500">مساعدة فورية من فريق الدعم الأكاديمي</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                                <Clock3 className="text-secondary" size={22} />
                                <div>
                                    <p className="font-semibold text-gray-900">تعلم مرن</p>
                                    <span className="text-sm text-gray-500">خطط مشاهدة حسب وقتك وأهدافك</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature) => (
                            <div key={feature.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:-translate-y-1 transition-transform duration-200">
                                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                    <feature.icon size={30} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
