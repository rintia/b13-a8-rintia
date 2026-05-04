"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
   const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success('Logged out successful')
  }
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
        <Link href={"/"}>
        <Image
            src={"/logo2.png"}
            alt="logo"
            loading="eager"
            width={100}
            height={100}
            className="object-cover h-auto w-auto"
          />
        </Link>
       
          
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-books"}>All Books</Link>
          </li>
        
          <li>
            <Link href={"/my-profile"}>My Profile</Link>
          </li>
        </ul>

                <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/signup"}>Register</Link>
              </li>
              <li>
                <Link href={"/signin"}>Login</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">LogOut</Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;