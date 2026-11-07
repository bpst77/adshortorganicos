import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import SobrePage from "../pages/SobrePage";
import RegistrosPage from "../pages/RegistrosPage"

export default function AppRoutes({clientes, setClientes, pedidos, setPedidos, produtos, setProdutos, categorias, setCategorias}) {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />}/>

            <Route path="/produtos" element={<ProductsPage produtos={produtos} setProdutos={setProdutos} />} />
            <Route path="/registros" element={<RegistrosPage clientes={clientes} setClientes={setClientes} pedidos={pedidos} setPedidos={setPedidos} produtos={produtos} setProdutos={setProdutos} categorias={categorias} setCategorias={setCategorias} />} />
            <Route path="/sobre" element={<SobrePage />} />
        </Routes>
    )
};