import React from "react";

function InfoText() {
  return (
    <div className="flex flex-col space-y-6 text-lg">
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
        <span className="text-gray-500">Paste into your personal project</span>
      </div>
      <div className="flex space-x-2">
        <span className="font-bold">🥰</span>
        <span className="text-gray-500">Enjoy a free component</span>
      </div>
    </div>
  );
}

export default InfoText;
