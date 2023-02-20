import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16">
          <div className="col-span-1 flex flex-col text-center">
            <img
              className="mx-auto h-34 w-auto"
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/be/cms/homepage/image_columns/hiw-1-v2.png"
              alt="Choose Recipes Icon"
            />
            <h3 className="mt-6 text-xl font-medium text-gray-900">
              Choose Your Recipes
            </h3>
            <p className="mt-2 text-md text-gray-500">
              Precise ingredients for less waste
            </p>
            <p className="mt-2 text-md text-gray-500">
              Delivered safely to your doorstep
            </p>
          </div>
          <div className="col-span-1 flex flex-col text-center">
            <img
              className="mx-auto h-34 w-auto"
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/be/cms/homepage/image_columns/hiw-2-v2.png"
              alt="Customize Box Icon"
            />
            <h3 className="mt-6 text-xl font-medium text-gray-900">
              Build Your Perfect Box
            </h3>
            <p className="mt-2 text-md text-gray-500">
              Delicious recipes for every lifestyle and many extras
            </p>
          </div>
          <div className="col-span-1 flex flex-col text-center">
            <img
              className="mx-auto h-34 w-auto"
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/be/cms/homepage/image_columns/hiw-3-v2.png"
              alt="Receive Delivery Icon"
            />
            <h3 className="mt-6 text-xl font-medium text-gray-900">
              Receive Your Delivery
            </h3>
            <p className="mt-2 text-md text-gray-500">
              Easy planning and convenient box drop-off at your doorstep
            </p>
          </div>
          <div className="col-span-1 flex flex-col text-center">
            <img
              className="mx-auto h-34 w-auto"
              src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_375/hellofresh_website/be/cms/homepage/image_columns/hiw-4-v3.png"
              alt="Cook with Fresh Ingredients Icon"
            />
            <h3 className="mt-6 text-xl font-medium text-gray-900">
              Cook with Fresh Seasonal Ingredients
            </h3>
            <p className="mt-2 text-md text-gray-500">
              Effortlessly prepare in your own kitchen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
