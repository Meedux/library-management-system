import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CategoryCardLarge = () => {
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
              <h2 className="card-title">Category Title</h2>
              <p>Category Description</p>
              <div className="card-actions justify-end">
                <Link href={"/category/16"} className="btn btn-primary">Discover</Link>
              </div>
            </div>
          </div>
        </>
      );
}

export default CategoryCardLarge