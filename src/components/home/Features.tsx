import React from 'react';
import { PlayCircle, ShieldCheck, Zap, Download } from 'lucide-react';

const Features = () => {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا تختار منصة خصوصي؟</h2>
                    <p className="text-gray-600 text-lg">
                        نقدم لك تجربة تعليمية متكاملة تضمن لك التفوق وفهم المواد بأفضل الطرق الحديثة.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <PlayCircle size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">شروحات فيديو عالية الجودة</h3>
                        <p className="text-gray-500 leading-relaxed">
                            محاضرات مسجلة بأحدث التقنيات تتيح لك المشاهدة في أي وقت ومن أي مكان.
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">مدرسين معتمدين</h3>
                        <p className="text-gray-500 leading-relaxed">
                            نختار نخبة من المدرسين ذوي الكفاءة والخبرة في تدريس المناهج الجامعية.
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Download size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">ملخصات ومراجعات</h3>
                        <p className="text-gray-500 leading-relaxed">
                            ملفات PDF وملخصات شاملة للمواد تساعدك على المراجعة السريعة قبل الاختبارات.
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">تحديثات مستمرة</h3>
                        <p className="text-gray-500 leading-relaxed">
                            نواكب تغييرات المناهج الجامعية بشكل مستمر لنضمن لك المحتوى الأحدث دائماً.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
