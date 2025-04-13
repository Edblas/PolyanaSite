import React from 'react';
import { Cake, Clock, MapPin, Phone, Instagram, Facebook, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/cookie-primeira-imagem.png")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <img 
              src="/logo-marca.jpg"   
              alt="Polyana Moraes Logo" 
              className="h-20 w-20"
            />
          </div>
          <div className="flex gap-6 text-white">
            <a href="#menu" className="hover:text-pink-200 transition">Especialidades</a>
            <a href="#sobre" className="hover:text-pink-200 transition">Nossa História</a>
            <a href="#contato" className="hover:text-pink-200 transition">Contato</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-5xl font-serif text-white mb-6">Polyana Moraes</h2>
          <p className="text-xl text-white mb-4">Cookies & Doces</p>
          <p className="text-lg text-white mb-8">Sabores que conquistam corações</p>
          <a 
            href="https://instadelivery.com.br/polyanamoraescookies" 
            className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"
          >
            Ver Cardápio
          </a>  
        </div>
      </header>

      {/* Featured Products */}
      <section id="menu" className="py-20 px-6">
        <h2 className="text-3xl font-serif text-center mb-12">Nossas Especialidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Torta de Pistache",
              image: "/torta.jpg",
              price: "R$ 15,90",
              description: "Cookies crocantes por fora e macios por dentro, recheados com gotas de chocolate belga. Perfeitos para qualquer momento do dia."
            },
            {
              name: "Sobremesa surpresa de uva verde",
              image: "uva-sobremessa.jpg",
              price: "R$ 79,90",
              description: "Uma deliciosa combinação de massa amanteigada, creme suave e morangos frescos. Uma sobremesa refrescante e irresistível."
            },
            {
              name: "Fatia de ninho com morango",
              image: "torta-ninho.jpg",
              price: "R$ 19,90",
              description: "Fatia generosa do nosso famoso com cobertura de cream cheese. Uma explosão de sabor em cada garfada."
            },
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full object-cover aspect-[1/1]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <p className="text-pink-500 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-8">Nossa História</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              A história da Polyana Moraes Cookies & Doces começou com uma paixão pela confeitaria e um sonho de levar felicidade através de sabores únicos e memoráveis. Tudo começou na cozinha de casa, onde os primeiros cookies foram assados com muito amor e dedicação.
            </p>
            <p className="mb-6">
              O que começou como um hobby se transformou em uma marca reconhecida pela qualidade e sabor incomparável. Cada cookie é preparado artesanalmente, seguindo receitas exclusivas desenvolvidas pela própria Polyana, que combina ingredientes selecionados para criar experiências gastronômicas únicas.
            </p>
            <p className="mb-6">
              Hoje, além dos famosos cookies, oferecemos deliciosas tortas geladas e fatias de bolo que conquistaram o paladar de nossos clientes. Cada produto é preparado com o mesmo cuidado e atenção aos detalhes que fizeram nossa marca crescer e se tornar sinônimo de qualidade e excelência.
            </p>
          </div>
          <div className="flex justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <Heart className="text-pink-500" />
              <span>Feito com Amor</span>
            </div>
            <div className="flex items-center gap-2">
              <Cake className="text-pink-500" />
              <span>Receitas Exclusivas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-pink-500" />
                <p>Rua Santo Padre Pio, 21 Jardim Olimpia <br /> Alfenas, MG</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-pink-500" />
                <p>(35) 99894-4112</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-pink-500" />
                <p>Ter-Dom: 10h às 20h</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif">Siga-nos</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/polyanamoraescookies?igsh=YjFpeGtwYmw2MHE0" className="text-pink-500 hover:text-pink-600 transition">
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=35998944112" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-500 hover:text-green-600 transition"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0V9a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Polyana Moraes Cookies & Doces. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;