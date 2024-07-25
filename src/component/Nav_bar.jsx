import { Link,useLocation} from 'react-router-dom';

export default function MyNavabar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="w-full fixed inset-x-0 max-h-screen top-0 z-30 mx-auto border border-gray-100 bg-white/80 shadow backdrop-blur-lg">
      <header className="w-4/5 m-auto py-3 md:top-6 lg:w-4/5">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link aria-current="page" className="flex items-center" to="/">
                <img
                  className="h-7 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Logo"
                />
                <p className="sr-only">Website Title</p>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link
                aria-current="page"
                className={` ${pathname === '/shopping' ? 'bg-blue-500 p-2 rounded text-white' : 'hover:text-red-700 text-black'}`}
                to="/shopping"
              >
                Shopping
              </Link>
              <Link
                className={`${pathname === '/collection' ? 'bg-blue-500 p-2 rounded text-white' : 'hover:text-red-700 p-2 rounded text-black'}`}
                to="/collection"
              >
                New Colection
              </Link>
            </div>
            <div className="flex items-center justify-end gap-3">
              <Link
                className={`hidden items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset  transition-all duration-150 sm:inline-flex ${pathname === '/signUp' ? ' hover:text-blue-50 p-2 rounded text-white bg-blue-700' : 'bg-white p-2 rounded' }`}
               to={"/signUp"}
              >
                Sign Up
              </Link>
              <Link
                className={`hidden items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset  transition-all duration-150 sm:inline-flex ${pathname === '/signUp' ? 'bg-white p-2 rounded'  : ' hover:text-blue-50 p-2 rounded text-white bg-blue-700' }`}
               to={"/logIn"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
