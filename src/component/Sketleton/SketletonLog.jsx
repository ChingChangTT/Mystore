export default function LogInSkeleton() {
  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-gray-200 animate-pulse">
          <div className="w-full max-w-md z-10">
            <div className="w-3/4 h-8 bg-gray-300 mb-4 rounded" />
            <div className="w-5/6 h-6 bg-gray-300 mb-2 rounded" />
            <div className="w-full h-6 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="w-3/4 h-8 bg-gray-300 mb-4 rounded" />
              <div className="w-5/6 h-6 bg-gray-300 rounded" />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute right-3 mt-4">
                  <div className="w-6 h-6 bg-gray-300 rounded-full" />
                </div>
                <div className="w-full h-10 bg-gray-300 rounded" />
              </div>
              <div className="relative">
                <div className="w-full h-10 bg-gray-300 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded" />
                  <div className="ml-2 w-24 h-4 bg-gray-300 rounded" />
                </div>
                <div className="w-40 h-4 bg-gray-300 rounded" />
              </div>
              <div>
                <div className="w-full h-12 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full" />
              </div>
              <div className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <div className="w-2/4 h-4 bg-gray-300 rounded mb-2" />
                <div className="w-1/4 h-4 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
