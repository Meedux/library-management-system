import BookCard from '@/components/BookCard'
import Navbar from '@/components/Navbar'
import React from 'react'
import CategoryCardLarge from '@/components/CategoryCardLarge'

const page = () => {
  return (
    <>
        {/* Books Section */}
        <div className="grid grid-cols-8 gap-6 mt-20">
          <div className="col-span-2">
            <CategoryCardLarge />
          </div>
          <div className="col-span-2">
            <CategoryCardLarge />
          </div>
          <div className="col-span-2">
            <CategoryCardLarge />
          </div>
          <div className="col-span-2">
            <CategoryCardLarge />
          </div>
        </div>
    </>
  )
}

export default page