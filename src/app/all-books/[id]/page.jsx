import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

const BookDetails = async({params}) => {
      const {id} = await params;
    const res = await fetch('https://b13-a8-rintia.vercel.app/data.json')
    const books = await res.json()

    const book = books.find(b => b.id == id)
     const userData = authClient.useSession();
      const user = userData.data?.user;
      const router = useRouter();
    const handleBorrow = async() =>{
        if(user){
            toast.success('Book borrowed successfully')
        }
        else{
            router.push('/signin')
        }
    }
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
                    <Button onClick={handleBorrow}>Borrow This Book</Button>
                    </div>
                </div>
            
        </div>
    );
};

export default BookDetails;