"use client";

import BookCard from '@/components/BookCard'
import Navbar from '@/components/Navbar'
import { Book } from '@prisma/client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [books,setBooks] = useState<Book[]>([])

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        const data: { book: Book[] } = response.data;
        setBooks(data.book);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    })();
  }, []);
  return (
    <>
      {/* Search Section */}
      <div className="grid grid-cols-6 gap-4 mt-20">
          <div className="col-span-6">
            <div className="flex justify-center items-center">
              <label className="input w-1/2 input-bordered mr-6 flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search for Books" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button className="btn btn-success">Search</button>
            </div>
          </div>
        </div>

        {/* Books Section */}
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
  )
}

export default page