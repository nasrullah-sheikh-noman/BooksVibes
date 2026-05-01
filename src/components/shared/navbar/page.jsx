import Link from "next/link";

const NavbarPage = () => {
  return (
    <div>
      <div className="navbar grid grid-cols-3 container mx-auto bg-base-100 shadow-sm">
        <div className="">
          <Link
            href="/"
            className="btn btn-ghost text-3xl text-purple-600 font-extrabold"
          >
            Books Vibes
          </Link>
        </div>
        <div>
          <ul
            className="flex gap-4 mt-3 p-2 "
          >
            <Link href="/home">
              Home
            </Link>
            <Link href="/all-books">
              All Books
            </Link>
          </ul>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {/* <Image
                  width={300}
                  height={300}
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                /> */}
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
