import CourseCard from '../../components/CourseCard';
import FiltersPanel from '../../components/FiltersPanel';

const mockCourses = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `دورة شاملة ${i + 1}`,
  teacher: 'د. سارة',
  price: i % 2 === 0 ? 'مجانية' : 'SR 149',
  thumbnail: `/images/course-${(i % 3) + 1}.jpg`,
}));

export default function CoursesPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-1/4">
          <FiltersPanel />
        </aside>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">جميع الدورات</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
