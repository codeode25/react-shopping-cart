import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router"
import Products from "./pages/Products/Products"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import MainLayout from "./layouts/MainLayout";
import Product from "./pages/Product/Product";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./pages/Cart/Cart";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Products />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/product/:id" element={<Product />}/>
            </Route>
          </Routes>
          <Toaster />
        </QueryClientProvider>
      </CartProvider>
    </>
  )
}

export default App
