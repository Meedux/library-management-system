"use client";
import BookCard from "@/components/BookCard";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Book } from "@prisma/client";

const page = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/author/${id}`);
          const data = await response.json();
          setBooks(data.books);
        } catch (error) {
          console.log(error);
        }
      }
    )();
  }, [id]);
  return (
    <>
    
      <div className="grid grid-cols-8 gap-6 mt-20">
        {
          books.map(book => (
            <div key={book.id} className="col-span-2">
              <BookCard book={book} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default page;
