"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BorderlinePage = () => {
  const path = usePathname();
  console.log("path", path);
  return (
    <div>
      <div className="flex-none">
          <ul className="menu menu-horizontal gap-2 px-1 ">
            <li 
            className={`text-sm font-semibold text-gray-500 ${path == "/" && "border-b-2"} `}
            >
              <Link href="/">Home</Link>
            </li>
            <li 
            className={`text-sm font-semibold text-gray-500 ${path == "/all-books" && "border-b-2"} `}
            >
              <Link href="/all-books">All Books</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default BorderlinePage;