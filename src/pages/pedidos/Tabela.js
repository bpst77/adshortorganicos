import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const remover = (id, orders) => {
    return orders.filter((order) => order.id !== id);
};

const TabelaPedido = ({ ordersOg = [], setOrders, view, setView }) => {
    const [pedidos, setPedidos] = useState(ordersOg);
    const navigate = useNavigate();
    
    useEffect(() => {
        setPedidos(ordersOg);
    }, [ordersOg]);

    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <div>
            <span className="banner-text text-3xl text-lilita" >PEDIDOS</span>
        </div>

        {pedidos.length === 0 && <h3>Não há pedidos cadastrados</h3>}

        {pedidos && pedidos.length > 0 && (
        <div className="w-[90%] overflow-y-scroll">
            <table className="w-full border-collapse">
                <thead className="">
                    <tr className="bg-spot rounded-t-xl flex h-20 px-8">
                        <th className="w-[12%] px-4 justify-table sticky top-0 z-50">Id</th>
                        <th className="w-[28%] px-4 justify-table sticky top-0 z-50">Cliente</th>
                        <th className="w-[30%] px-4 justify-table sticky top-0 z-50">Valor</th>
                        <th className="w-[30%] px-16 justify-table justify-end sticky top-0 z-50">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => (
                    <tr key={pedido.id} className="flex h-24 border-b-2 px-8 bg-[#f0efe5]">
                        <td className="text-black w-[12%] px-4 justify-table ">{pedido.id}</td>
                        <td className="text-black w-[28%] px-4 justify-table">{pedido.client.name}</td>
                        <td className="text-black w-[30%] px-4 justify-table">R$ {pedido.orderValue.toFixed(2)}</td>
                        <td className="text-black w-[30%] px-4 justify-table justify-end gap-2">
                            <button className="text-white bg-accent text-sm px-4 py-2 rounded-xl" onClick={() => setView(pedido.id)}>Visualizar</button>
                            <button className="text-white bg-gray-800 text-sm px-4 py-2 rounded-xl" onClick={() => setOrders(remover(pedido.id, ordersOg))}>Excluir</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
            )}
        <div className="flex gap-2">
            <button className="bg-spot w-32 h-12 text-md rounded-lg" onClick={() => {navigate('/home')}}>Voltar</button>
        </div>
    </div>
    );
}

export default TabelaPedido;