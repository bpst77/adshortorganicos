const arrendodar = (valor) => {
    return parseFloat(valor.toFixed(2));
}

export default function OrderResume({ order, onClose, clientes, produtos }) {
    const valor = produtos.reduce(
        (total, prod, index) => order.products.includes(prod.id)
        ? total + Number(prod.price) * order.prod_qtd[index]
        : total,
        0
    );
    const clienteAtual = clientes.find(c => c.name === order.client);

    return (
        <div className="w-full bg-white rounded-xl p-8 shadow-lg">
            <div className="mb-8 pb-6 border-b-2 border-gray-300">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-3xl font-bold text-black mb-2">Pedido #{order.id}</h2>
                        <p className="text-gray-600">Data: {order.date}</p>
                    </div>
                    {onClose && (
                        <button 
                            onClick={onClose}
                            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                        >
                            ✕ Fechar
                        </button>
                    )}
                </div>
            </div>

            <div className="mb-8 p-4 bg-[#f0efe5] rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Informações do Cliente</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-600 text-sm">Nome</p>
                        <p className="text-lg font-semibold text-black">{order.client}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">CPF</p>


                        <p className="text-lg font-semibold text-black">{clienteAtual?.cpf}</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Itens do Pedido</h3>
                <div className="space-y-3">
                    {order.products.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-between p-4 bg-[#f0efe5] rounded-lg border-l-4 border-green-600"
                        >

                            {produtos.map((produto) => 
                                
                                item === produto.id ? (
                                    <>
                                    <div className="flex-1">
                                        <p className="font-semibold text-black">{produto.name}</p>
                                        <p className="text-sm text-gray-600">
                                            Categoria: <span className="font-medium">{produto.category}</span>
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600">Quantidade: <span className="font-bold text-black">{order.prod_qtd[index]}</span></p>
                                        <p className="text-sm text-gray-600">
                                            Unit.: <span className="font-bold text-black">R$ {arrendodar(produto.price)}</span>
                                        </p>
                                        <p className="font-bold text-green-600 text-lg">
                                            R$ {arrendodar(produto.price * order.prod_qtd[index])}
                                        </p>
                                    </div>
                                    </>
                                ) : null
                            
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-2 border-green-600">
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-black">Valor Total do Pedido:</p>
                    <p className="text-3xl font-bold text-green-600">
                        R$ {arrendodar(valor)}
                    </p>
                </div>
            </div>
        </div>
    );
}