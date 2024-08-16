"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const page = () => {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <div className="grid grid-cols-6 gap-4 mt-20 mb-16">
        <div className="col-span-2">
          <Image
            src="/book-cover-placeholder.jpg"
            alt="book"
            width={300}
            height={400}
          />
        </div>

        <div className="col-span-4 flex items-start justify-center flex-col">
          <span className="font-bold text-5xl mb-8">Book Title</span>
          <span className="font-semibold text-2xl">Book Description</span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-4xl mb-4">Book Content</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export default page;
