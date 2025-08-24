import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router"
import Products from "./pages/Products/Products"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Products />}/>
        </Routes>
        <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App
