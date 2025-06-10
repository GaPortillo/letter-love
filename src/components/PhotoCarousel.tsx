
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  // Placeholder photos - you can replace these with your actual photos
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
      caption: "Our first adventure together"
    },
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      caption: "Every moment with you is perfect"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      caption: "Home is wherever you are"
    },
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Beautiful Memories
          </h2>
          <div className="flex justify-center space-x-2">
            <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
            <Heart className="w-4 h-4 text-red-500 mt-1" fill="currentColor" />
            <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
          </div>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-96 md:h-[500px]">
            <img
              src={photos[currentPhoto].src}
              alt={photos[currentPhoto].caption}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          <div className="p-6 text-center">
            <p className="text-xl text-gray-700 font-medium">
              {photos[currentPhoto].caption}
            </p>
          </div>
          
          <div className="flex justify-center pb-6 space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentPhoto
                    ? "bg-red-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
