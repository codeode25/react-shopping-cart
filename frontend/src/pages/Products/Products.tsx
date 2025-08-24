import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/product";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
    const {data: products, isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    if (isLoading) return <p className="p-6">Loading....</p>
    if (error) return <p className="p-6 text-red-500">Error..</p>

    return <>
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((product) => (
                <ProductCard key={product.id} {...product}/>
            ))}            
        </div>
    </>
}

export default Products;