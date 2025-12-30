import React from "react";
import Image from "next/image";

const topCategories = [
  { title: "الكيمياء", image: "https://placehold.co/200x160/fef9c3/0f172a?text=%E2%9A%9B" },
  { title: "اللغة الإنجليزية", image: "https://placehold.co/200x160/e0f2fe/0f172a?text=%F0%9F%93%9D" },
  { title: "الرياضيات", image: "https://placehold.co/200x160/ede9fe/0f172a?text=%E2%88%9A" },
  { title: "علوم الحاسب", image: "https://placehold.co/200x160/ecfeff/0f172a?text=%F0%9F%92%BB" },
  { title: "الأحياء", image: "https://placehold.co/200x160/fff7ed/0f172a?text=%F0%9F%A7%A1" },
  { title: "الإحصاء", image: "https://placehold.co/200x160/eff6ff/0f172a?text=%F0%9F%93%8A" },
  { title: "العلوم الصحية", image: "https://placehold.co/200x160/fff1f2/0f172a?text=%F0%9F%A7%AA" },
  { title: "الفيزياء", image: "https://placehold.co/200x160/f1f5f9/0f172a?text=%E2%9A%AB" },
];

const TopCategories = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">أهم التصنيفات</h2>
          <p className="text-gray-500 text-sm">
            اختر التصنيف الأنسب لتصل لمقرراتك مباشرة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="relative w-28 h-24">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
              <p className="text-base font-semibold text-gray-800">{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
