import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const universities = [
    { name: "جامعة الملك سعود", logo: "https://placehold.co/200x160/0ea5e9/ffffff?text=KSU" },
    { name: "جامعة الإمام محمد", logo: "https://placehold.co/200x160/10b981/ffffff?text=IMAMU" },
    { name: "جامعة الأميرة نورة", logo: "https://placehold.co/200x160/8b5cf6/ffffff?text=PNU" },
    { name: "جامعة طيبة", logo: "https://placehold.co/200x160/f97316/ffffff?text=Taybah" },
    { name: "جامعة الملك عبدالعزيز", logo: "https://placehold.co/200x160/3b82f6/ffffff?text=KAU" },
    { name: "جامعة الأمير سلطان", logo: "https://placehold.co/200x160/6366f1/ffffff?text=PSU" },
];

const Universities = () => {
    return (
        <section className="bg-white py-12 border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                    <div className="text-center sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">الجامعات</h2>
                        <p className="text-gray-500 text-sm">شرح حسب منهج المقرر الخاص بجامعتك</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors">
                            <ArrowRight size={18} />
                        </button>
                        <button className="p-2 rounded-full border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors">
                            <ArrowLeft size={18} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {universities.map((uni) => (
                        <div key={uni.name} className="group bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-200">
                            <div className="relative w-24 h-20">
                                <Image
                                    src={uni.logo}
                                    alt={uni.name}
                                    fill
                                    sizes="120px"
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-800 text-center">{uni.name}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors">
                        عرض كل الجامعات
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Universities;
