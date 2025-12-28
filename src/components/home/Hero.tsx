import React from 'react';
import { Search, BookOpen, Users, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 pattern-grid-lg text-gray-50 opacity-20" />
            <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl filter" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl filter" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                    <span className="block mb-2">تعلم وتفوق في دراستك الجامعية</span>
                    <span className="text-primary block">بسهولة واحترافية</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 mb-10">
                    منصة خصوصي تجمع لك أفضل الشروحات والمدرسين لمساعدتك في فهم موادك الجامعية والحصول على أعلى الدرجات.
                </p>

                {/* Main Search Bar */}
                <div className="mx-auto max-w-3xl relative mb-16">
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
