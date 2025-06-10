import { useEffect, useState } from "react";
import img1 from "../imgs/IMG_1646.JPG";
import img2 from "../imgs/IMG_0913.JPG";
import img3 from "../imgs/20210905_131505.jpg";
import img4 from "../imgs/1000041876.jpg";

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
    const polaroidImages = [img1, img2, img3, img4];

    const generatedPolaroids: PolaroidType[] = [];
    const minDistance = 12; // distância mínima (%) entre as polaroides

    function isFarEnough(newTop: number, newLeft: number): boolean {
      return generatedPolaroids.every((existing) => {
        const dx = newLeft - existing.left;
        const dy = newTop - existing.top;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance >= minDistance;
      });
    }

    for (let i = 0; i < 8; i++) {
      let attempts = 0;
      let top = 0, left = 0;

      // Garante que tentaremos no máximo 50 vezes para encontrar uma posição válida
      do {
        top = Math.random() * 80 + 10;
        left = Math.random() * 80 + 10;
        attempts++;
      } while (!isFarEnough(top, left) && attempts < 50);

      generatedPolaroids.push({
        id: i,
        src: polaroidImages[i % polaroidImages.length],
        rotation: (Math.random() - 0.5) * 30,
        top,
        left,
        scale: 0.8 + Math.random() * 0.4,
      });
    }

    setPolaroids(generatedPolaroids);
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
            transformOrigin: "center center",
          }}
        >
          <div className="bg-white p-3 pb-8 shadow-lg rounded">
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
