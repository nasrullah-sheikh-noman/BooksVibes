import API from "@/lib/func/func";
import CardPage from "../card/page";

const FeaturedPage = async () => {
  const books = await API();
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700">Featured page</h2>
      <div className="grid grid-cols-2 gap-4 items-center text-center">
        {[...books]
          .sort((a, b) => b.available_quantity - a.available_quantity)
          .slice(0, 4).map((book) => <CardPage key={book.id} book={book}></CardPage>)
        }
      </div>
    </div>
  );
};

export default FeaturedPage;
