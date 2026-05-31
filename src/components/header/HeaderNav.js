import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import Footer from "../footer/Footer";

export default function HeaderNav({children}) {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen overflow-y-screen">
            <div className="w-full h-32 bg-header flex flex-row items-center justify-around">
                <span className="flex align-center w-fit h-fit gap-2">
                    <img src="./imagens/logo.svg" className="h-32" alt="Logo da hortogânicos"></img>
                </span>
                <button className="flex flex-row h-fit justify-center gap-2" onClick={() => navigate('/cart')}>
                    <span className="py-1">Carrinho</span>
                    <ShoppingCart className="w-8 h-8 color-white"></ShoppingCart>
                </button>
            </div>
            <div className="w-full h-16 bg-spot flex items-center justify-around">
                <span className="cursor-pointer" onClick={() => {navigate()}}>Clientes</span> |
                <span className="cursor-pointer" onClick={() => {navigate("/categorias")}}>Categorias</span> |
                <span className="cursor-pointer" onClick={() => {navigate()}}>Pedidos</span> |
                <span className="cursor-pointer" onClick={() => {navigate("/produtos") }}>Produtos</span>
            </div>
            <div className="w-full h-full">
                {children}
            </div>
            <Footer/>
        </div>
    );
};
