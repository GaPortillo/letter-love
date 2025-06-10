
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import img1 from "../imgs/IMG_6595.JPG";
import img2 from "../imgs/1000034868.jpg";
import img3 from "../imgs/1000068505.jpg";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  // Photos with different aspect ratios
  const photos = [
    {
      src: img1,
      caption: "Nossa primeira viagem de muitas ainda ❤️✈️",
      aspectRatio: 4 / 3
    },
    {
      src: img2,
      caption: "Cada momento com você é precioso ❤️",
      aspectRatio: 4 / 3
    },
    {
      src: img3,
      caption: "Obrigado por ser meu mundo e meu porto seguro ❤️🌍",
      aspectRatio: 4 / 3
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
            Momentos ❤️
          </h2>
          <div className="flex justify-center space-x-2">
            <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
            <Heart className="w-4 h-4 text-red-500 mt-1" fill="currentColor" />
            <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
          </div>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative max-w-3xl mx-auto">
            <AspectRatio ratio={photos[currentPhoto].aspectRatio}>
              <img
                src={photos[currentPhoto].src}
                alt={photos[currentPhoto].caption}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </AspectRatio>
            
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
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
