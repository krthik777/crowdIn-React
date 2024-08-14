import React from "react";

function Home() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="p-10 max-w-3xl w-full bg-gray-800 rounded-lg shadow-xl">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg text-center shadow-md">
          <h1 className="text-white text-4xl font-bold">
            Welcome to CrowdIN!
          </h1>
        </div>

        {/* Description Section */}
        <div className="text-center mt-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            CrowdIN is a cross-platform project designed to streamline and
            optimize crowd management. Our solution is available on both web and Android platforms.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Join us and experience the future of crowd management technology!
          </p>
        </div>

        {/* Get Started Section */}
        <div className="mt-12 text-center">
          <h2 className="text-white text-2xl font-semibold">Get Started</h2>
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="/web"
              className="bg-indigo-500 hover:bg-blue-700 transition duration-200 text-white font-medium py-3 px-8 rounded-lg shadow-lg"
            >
              Visit Web App
            </a>
            <a
              href="/download"
              className="bg-pink-500 hover:bg-pink-900 transition duration-200 text-white font-medium py-3 px-8 rounded-lg shadow-lg"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
