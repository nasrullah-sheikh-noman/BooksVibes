import { DetailsId } from "@/lib/func/func";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import BookNotFound from "./booknotfound";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const bookDetails = await DetailsId(id);

  if (!bookDetails) {
    // redirect('/bookddetails/booknotfound');
    return <BookNotFound />;
  }

  return (
    <div>
      <Card className="w-full mx-auto max-w-md overflow-hidden rounded-2xl bg-gray-100 p-5  items-center text-center my-14">
        <div className="relative h-96 w-full">
          <Image
            src={bookDetails.image_url}
            alt={bookDetails.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute top-0 left-0 w-full bg-black/50 p-4">
            <h2 className="text-2xl font-bold text-white">
              {bookDetails.title}
            </h2>
          </div>

          {/* <div className="absolute bottom-0 right-0 flex flex-col items-end gap-2 bg-black/50 p-4">
            <p className="text-lg font-semibold text-white">{bookDetails.author}</p>
          </div> */}
        </div>

        <div className="space-y-5 mt-8 mb-3">
          <div className="text-2xl font-semibold">
            {bookDetails.description}
          </div>

          <div className="text-left space-y-5 mt-12">
            <div className="text-xl font-semibold text-gray-600">
              <span className="font-bold text-black">Category: </span>
              {bookDetails.category}
            </div>

            <div className="text-xl font-semibold text-gray-600">
              <span className="font-bold text-black">Quantity: </span>
              {bookDetails.available_quantity}
            </div>

            <div className="text-xl font-semibold text-gray-600">
              <span className="font-bold text-black">Author: </span>
              {bookDetails.author}
            </div>
          </div>

          <Button fullWidth variant="secondary" className="bg-blue-500 text-white mt-6">
            Borrow This Book
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BookDetailsPage;
