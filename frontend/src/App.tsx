import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router"
import Products from "./pages/Products/Products"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import MainLayout from "./layouts/MainLayout";
import Product from "./pages/Product/Product";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Products />}/>
            <Route path="/product/:id" element={<Product />}/>
          </Route>
        </Routes>
        <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App
