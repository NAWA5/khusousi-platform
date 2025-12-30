import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';

const mockCourses = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `دورة تجريبية ${i + 1}`,
  teacher: 'أ. محمد',
  price: i % 2 === 0 ? 'مجانية' : 'SR 99',
  thumbnail: `/images/course-${(i % 3) + 1}.jpg`,
}));

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-8">
      <Hero />

      <h2 className="text-2xl font-bold mt-8 mb-4">دورات شائعة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>

      <section className="mt-12">
        <h3 className="text-xl font-semibold">مقالات مميزة</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="p-4 border rounded">مثال لمقال مميز 1</article>
          <article className="p-4 border rounded">مثال لمقال مميز 2</article>
        </div>
      </section>
    </section>
  );
}
