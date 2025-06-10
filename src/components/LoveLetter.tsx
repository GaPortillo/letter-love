
import { useState } from "react";
import { Heart, Mail } from "lucide-react";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const loveMessage = `My Dearest Love,

Every day with you feels like Valentine's Day. You make my world brighter, my heart fuller, and my life complete.

From the moment I wake up to the second I fall asleep, you are the melody that plays in my heart. Your smile is my sunshine, your laugh is my favorite song, and your love is my greatest treasure.

Thank you for being my partner, my best friend, and my forever Valentine. I love you more than words could ever express.

With all my love,
Forever yours ❤️`;

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          A Letter Just For You
        </h2>
        
        <div className="relative">
          <div
            className={`cursor-pointer transition-all duration-700 transform ${
              isOpen ? "scale-105" : "hover:scale-105"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`bg-gradient-to-br from-red-100 to-pink-100 border-2 border-red-200 rounded-2xl p-8 shadow-2xl transition-all duration-700 ${
                isOpen ? "transform rotate-2" : ""
              }`}
            >
              {!isOpen ? (
                <div className="text-center">
                  <Mail className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
                  <p className="text-xl text-gray-700 font-medium mb-2">
                    Click to open your love letter
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Heart className="w-4 h-4 text-pink-500" fill="currentColor" />
                    <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                    <Heart className="w-4 h-4 text-rose-500" fill="currentColor" />
                  </div>
                </div>
              ) : (
                <div className="text-left animate-fade-in">
                  <div className="flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-red-500 animate-pulse" fill="currentColor" />
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {loveMessage.split('\n').map((line, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4 font-medium">
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-500 italic">
                      Click anywhere to close
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
