import React from "react";

const Benefits = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Good for You, the Planet, and Your Wallet
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Time-Saving: We deliver everything you need for a delicious dinner
            and save you time in the supermarket!
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Value for Money: We offer a pre-selection of balanced recipes and
            send you a box full of fresh, high-quality ingredients.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Reduce Your Ecological Footprint: HelloFresh invests in various
            projects worldwide that address the challenges of climate change and
            help us offset our CO₂ emissions according to international
            standards. Learn more.
          </p>
          <button className="mt-8 py-2 px-6 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 md:py-3 md:text-lg md:px-8">
            Start now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
