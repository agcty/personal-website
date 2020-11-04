import React from "react";

function Page() {
  return (
    <div className="max-w-lg py-12 mx-auto">
      <div>
        <h1>Title</h1>
        <p>This is a small paragraph</p>

        <img
          src="https://images.unsplash.com/photo-1604321951949-e9d5710716db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3578&q=80"
          width="300"
          alt="test"
          height="300"
        />
      </div>

      <div className="mt-12" />

      <div className="p-8 border border-gray-600 rounded-lg">
        <h1 className="text-2xl font-semibold">Title</h1>
        <p className="mt-1 font-semibold">This is a small paragraph</p>

        <img
          src="https://images.unsplash.com/photo-1604321951949-e9d5710716db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3578&q=80"
          width="300"
          height="300"
          alt="test"
          className="mt-6 shadow-lg"
        />
      </div>

      <div className="mt-12" />

      <div className="p-8 border border-gray-600 rounded-lg">
        <h1 className="text-2xl font-semibold">Title</h1>
        <p className="mt-1 font-semibold">This is a small paragraph</p>

        <img
          src="https://images.unsplash.com/photo-1604321951949-e9d5710716db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3578&q=80"
          width="300"
          height="300"
          alt="test"
          className="mt-6 shadow-lg custom-blur"
        />

        <style jsx>
          {`
            .custom-blur {
              filter: blur(20px) saturate(180%);
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Page;
