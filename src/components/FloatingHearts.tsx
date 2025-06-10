
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface HeartType {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  color: string;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  useEffect(() => {
    const colors = ["text-pink-300", "text-red-300", "text-rose-300", "text-pink-400"];
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 6,
      size: 16 + Math.random() * 16,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <Heart
            className={`${heart.color} opacity-60`}
            size={heart.size}
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
