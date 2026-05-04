
import BorrowButton from '@/components/BorrowButton';
import Image from 'next/image';




const BookDetails = async({params}) => {
      const {id} = await params;
    const res = await fetch('https://b13-a8-rintia.vercel.app/data.json')
    const books = await res.json()

    const book = books.find(b => b.id == id)

    return (
        <div className='flex gap-4 mt-12 mx-auto'>
            <div>
                <Image
                src={book.image_url}
                width={350}
                height={350}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={book.title}
                
                />

            </div>
              <div className='flex items-center'>
                    <div className='space-y-3'>
                        <h1 className='text-4xl font-bold'>{book.title}</h1>
                    <p> <i>Author:</i> {book.author}</p>
                    <p> <i>Category:</i> {book.category}</p>
                    <p><i className='font-light'>{book.description}</i></p>
                    <p className='font-thin'>Only <span className='font-bold'>{book.available_quantity}</span> copies left</p>
                    <BorrowButton/>
                    </div>
                </div>
            
        </div>
    );
};

export default BookDetails;