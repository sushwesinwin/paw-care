import SplitText from "@/SplitText/SplitText";
import { Button } from "./ui/button";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">

      <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-10">
        {/* Animated heading */}
        <div className="w-full max-w-4xl px-4">
          <SplitText
            text="Welcome to PawCare"
            className="text-4xl font-bold text-green-600 mb-4 md:text-5xl lg:text-6xl xl:text-7xl"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing={(t) => t}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        {/* Subheading */}
        <h2 className="text-xl font-medium text-gray-800 mb-6 md:text-2xl lg:mb-8 lg:text-3xl">
          Caring for Pets Like Family.
        </h2>

        {/* Description text */}
        <p className="text-base text-gray-600 mb-8 max-w-2xl md:text-lg lg:mb-12 lg:max-w-3xl">
          Your one-stop destination for everything for your pet needs! From expert
          veterinary care and pampering grooming services to a cozy animal hotel,
          we're here to keep tails wagging and whiskers twitching. Whether your
          furry friend needs medical attention, a place to stay while you're away,
          or just a new toy or treat—we've got it all under one roof!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-sm md:text-base">
            Book an Appointment
          </Button>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-sm md:text-base">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}