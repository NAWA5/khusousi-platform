import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import LatestCourses from "@/components/home/LatestCourses";
import Features from "@/components/home/Features";
import PlatformPillars from "@/components/home/PlatformPillars";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Categories />
      <PlatformPillars />
      <LatestCourses />
      <MobileAppCTA />
      <JoinCTA />
      <Features />
    </div>
  );
}
