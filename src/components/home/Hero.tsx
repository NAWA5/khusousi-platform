import React from "react";

const heroImage = "https://source.unsplash.com/1600x900/?education,classroom,students";

export default function Hero() {
  return (
    <section
      className="rounded-lg overflow-hidden relative text-white"
      aria-label="الهيرُو"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-40 p-8">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold">تعلم بطريقة سهلة وممتعة</h1>
            <p className="mt-3 text-base sm:text-lg leading-relaxed">
              اعثر على الدورات المناسبة لك وابدأ التعلم الآن — محتوى عربي وتصميم مريح للقراءة
              من اليمين لليسار مع شروحات وجامعات موثوقة.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors">
                ابدأ الآن
              </button>
              <button className="px-6 py-3 rounded-lg border border-white/70 text-white font-semibold hover:bg-white/10 transition-colors">
                تصفح المقررات
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
