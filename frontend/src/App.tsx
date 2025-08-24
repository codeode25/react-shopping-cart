import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router"
import Products from "./pages/Products/Products"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
