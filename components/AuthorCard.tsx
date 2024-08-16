import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const AuthorCard = () => {
    return (
        <>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src="/author-placeholder.jpg"
                alt="Cover"
                width={300}
                height={400}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Author Name</h2>
              <p>Author Desciption</p>
              <div className="card-actions justify-end">
                <Link href="/authors/16" className="btn btn-primary">Discover</Link>
              </div>
            </div>
          </div>
        </>
      );
}

export default AuthorCard