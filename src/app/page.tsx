'use client';

import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import LatestCourses from "@/components/home/LatestCourses";
import Features from "@/components/home/Features";
import PlatformPillars from "@/components/home/PlatformPillars";
import Universities from "@/components/home/Universities";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import MobileAppCTA from "@/components/home/MobileAppCTA";
import TopCategories from "@/components/home/TopCategories";
import JoinCTA from "@/components/home/JoinCTA";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-8">
      <Hero />

      <Categories />
      <TopCategories />
      <Universities />
      <FeaturedCourses />
      <PlatformPillars />
      <LatestCourses />
      <MobileAppCTA />
      <JoinCTA />
      <Features />
    </section>
  );
}