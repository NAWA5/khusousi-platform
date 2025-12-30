import Link from 'next/link';

export default function CourseCard({ course }: any) {
  return (
    <article className="border rounded overflow-hidden bg-white">
      <div className="h-40 bg-gray-200 flex items-center justify-center">صورة</div>
      <div className="p-4">
        <h3 className="font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-600">{course.teacher}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium">{course.price}</span>
          <Link href={`/courses/${course.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-blue-600 text-sm">عرض</Link>
        </div>
      </div>
    </article>
  );
}
