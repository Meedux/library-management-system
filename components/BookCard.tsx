import React from "react";
import Image from "next/image";

const BookCard = () => {
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
          <h2 className="card-title">Book Title</h2>
          <p>Book Description</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
