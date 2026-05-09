import React from 'react';
import BookCard from './BookCard';

const Featured = async () => {
    const res = await fetch('https://b13-a8-rintia.vercel.app/data.json')
    const books = await res.json()
    const featuredBooks = books.slice(0,4)
    return (
            <div>
            <h1 className="text-2xl font-bold my-5">Featured Books</h1>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {featuredBooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>

    );
};

export default Featured;