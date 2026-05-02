
import NotFoundPage from "@/app/not-found";
import { DetailsId } from "@/lib/func/func";
import { Card } from "@heroui/react";
import Image from "next/image";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const bookDetails = await DetailsId(id);

  if(!bookDetails) {
    NotFoundPage();
  }

  return (
    <div>
      <Card className="w-full mx-auto max-w-md overflow-hidden rounded-2xl bg-gray-100 p-5  items-center text-center">
        <div className="relative h-96 w-full">
          <Image
            src={bookDetails.image_url}
            alt={bookDetails.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute top-0 left-0 w-full bg-black/50 p-4">
            <h2 className="text-2xl font-bold text-white">{bookDetails.title}</h2>
          </div>

          <div className="absolute bottom-0 right-0 flex flex-col items-end gap-2 bg-black/50 p-4">
            <p className="text-lg font-semibold text-white">{bookDetails.author}</p>

            
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookDetailsPage;
