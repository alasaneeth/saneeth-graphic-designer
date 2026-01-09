import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../ExportedFiles/Testimonial";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Minimum swipe distance to trigger change
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset previous
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      // Swiped left -> Next
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }
    if (distance < -minSwipeDistance) {
      // Swiped right -> Previous
      setCurrent(
        (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
      );
    }
  };

  return (
    <div id="testimonials" className="max-w-2xl sm:max-w-3xl md:max-w-5xl mx-auto py-10 px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Testimonials 
          </h2>
        </div>
      <div
        className="relative overflow-hidden rounded-xl shadow-lg bg-white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-transform duration-700 ease-in-out ${
              index === current
                ? "translate-x-0 relative"
                : "translate-x-full absolute top-0 left-0 w-full"
            }`}
          >
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-35 h-35 sm:w-40 sm:h-40 rounded-full object-cover shadow-md mb-4"
              />

              <h3 className="text-lg sm:text-xl font-semibold">
                {testimonial.name}
              </h3>
              <a
                href={testimonial.profile}
                className="text-gray-400 text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile
              </a>

              <p className="text-gray-600 text-base sm:text-lg mb-4 break-words text-center">
                "{testimonial.message}"
              </p>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="flex justify-center space-x-2 pb-4">
          {TESTIMONIALS.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                index === current ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
