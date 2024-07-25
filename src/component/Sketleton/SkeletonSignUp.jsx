

const SkeletonLoader = () => {
  return (
    <div className="flex h-screen">
      {/* Left Pane */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-200">
        <div className="max-w-md w-full p-4 animate-pulse">
          <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div>
        </div>
      </div>
      {/* Right Pane */}
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-6 animate-pulse">
          <div className="bg-gray-300 h-8 w-3/4 rounded-md mx-auto mb-4"></div>
          <div className="bg-gray-300 h-6 w-1/2 rounded-md mx-auto mb-4"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-300 h-12 rounded-md"></div>
            ))}
          </div>
          <div className="bg-gray-300 h-12 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
