import React from 'react';
import Link from 'next/link';
import { Star, BookOpen, User } from 'lucide-react';

export interface CourseProps {
    id: number;
    title: string;
    university: string;
    instructor: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice: number;
    image: string;
    category: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
            {/* Course Image */}
            <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {/* Placeholder for real image */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-700">
                    {course.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-1 text-xs text-primary font-medium mb-2">
                    <User size={14} />
                    <span>{course.university}</span>
                </div>

                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 flex-1 group-hover:text-primary transition-colors">
                    <Link href={`/courses/${course.id}`}>
                        {course.title}
                    </Link>
                </h3>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <img src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random`} alt={course.instructor} className="w-6 h-6 rounded-full" />
                    <span>{course.instructor}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-yellow-400 gap-0.5">
                        <Star size={16} fill="currentColor" />
                        <span className="text-gray-900 font-bold ml-1 text-sm">{course.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">({course.reviews} تقييم)</span>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        {course.price < course.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">{course.originalPrice} ر.س</span>
                        )}
                        <span className="text-lg font-bold text-primary">{course.price} ر.س</span>
                    </div>
                    <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full hover:text-primary transition-colors">
                        <BookOpen size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
