import AllBooksCard from '@/components/allbookcard/page';
import API from '@/lib/func/func';

const AllBooksPage = async() => {
  const books = await API();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-14 space-y-8">
        {
          books.map((book) => <AllBooksCard key={book.id} book={book}></AllBooksCard>)
        }
      </div>
    </div>
  );
};

export default AllBooksPage;