import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import LatestCourses from "@/components/home/LatestCourses";
import Features from "@/components/home/Features";
import PlatformPillars from "@/components/home/PlatformPillars";
import Universities from "@/components/home/Universities";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import MobileAppCTA from "@/components/home/MobileAppCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Categories />
      <Universities />
      <FeaturedCourses />
      <PlatformPillars />
      <LatestCourses />
      <MobileAppCTA />
      <Features />
    </div>
  );
}
