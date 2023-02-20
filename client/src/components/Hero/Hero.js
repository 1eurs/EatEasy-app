import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-4">
          EatEazy
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-black font-medium mb-8">
          Your hassle-free meal planning solution
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-blacks font-medium mb-12">
          EatEazy is the perfect way to make meal planning easy and enjoyable.
          With our weekly subscription service, you'll get access to delicious
          recipes from top chefs and nutritionists, handpicked just for you.
          Simply choose your meals, and we'll take care of the rest.
        </p>
        <a
          href="#"
          className="bg-white py-3 px-6 rounded-full text-lg sm:text-xl font-medium text-gray-800 hover:bg-gray-300"
        >
          Start your free trial
        </a>
      </div>
    </div>
  );
}

export default Hero;
