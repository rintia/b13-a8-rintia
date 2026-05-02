
import BookCard from '@/components/BookCard';
import { Label, SearchField } from '@heroui/react';


const AllBooks = async () => {
    const res = await fetch('https://b13-a8-rintia.vercel.app/data.json')
    const books = await res.json()
    return (
        <div>
            

            <SearchField name="search" className="w-70 my-12">
                <Label>Search Books by Title</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        <h1 className="text-2xl font-bold m-4">All Books</h1>
            <div className="grid grid-cols-4 gap-5">
                {books.map(book => <BookCard key={book.id} book={book} />)}
            </div>

        </div>
    );
};

export default AllBooks;