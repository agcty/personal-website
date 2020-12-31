import React from "react";

function Page() {
  return (
    <div className="w-screen h-screen bg-geist-100">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="p-8 bg-white border border-gray-200 rounded-md">
          <div className="flex flex-col space-y-6 text-lg min-w-400">
            <h2 className="text-3xl">How it works</h2>
            <div className="flex space-x-2">
              <span className="font-bold">🔍</span>
              <span className="text-gray-500">
                Go through all{" "}
                <a className="text-gray-800 underline" href="/">
                  components
                </a>
              </span>
            </div>
            <div className="flex space-x-2">
              <span className="font-bold">👨🏻‍💻</span>
              <span className="text-gray-500">Click the copy button</span>
            </div>
            <div className="flex space-x-2">
              <span className="font-bold">🌈</span>
              <span className="text-gray-500">
                Paste into your personal project
              </span>
            </div>
            <div className="flex space-x-2">
              <span className="font-bold">🥰</span>
              <span className="text-gray-500">Enjoy a free component</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
