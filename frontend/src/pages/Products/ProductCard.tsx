import { Link } from "react-router";
import type { Product } from "../../types";
import { useCart } from "../../contexts/CartContext";
import toast from "react-hot-toast";

const ProductCard: React.FC<Product> = ({
    id, name, price, description, image
}) => {
    const {addToCart, hasInCart, removeFromCart} = useCart();

    const addProductToCart = () => {
        addToCart({id, name, price, description, image})
        toast.success("Product added to cart.")
    };

    const removeProductFromCart = (id: number) => {
        removeFromCart(id)
        toast.success("Product removed from cart.")
    }

    return <>
        <div className="border border-gray-300 rounded-2xl p-4 hover:shadow-lg">
            <img src={image} alt={name} className="rounded-xl mb-4"/>
            <h2 className="text-lg font-semibold line-clamp-1 text-ellipsis">{name}</h2>
            <p className="h-[40px] min-h-[40px] text-sm line-clamp-2 text-ellipsis">
                {description}
            </p>
            <p className="flex justify-between items-center">
                ${price.toFixed(2)}
            </p>
            <div className="flex justify-between items-center">
                <Link to={`/product/${id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer"
                >
                    View Details
                </Link>
                {!hasInCart(id) && (
                    <button onClick={() => addProductToCart()} className="bg-green-600 text-white px-6 py-2 rounded-xl cursor-pointer">
                        Add To Cart
                    </button>
                )}
                {hasInCart(id) && (
                    <button onClick={() => removeProductFromCart(id)} className="bg-red-600 text-white px-6 py-2 rounded-xl cursor-pointer">
                        Remove
                    </button>
                )}
            </div>
        </div>
    </>
}

export default ProductCard;