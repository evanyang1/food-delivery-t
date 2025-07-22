import React, { useState } from "react";
import { cardData, additionalData } from "../../assets/dummydata";
import { useCart } from "../../CartContext/CartContext";

const SpecialOffer = () => {
  const [showAll, setShowAll] = useState(false);
  const initialData = [...cardData, ...additionalData];
  const { addToCart, updateQuantity, removeFromCart, cartItems } = useCart();

  return (
    <div className="bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-16 px-4 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1
            className="text-5xl font-bold mb-4 transform transition-all bg-gradient-to-r from-amber-400
          to-red-500 bg-clip-text text-transparent font-[Playfair Display] italic "
          >
            Today's <span className="text-stroke-gold"> Special</span> Offers
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Savor the extraorindary with our culinary masterpieces crafted to
            perfection.
          </p>
        </div>

        {/* Product Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(showAll ? initialData : initialData.slice(0, 4)).map(
            (item, index) => {
              const cartItem = cardData.find((ci) => ci.id === item.id);
              const quantity = cartItem ? cartItem.quantity : 0;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="relative group bg-[#4b3b3b] rounded-3xl 
              overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-all duration-500
              hover:shadow-red-900/40 border-2 border-transparent hover:border-amber-500/20 before:absolute
              before:inset-0 hover:before:opacity-20"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover
                    brightness-90 group-hover:brightness-110 transition-all duration-500 "
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent
                    to-black/90 "
                    />
                    <div
                      className="absolute bottom-4 left-4 right-4 flex justify-between items-center
                    bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full"
                    />
                    <span className="flex items-center gap-2 text-amber-400"></span>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
