
const ProductSkeleton: React.FC = () => {
    return (
        <>
            <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded-lg animate-pulse w-3/4"></div>

                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse w-4/6"></div>

                <div className="h-6 bg-gray-300 rounded animate-pulse w-1/3 mt-2"></div>
                <div className="h-12 bg-gray-300 rounded-xl animate-pulse w-1/2"></div>
            </div>
            <div className="flex justify-center">
                <div className="w-full h-64 md:h-80 bg-gray-300 rounded-xl animate-pulse"></div>
            </div>
        </>
    )
}

export default ProductSkeleton;