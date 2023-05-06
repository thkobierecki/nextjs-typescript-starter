import Link from "next/link";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  return (
    <nav className="flex flex-col w-64 h-full px-4 py-8 bg-white border-r border-gray-200">
      <div className="mb-8">
        <Link href="/app">
          <span className="text-xl font-bold text-blue-500">FunTales</span>
        </Link>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col space-y-2">
          {/* <li className="text-gray-600">
            <Link href="/app">
              <span className="hover:text-blue-500">Stories</span>
            </Link>
          </li>
          <li className="text-gray-600">
            <Link href="/settings">
              <span className="hover:text-blue-500">Settings</span>
            </Link>
          </li> */}
        </ul>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
