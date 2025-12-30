import React from "react";

const JoinCTA = () => {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8 flex flex-col gap-3">
            <div className="text-2xl">🎓</div>
            <h3 className="text-xl font-bold text-gray-900">طالب جامعي؟</h3>
            <p className="text-gray-600">للتسجيل ك طالب والاشتراك في المقررات</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors">
                سجل مجاناً
              </button>
              <button className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition-colors">
                تسجيل دخول
              </button>
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8 flex flex-col gap-3">
            <div className="text-2xl">👨‍🏫</div>
            <h3 className="text-xl font-bold text-gray-900">هل أنت محاضر؟</h3>
            <p className="text-gray-600">للانضمام كمحاضر في المنصة</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors">
                انضم لنا الآن
              </button>
              <button className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition-colors">
                تسجيل دخول
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
