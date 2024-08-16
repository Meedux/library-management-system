
"use client";

import React, { useState } from 'react'
import CategoryCardLarge from '@/components/CategoryCardLarge'
import { useEffect } from 'react'
import { Category } from '@prisma/client'

const page = () => {
  const [categories,setCategories] = useState<Category[]>([])
  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch('http://localhost:3000/api/category')
          const data = await response.json()
          setCategories(data.category)
        } catch (error) {
          console.log(error)
        }
      }
    )()
  }, [])
  return (
    <>
        <div className="grid grid-cols-8 gap-6 mt-20">
          {
            categories?.map(category => (
              <div key={category.id} className="col-span-2">
                <CategoryCardLarge category={category} />
              </div>
            ))
          }
        </div>
    </>
  )
}

export default page