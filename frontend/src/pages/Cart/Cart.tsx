import toast from "react-hot-toast";
import { useCart } from "../../contexts/CartContext";

const Cart: React.FC = () => {
    const {cart, removeFromCart, updateQuantity} = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const removeProductFromCart = (id: number) => {
        removeFromCart(id);
        toast.success("Product removed from cart.")
    }

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border border-gray-300 p-4 rounded-xl">
                            <div className="flex items-center space-x-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                                <div>
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input 
                                    type="number"
                                    min={1}
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                    className="w-16 border px-2 py-1"
                                />
                                <button 
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                    onClick={() => removeProductFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right font-bold text-xl">Total: ${total.toFixed(2)}</div>
                </div>
            )}
        </>
    )
}

export default Cart;