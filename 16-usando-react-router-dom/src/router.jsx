import { createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin/AdminHome";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import loadProducts from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductsBoundary";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                index: "true",
                element: <Home/>
            },
            {
                path: "products",
                element: <Products/>
            },
            {
                path: "products/:productId",
                element: <Product/>,
                loader: loadProducts,
                errorElement: <ProductBoundary/>
            },
            {
                path: "cart",
                element: <Cart/>
            }
        ]
    },
    {
        path: "admin",
        element: <AdminHome/>
    }
])

export default router