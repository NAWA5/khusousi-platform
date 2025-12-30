'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filter } from 'lucide-react';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import FiltersPanel from '@/components/FiltersPanel';

const MOCK_COURSES: CourseProps[] = [
  {
    id: 1,
    title: 'مقدمة في البرمجة بلغة جافا',
    university: 'جامعة الملك سعود',
    instructor: 'د. أحمد علي',
    rating: 4.8,
    reviews: 120,
    price: 150,
    originalPrice: 200,
    image: 'https://placehold.co/600x400/10b981/ffffff?text=Java+Course',
    thumbnail: '',
    category: 'علوم الحاسب',
    lessons: 42,
    duration: '18 ساعة',
    badge: 'الأكثر طلباً',
  },
  {
    id: 2,
    title: 'مبادئ الاقتصاد الجزئي',
    university: 'جامعة الإمام',
    instructor: 'أ. سارة محمد',
    rating: 4.5,
    reviews: 85,
    price: 100,
    originalPrice: 100,
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Microeconomics',
    thumbnail: '',
    category: 'إدارة أعمال',
    lessons: 30,
    duration: '12 ساعة',
  },
  {
    id: 3,
    title: 'تفاضل وتكامل 101',
    university: 'جامعة الملك سعود',
    instructor: 'د. محمد حسن',
    rating: 4.9,
    reviews: 200,
    price: 180,
    originalPrice: 250,
    image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Calculus+101',
    thumbnail: '',
    category: 'رياضيات',
    lessons: 55,
    duration: '22 ساعة',
    badge: 'جديد',
  },
  {
    id: 4,
    title: 'كيمياء عامة',
    university: 'جامعة الأميرة نورة',
    instructor: 'د. ليلى خالد',
    rating: 4.7,
    reviews: 95,
    price: 120,
    originalPrice: 150,
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Chemistry',
    thumbnail: '',
    category: 'علوم',
    lessons: 36,
    duration: '14 ساعة',
  },
  {
    id: 5,
    title: 'فيزياء 101',
    university: 'جامعة الملك فهد',
    instructor: 'د. عمر فاروق',
    rating: 4.6,
    reviews: 70,
    price: 130,
    originalPrice: 160,
    image: 'https://placehold.co/600x400/6366f1/ffffff?text=Physics+101',
    thumbnail: '',
    category: 'علوم',
    lessons: 40,
    duration: '16 ساعة',
  },
  {
    id: 6,
    title: 'محاسبة مالية',
    university: 'جامعة الملك عبدالعزيز',
    instructor: 'أ. هدى عبدالله',
    rating: 4.4,
    reviews: 50,
    price: 90,
    originalPrice: 120,
    image: 'https://placehold.co/600x400/14b8a6/ffffff?text=Accounting',
    thumbnail: '',
    category: 'إدارة أعمال',
    lessons: 28,
    duration: '10 ساعات',
  },
];

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const query = (searchParams?.get('q') || '').trim();

  const [selectedUniversity, setSelectedUniversity] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const toggleFilter = (
    state: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    if (state.includes(value)) {
      setter(state.filter((item) => item !== value));
    } else {
      setter([...state, value]);
    }
  };

  const filteredCourses = MOCK_COURSES.filter((course) => {
    const matchQuery =
      !query ||
      course.title.includes(query) ||
      course.instructor.includes(query) ||
      course.university.includes(query);

    const matchUni =
      selectedUniversity.length === 0 || selectedUniversity.includes(course.university);

    const matchCat = selectedCategory.length === 0 || selectedCategory.includes(course.category);

    const matchPrice =
      priceRange === 'all' ||
      (priceRange === 'under100' && course.price < 100) ||
      (priceRange === 'free' && course.price === 0);

    return matchQuery && matchUni && matchCat && matchPrice;
  });

  const resetFilters = () => {
    setSelectedUniversity([]);
    setSelectedCategory([]);
    setPriceRange('all');
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar / Filters */}
        <aside
          className={`md:w-64 flex-shrink-0 ${
            isMobileFiltersOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden md:block'
          }`}
        >
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-xl font-bold">تصفية النتائج</h2>
            <button onClick={() => setIsMobileFiltersOpen(false)} className="text-gray-500">
              إغلاق
            </button>
          </div>

          <div className="space-y-8">
            {/* Universities Filter */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">الجامعة</h3>
              <div className="space-y-2">
                {[
                  'جامعة الملك سعود',
                  'جامعة الإمام',
                  'جامعة الأميرة نورة',
                  'جامعة الملك فهد',
                  'جامعة الملك عبدالعزيز',
                ].map((uni) => (
                  <label key={uni} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedUniversity.includes(uni)}
                      onChange={() => toggleFilter(selectedUniversity, setSelectedUniversity, uni)}
                    />
                    <span className="text-sm text-gray-600">{uni}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Categories Filter */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">التخصص</h3>
              <div className="space-y-2">
                {['علوم الحاسب', 'إدارة أعمال', 'رياضيات', 'علوم', 'لغات'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedCategory.includes(cat)}
                      onChange={() => toggleFilter(selectedCategory, setSelectedCategory, cat)}
                    />
                    <span className="text-sm text-gray-600">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">السعر</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="text-primary focus:ring-primary"
                    checked={priceRange === 'all'}
                    onChange={() => setPriceRange('all')}
                  />
                  <span className="text-sm text-gray-600">الكل</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="text-primary focus:ring-primary"
                    checked={priceRange === 'under100'}
                    onChange={() => setPriceRange('under100')}
                  />
                  <span className="text-sm text-gray-600">أقل من 100 ر.س</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="text-primary focus:ring-primary"
                    checked={priceRange === 'free'}
                    onChange={() => setPriceRange('free')}
                  />
                  <span className="text-sm text-gray-600">مجاني</span>
                </label>
              </div>
            </div>

            <div className="pt-2">
              <button onClick={resetFilters} className="text-primary hover:underline font-medium">
                إعادة تعيين الفلتر
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {query ? `نتائج البحث عن "${query}"` : 'المواد المتاحة'}
                <span className="text-gray-500 text-lg font-normal mx-2">({filteredCourses.length})</span>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="md:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium"
                onClick={() => setIsMobileFiltersOpen(true)}
              >
                <Filter size={16} />
                <span>تصفية</span>
              </button>

              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-gray-500">ترتيب حسب:</span>
                <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 outline-none">
                  <option>الأكثر مشاهدة</option>
                  <option>الأعلى تقييماً</option>
                  <option>الأقل سعراً</option>
                </select>
              </div>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500">لا توجد مواد تطابق خيارات البحث.</p>
              <div className="mt-4">
                <button onClick={resetFilters} className="text-primary hover:underline font-medium">
                  إعادة تعيين الفلتر
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );