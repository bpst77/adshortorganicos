import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

// TODO: pegar a foto do produto
export default function Banner({ product }) {
    const navigate = useNavigate();
    return (
        <div className="bg-accent w-full h-90 flex items-center justify-around p-12 gap-4">
            <div className="flex items-center justify-center bg-white w-72 h-72 rounded-full">
                 <img src="./imagens/placeholder.png" className="h-48 w-48"></img>
            </div>
            <div className="flex flex-col justify-start items-center h-full max-w-[30vw] gap-8">
                <h1 className="banner-text text-5xl text-lilita">VENHA CONHECER!!</h1>
                <span className="text-white text-center">
                    Este nosso produto é um favorito dos nossos clientes e ele está em promoção!
                    <br/>
                    Conheça ele e muitos outros aqui, na Hortogânicos!
                </span>
                <div 
                className="bg-highlight w-[44.2vw] h-24 flex self-justify-start justify-start pl-8 gap-4 items-center rounded-l-full ml-0 mr-auto cursor-pointer"
                onClick={() => {navigate('/produtos')}}
                >
                    <ArrowRight size={38}/>
                    <span className="text-white">Clique aqui para conhecer mais</span>
                </div>
            </div>
        </div>
    )
};
