import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 py-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-gray-300">&copy; 2023 My Awesome Recipe App</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
