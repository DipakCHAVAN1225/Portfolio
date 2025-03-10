

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Oops! The section you are looking for does not exist.</p>
      <a href="#home" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Go to Home
      </a>
    </div>
  );
};

export default ErrorPage;
