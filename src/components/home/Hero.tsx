import React from 'react';
const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 sm:py-24 lg:py-28">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
                            <ShieldCheck className="text-primary" size={18} />
                            التعليم أصبح أسهل من ذي قبل
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            إن كنت طالب جامعي وتحتاج أي مساعدة أو تواجه صعوبة في موادك، نوفر لك محاضرات مسجلة، خطط دراسة، ومقررات متخصصة لكل جامعة وتخصص.
                        </p>
                        </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 max-w-xl pt-4">
                            <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-full mb-3">
                                    <BookOpen size={22} />
                                </div>
                                <dt className="text-2xl font-bold text-gray-900">+500</dt>
                                <dd className="text-sm text-gray-500">مقرر دراسي</dd>
                            </div>
                            <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="p-2 bg-green-50 text-green-600 rounded-full mb-3">
                                    <Users size={22} />
                                </div>
                                <dt className="text-2xl font-bold text-gray-900">+10,000</dt>
                                <dd className="text-sm text-gray-500">طالب مستفيد</dd>
                            </div>
                            <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-full mb-3">
                                    <Award size={22} />
                                </div>
                                <dt className="text-2xl font-bold text-gray-900">+50</dt>
                                <dd className="text-sm text-gray-500">مدرس معتمد</dd>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-3xl blur-2xl" />
                        <div className="absolute -bottom-10 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl" />
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="absolute inset-x-6 top-6 flex justify-between text-xs text-gray-400">
                                <span>محاضرات مسجلة</span>
                                <span>شرح حسب الخطة</span>
                            </div>
                            <Image
                                src="https://placehold.co/640x520/eff6ff/1e40af?text=Learning+Illustration"
                                alt="학생"
                                width={720}
                                height={520}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
