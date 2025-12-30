import React from 'react';

interface Props {
  params: { slug: string };
}

export default function CourseDetail({ params }: Props) {
  const { slug } = params;

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">عنوان الدورة: {slug.replace('-', ' ')}</h1>
      <p className="mt-4">وصف تجريبي للدورة. هذا قالب واجهة فقط.</p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-2">المحتوى</h2>
          <ul className="list-decimal list-inside">
            <li>مقدمة</li>
            <li>المحور الأول</li>
            <li>المحور الثاني</li>
          </ul>
        </div>
        <aside className="p-4 border rounded">
          <p className="font-semibold">المدرب: أ. علي</p>
          <p className="mt-2">السعر: SR 99</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">سجل ال��ن</button>
        </aside>
      </div>
    </section>
  );
}
