import React from 'react';
import Image from 'next/image';
import { Smartphone } from 'lucide-react';

const MobileAppCTA = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary text-white rounded-3xl overflow-hidden shadow-xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative min-h-[320px] lg:min-h-[420px]">
                            <Image
                                src="https://placehold.co/800x600/0f3c8a/ffffff?text=Mobile+App+Preview"
                                alt="Mobile app"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-10 flex flex-col justify-center gap-4">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold">
                                <Smartphone size={18} />
                                شروح
                            </div>
                            <h3 className="text-3xl font-bold leading-snug">
                                حمل تطبيق شروح مجاناً الآن
                            </h3>
                            <p className="text-white/80 text-lg">
                                يمكنك مشاهدة المحاضرات والمذاكرة من خلال التطبيق في أي مكان وزمان، مع مزامنة تقدمك وإشعارات بالمواعيد المهمة.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <button className="px-5 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:shadow-lg transition">App Store</button>
                                <button className="px-5 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition">Google Play</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileAppCTA;
