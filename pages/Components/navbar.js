import "tailwindcss/tailwind.css";

export default function Navbar() {
  return (
    <nav>
      <div className="container p-6 min-w-full">
        <div className="flex justify-between h-20 px-20  items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl lg:text-2xl font-bold cursor-pointer mr-4">
              textgen.ai
            </h1>
            <div className="hidden md:flex justify-around space-x-4">
              <a href="#" className="hover:text-indigo-600 text-gray-700">
                Home
              </a>
              <a href="#" className="hover:text-indigo-600 text-gray-700">
                About
              </a>
              <a href="#" className="hover:text-indigo-600 text-gray-700">
                Service
              </a>
              <a href="#" className="hover:text-indigo-600 text-gray-700">
                Contact
              </a>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-gray-800 text-sm">
              LOGIN
            </a>
            <a
              href="#"
              className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
            >
              SIGNUP
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
