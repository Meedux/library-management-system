"use client";

import BookCard from "@/components/BookCard";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <div className="grid grid-cols-8 gap-6 mt-20">
        <div className="col-span-2">
          <BookCard />
        </div>
        <div className="col-span-2">
          <BookCard />
        </div>
        <div className="col-span-2">
          <BookCard />
        </div>
        <div className="col-span-2">
          <BookCard />
        </div>
      </div>
    </>
  );
};

export default page;
