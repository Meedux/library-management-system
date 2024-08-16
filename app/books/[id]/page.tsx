"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Book } from "@prisma/client";

const page = () => {
  const [book, setBook] = useState<Book | null>(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/books/${id}`);
          const data = await response.json();
          setBook(data.book);
        } catch (error) {
          console.log(error);
        }
      }
    )();
  }, [id]);
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
          <span className="font-bold text-5xl mb-8">{book?.BookName}</span>
          <span className="font-semibold text-2xl">{book?.BookDescription}</span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-4xl mb-4">Book Content</h2>
        <p className="text-lg">
          {book?.BookContent}
        </p>
      </div>
    </>
  );
};

export default page;
