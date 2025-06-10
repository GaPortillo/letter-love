
import { useState } from "react";
import { Heart, Mail } from "lucide-react";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const loveMessage = `Meu amor,

Cada dia com você é especial. Você faz meu dia mais feliz, meu riso se abrir e faz minha vida ter sentido.

O Gabriel do passado não tem ideia de como uma brincadeirinha boba de integração na escola faria ele conhecer a pessoa que mudaria sua vida, ou melhor, a completaria.

Desde então eu sou feliz, sou completo, os dias que passo longe de você sinto que uma parte minha está faltando.

Porém, Graças a Deus isso está para mudar, em setembro meu eu vai se sentir completo para sempre, e eu quero que você também se sinta completa ao meu lado, que você se sinta amada, alegre, que nos dias ruins você saiba que vai ter com quem contar, e essa pessoa sou eu meu amor.

Eu te amo❤
Te espero no altar.

Com amor,
Gabriel❤️`;

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Uma cartinha para meu amor
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
                    clique para abrir a carta
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
                      Clique novamente para fechar a carta
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
