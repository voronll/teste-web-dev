export function LoadingTable() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-hidden rounded-md border">
        <div className="flex items-center justify-start py-4 px-4">
          <div className="h-10 w-64 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="border-t">
          <div className="bg-gray-50 px-6 py-3">
            <div className="flex justify-center space-x-8">
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="divide-y">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="px-6 py-4">
                <div className="flex justify-center space-x-8">
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
