'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const BorrowButton = () => {
         const userData = authClient.useSession();
          const user = userData.data?.user;
          const router = useRouter()
        const handleBorrow = async() =>{
            if(user){
                toast.success('Book borrowed successfully')
            }
            else{
                router.push('/signin')
            }
        }
    return (
        <div>
            <Button onClick={handleBorrow}>Borrow This Book</Button>
        </div>
    );
};

export default BorrowButton;