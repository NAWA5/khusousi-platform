import React from 'react';
import { Search, BookOpen, Users, Award, ShieldCheck, PlayCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 pattern-grid-lg text-gray-50 opacity-20" />
            <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl filter" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl filter" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-600 mb-4 shadow-sm">
                    <ShieldCheck className="text-primary" size={18} />
                    منصة موثوقة مع مدرسين معتمدين
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-4 leading-tight">
                    <span className="block mb-2">تعلم وتفوق في دراستك الجامعية</span>
                    <span className="text-primary block">بأدوات حديثة وشروحات تفاعلية</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 mb-10">
                    منصة خصوصي تجمع لك أفضل الشروحات والمدرسين لمساعدتك في فهم موادك الجامعية والحصول على أعلى الدرجات.
                </p>

                {/* Main Search Bar */}
                <div className="mx-auto max-w-3xl relative mb-8">
                    <div className="relative group">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <Search className="h-6 w-6 text-gray-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-2xl border-2 border-gray-100 bg-white py-4 pr-12 pl-4 text-lg text-gray-900 shadow-lg placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                            placeholder="ابحث عن اسم المادة، الجامعة، أو الدكتور..."
                        />
                        <button className="absolute left-2 top-2 bottom-2 bg-primary text-white px-8 rounded-xl font-medium hover:bg-primary/90 transition-colors">
                            بحث
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {['السنة التحضيرية', 'علوم الحاسب', 'إدارة الأعمال', 'هندسة', 'لغات'].map((tag) => (
                        <button
                            key={tag}
                            className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition-colors">
                        <PlayCircle size={20} />
                        ابدأ التعلم الآن
                    </button>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-800 font-semibold hover:border-primary hover:text-primary transition-colors">
                        <BookOpen size={20} />
                        تصفح كل المواد
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mx-auto max-w-4xl">
                    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-4">
                            <BookOpen size={28} />
                        </div>
                        <dt className="text-3xl font-bold text-gray-900">+500</dt>
                        <dd className="text-sm text-gray-500">مادة جامعية مشروحة</dd>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                        <div className="p-3 bg-green-50 text-green-600 rounded-full mb-4">
                            <Users size={28} />
                        </div>
                        <dt className="text-3xl font-bold text-gray-900">+10,000</dt>
                        <dd className="text-sm text-gray-500">طالب يستفيدون معنا</dd>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-full mb-4">
                            <Award size={28} />
                        </div>
                        <dt className="text-3xl font-bold text-gray-900">+50</dt>
                        <dd className="text-sm text-gray-500">مدرس متميز</dd>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
