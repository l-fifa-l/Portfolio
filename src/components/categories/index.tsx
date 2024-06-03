import React from 'react'
import { categories } from "@lib/categories";

export function Categories() {
  return (
    <>
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Categories
      </h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat} className="text-gray-700 dark:text-gray-300">
            <a
              href={`blogs/category/${cat}`}
              className="hover:text-gray-900 dark:hover:text-gray-100 transition duration-300"
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>
      </>
  )
}