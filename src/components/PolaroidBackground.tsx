
import { useEffect, useState } from "react";

interface PolaroidType {
  id: number;
  src: string;
  rotation: number;
  top: number;
  left: number;
  scale: number;
}

const PolaroidBackground = () => {
  const [polaroids, setPolaroids] = useState<PolaroidType[]>([]);

  useEffect(() => {
    // Sample romantic photos for polaroids
    const polaroidImages = [
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=300&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=400&fit=crop",
      "https://images.unsplash.com/photo-1605707264003-89b89dde7d15?w=300&h=400&fit=crop",
      "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=300&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=400&fit=crop",
      "https://images.unsplash.com/photo-1471204829532-29a2b63d5045?w=300&h=400&fit=crop",
    ];

    const newPolaroids = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      src: polaroidImages[i % polaroidImages.length],
      rotation: (Math.random() - 0.5) * 30, // Random rotation between -15 and 15 degrees
      top: Math.random() * 80 + 10, // Random position from 10% to 90%
      left: Math.random() * 80 + 10,
      scale: 0.8 + Math.random() * 0.4, // Random scale between 0.8 and 1.2
    }));
    setPolaroids(newPolaroids);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {polaroids.map((polaroid) => (
        <div
          key={polaroid.id}
          className="absolute opacity-20 hover:opacity-30 transition-opacity duration-300"
          style={{
            top: `${polaroid.top}%`,
            left: `${polaroid.left}%`,
            transform: `rotate(${polaroid.rotation}deg) scale(${polaroid.scale})`,
            transformOrigin: 'center center',
          }}
        >
          <div className="bg-white p-3 pb-8 shadow-lg">
            <img
              src={polaroid.src}
              alt=""
              className="w-32 h-40 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolaroidBackground;
