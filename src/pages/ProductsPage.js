const plch = "/imagens/placeholder.png"

const arrendodar = (valor) => {
    return Number(valor).toFixed(2);
}

export default function ProductsPage({ produtos }) {
    return (
        
        <div className="h-full w-full flex flex-col items-center">
            <div className="w-[60vw] flex flex-row py-12 flex-wrap" style={{gap: "15px"}}>
               {produtos.map((prod) => (
                <div className="bg-gray rounded-lg prod" style={{width: "400px", height: "300px", overflow: "hidden"}}>
                    <img src={plch} className="w-full" style={{height: "200px", objectFit: "cover"}} alt=""></img>

                    <div className="flex flex-row justify-between p-2" style={{height: "100px"}}>
                        <div className="w-2/3 justify-evenly">
                            <h5 className="prod-text text-xl font-extrabold">{prod.name}</h5>
                            <span className="prod-text2 font-bold text-lg">R$ {arrendodar(prod.price)}</span>
                        </div>
                        
                        <button className="prod-button rounded-xl font-bold" style={{height: "50px", padding: "10px"}}>Comprar</button>
                    </div>"
                </div>
                ))}
            </div>
        </div>
    );
};