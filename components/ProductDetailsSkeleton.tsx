export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image shimmer */}
        <div className="w-full h-80 rounded-xl shimmer" />

        {/* Content skeleton */}
        <div className="space-y-4 animate-pulse">
          <div className="h-8 w-3/4 bg-gray-200 rounded" />
          <div className="h-5 w-1/3 bg-gray-200 rounded" />

          <div className="flex gap-2">
            <div className="h-4 w-10 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
          </div>

          <div className="h-6 w-1/4 bg-gray-200 rounded" />

          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-4/6 bg-gray-200 rounded" />
          </div>

          <div className="h-10 w-40 bg-gray-200 rounded-lg mt-4" />
        </div>
      </div>
    </div>
  );
}
