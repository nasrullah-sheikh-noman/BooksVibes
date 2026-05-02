import Link from "next/link";

const BookNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center ">
        <h1 className="text-8xl font-extrabold text-slate-800 tracking-tight">
          404
        </h1>

        <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full mt-2"></div>

        <h2 className="mt-6 text-3xl font-bold text-slate-700">
          Oops! Book not found
        </h2>

        <p className="mt-3 text-slate-500 max-w-md mx-auto">
          The book you are looking for might have been removed, renamed,
          or is temporarily unavailable.
        </p>

        <Link
          href="/all-books"
          className="inline-block mt-8 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          See all books
        </Link>
      </div>
    </div>
  );
};

export default BookNotFound;