import { Route, Routes } from "react-router";
import HomePage from "../pages/home/Home";
import ProductsPage from "../pages/produtos/ProductsPage";
import CategoryPage from "../pages/categorias/CategoryPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />}/>
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/categorias" element={<CategoryPage />} />
        </Routes>
    )
};
