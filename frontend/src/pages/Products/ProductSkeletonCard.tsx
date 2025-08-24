
const ProductSkeletonCard: React.FC = () => {
    return (
        <div className="border border-gray-300 rounded-2xl p-4 hover:shadow-lg animate-pulse">
            <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>
            <div className="h-5 bg-gray-300 rounded mb-2"></div>

            <div className="h-4 bg-gray-300 rounded mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

            <div className="h-5 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-10 bg-gray-300 rounded-xl w-1/2"></div>
        </div>
    )
}

export default ProductSkeletonCard;