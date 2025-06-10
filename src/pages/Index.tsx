
import Hero from "@/components/Hero";
import PhotoCarousel from "@/components/PhotoCarousel";
import LoveLetter from "@/components/LoveLetter";
import FloatingHearts from "@/components/FloatingHearts";
import PolaroidBackground from "@/components/PolaroidBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 relative overflow-hidden">
      <PolaroidBackground />
      <FloatingHearts />
      <div className="relative z-10">
        <Hero />
        <PhotoCarousel />
        <LoveLetter />
      </div>
    </div>
  );
};

export default Index;
