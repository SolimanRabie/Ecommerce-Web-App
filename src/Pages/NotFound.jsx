import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="text-gray-500 mt-4">Page Not Found</p>

      <Link to="/" className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
