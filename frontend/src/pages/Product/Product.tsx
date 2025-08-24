import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchProduct } from "../../services/product";
import ProductSkeleton from "./ProductSkeleton";

const Product: React.FC = () => {
    const {id} = useParams<{id: string | undefined}>()

    const {data: product, isLoading, error} = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProduct(parseInt(id ?? '0')),
        enabled: !!id
    })

    if (isLoading) {
        return <div className="grid grid-cols-2 gap-2">
            <ProductSkeleton />
        </div>
    }
    if (error) return <p className="p-6 text-red-500">Error..</p>
    if (!product) return <p className="p-6 text-red-500">There is no product..</p>

    const hasInCart = false;

    const addProductToCart = () => {};

    const removeProductFromCart = (id: number) => {}

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h1 className="text-2xl font-bold mb02">{product.name}</h1>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                    {!hasInCart && (
                        <button onClick={() => addProductToCart()} className="bg-green-600 text-white px-6 py-2 rounded-xl cursor-pointer">
                            Add To Cart
                        </button>
                    )}
                    {hasInCart && (
                        <button onClick={() => removeProductFromCart(product.id)} className="bg-red-600 text-white px-6 py-2 rounded-xl cursor-pointer">
                            Remove
                        </button>
                    )}
                </div>
                <div>
                    <img src={product.image} alt={product.name} className="rounded-xl mb-4"/>
                </div>
            </div>
        </div>
    )
}

export default Product;