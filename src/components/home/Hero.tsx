import React from 'react';
const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 sm:py-24 lg:py-28">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
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
