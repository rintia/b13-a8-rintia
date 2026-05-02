import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://www.nli.ie/sites/default/files/styles/event_large_large/public/2022-10/nli-oct-screen-res-56.jpg?h=78aab1d8&itok=8MZedc6a')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Borrow your favourite book with one click
          </p>

          <div className="flex gap-4">
            

            <Link href="/all-books">
              <Button variant="outline" className="text-white">
                Browse Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;