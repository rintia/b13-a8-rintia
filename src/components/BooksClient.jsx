"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";

const categories = ["All", "Story", "Tech", "Science"];

export default function BooksClient({ books }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBooks = books
    .filter((b) =>
      category === "All" ? true : b.category === category
    )
    .filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="flex gap-6">

      {/* Sidebar */}
      <div className="w-48">
        <h2 className="font-bold mb-3">Categories</h2>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`block w-full text-left p-2 rounded ${
              category === cat ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1">

        {/* Search */}
        <input
          type="text"
          placeholder="Search books..."
          className="border p-2 w-full mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Books */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

      </div>
    </div>
  );
}