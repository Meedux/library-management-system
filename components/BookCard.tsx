import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@prisma/client";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image
            src="/book-cover-placeholder.jpg"
            alt="Cover"
            width={300}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.BookName}</h2>
          <p>{book.BookDescription}</p>
          <div className="card-actions justify-end">
            <Link href={`/books/${book.id}`} className="btn btn-primary">Read Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
