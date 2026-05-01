`use client`;
import { Card } from "@heroui/react";
import Image from "next/image";

const CardPage = ({ book }) => {
  return (
    <div>
      {
        <Card className="w-full mx-auto max-w-md overflow-hidden rounded-2xl bg-gray-100 p-5  items-center text-center">
          <div className="relative h-96 w-full">
            <Image
              src={book.image_url}
              alt={book.title}
              fill
              className="object-cover"
               sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute top-0 left-0 w-full bg-black/50 p-4">
              <h2 className="text-2xl font-bold text-white">{book.title}</h2>
            </div>

            <div className="absolute bottom-0 right-0 flex flex-col items-end gap-2 bg-black/50 p-4">
              <p className="text-lg font-semibold text-white">{book.author}</p>

              <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200 cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        </Card>
      }
    </div>
  );
};

export default CardPage;
