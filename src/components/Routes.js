import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CategoryPage from "../pages/tabelas/CategoryPage";
import ClientsPage from "../pages/tabelas/ClientsPage";
import OrdersPage from "../pages/tabelas//OrdersPage";
import SobrePage from "../pages/SobrePage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />}/>
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/categorias" element={<CategoryPage />} />
            <Route path="/clientes" element={<ClientsPage />} />
            <Route path="/pedidos" element={<OrdersPage />} />
            <Route path="/sobre" element={<SobrePage />} />
        </Routes>
    )
};