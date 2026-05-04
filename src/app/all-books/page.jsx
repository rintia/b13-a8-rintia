
import BookCard from '@/components/BookCard';
import BooksClient from '@/components/BooksClient';
import { Label, SearchField } from '@heroui/react';


const AllBooks = async () => {
    const res = await fetch('https://b13-a8-rintia.vercel.app/data.json')
    const books = await res.json()
    return (
        <div>
           

         <BooksClient books={books} />
            {/* <div className="grid grid-cols-4 gap-5">
                {books.map(book => <BookCard key={book.id} book={book} />)}
            </div> */}

        </div>
    );
};

export default AllBooks;