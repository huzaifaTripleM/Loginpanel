import React from "react";

const AppFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <p className="text-sm">© 2023 My Awesome Company</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default AppFooter;