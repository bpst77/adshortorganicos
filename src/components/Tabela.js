const remover = (id, lista) => {
    return lista.filter((item) => item.id !== id);
};

const arrendodar = (valor) => {
    return parseFloat(valor.toFixed(2));
}

const TabelaCategoria = ({ categories, setCategories, setAlterar, setId }) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <div>
            <span className="banner-text text-3xl text-lilita" >NOSSAS CATEGORIAS</span>
        </div>

        {categories.length === 0 && <h3>Não há categorias cadastradas</h3>}

        {categories && categories.length > 0 && (
        <div className="w-[90%] overflow-y-scroll">
            <table className="w-full border-collapse">
                <thead className="">
                    <tr className="bg-spot rounded-t-xl flex h-20 px-8">
                        <th className="w-[20%] px-4 justify-table sticky top-0 z-50">Id</th>
                        <th className="w-[40%] px-4 justify-table sticky top-0 z-50">Categoria</th>
                        <th className="w-[40%] px-16 justify-table justify-end sticky top-0 z-50">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                    <tr key={category.id} className="flex h-24 border-b-2 px-8 bg-[#f0efe5]">
                        <td className="text-black w-[20%] px-4 justify-table ">{category.id}</td>
                        <td className="text-black w-[40%] px-4 justify-table">{category.description}</td>
                        <td className="text-black w-[40%] px-4 justify-table justify-end gap-2">
                            <button className="text-white bg-accent text-sm px-4 py-2 rounded-xl" onClick={() => setAlterar(category.id)}>Editar</button>
                            <button className="text-white bg-gray-800 text-sm px-4 py-2 rounded-xl" onClick={() => setCategories(remover(category.id, categories))}>Excluir</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
            )}
        <div className="flex gap-2">
            <button className="bg-spot w-32 h-12 text-md rounded-lg" onClick={() => {setId(0); setAlterar(null)}}>Voltar</button>
            <button className="bg-header w-32 h-12 text-md rounded-lg" onClick={() => setAlterar(0)}> Cadastrar </button>
        </div>
    </div>
    );
}

const TabelaClientes = ({ clientsOg, setClientsOg, setAlterar, setId }) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <div>
            <button className="banner-text text-3xl text-lilita" >NOSSOS CLIENTES</button>
        </div>

        {clientsOg.length === 0 && <h3>Não há clientes cadastrados</h3>}

        {clientsOg && clientsOg.length > 0 && (
        <div className="w-[90%] overflow-y-scroll">
            <table className="w-full border-collapse">
                <thead className="">
                    <tr className="bg-spot rounded-t-xl flex h-20 px-8">
                        <th className="w-[10%] px-4 justify-table sticky top-0 z-50">Id</th>
                        <th className="w-[20%] px-4 justify-table sticky top-0 z-50">Nome</th>
                        <th className="w-[25%] px-4 justify-table sticky top-0 z-50">E-mail</th>
                        <th className="w-[25%] px-4 justify-table sticky top-0 z-50">CPF</th>
                        <th className="w-[25%] px-16 justify-table justify-end sticky top-0 z-50">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientsOg.map((client) => (
                    <tr key={client.id} className="flex h-24 border-b-2 px-8 bg-[#f0efe5]">
                        <td className="text-black w-[10%] px-4 justify-table ">{client.id}</td>
                        <td className="text-black w-[20%] px-4 justify-table">{client.name}</td>
                        <td className="text-black w-[25%] px-4 justify-table">{client.email}</td>
                        <td className="text-black w-[25%] px-4 justify-table">{client.cpf}</td>
                        <td className="text-black w-[25%] px-4 justify-table justify-end gap-2">
                            <button className="text-white bg-accent text-sm px-4 py-2 rounded-xl" onClick={() => setAlterar(client.id)}>Editar</button>
                            <button className="text-white bg-gray-800 text-sm px-4 py-2 rounded-xl" onClick={() => setClientsOg(remover(client.id, clientsOg))}>Excluir</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
            )}
        <div className="flex gap-2">
            <button className="bg-spot w-32 h-12 text-md rounded-lg" onClick={() => {setId(0); setAlterar(null)}}>Voltar</button>
            <button className="bg-header w-32 h-12 text-md rounded-lg" onClick={() => setAlterar(0)}> Cadastrar </button>
        </div>
    </div>
    );
}

const TabelaProduto = ({ produtosOg, setProdutosOg, setAlterar, setId }) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <div>
            <span className="banner-text text-3xl text-lilita" >NOSSOS PRODUTOS</span>
        </div>

        {produtosOg.length === 0 && <h3>Não há produtos cadastrados</h3>}

        {produtosOg && produtosOg.length > 0 && (
        <div className="w-[90%] overflow-y-scroll">
            <table className="w-full border-collapse">
                <thead className="">
                    <tr className="bg-spot rounded-t-xl flex h-20 px-8">
                        <th className="w-[12%] px-4 justify-table sticky top-0 z-50">Id</th>
                        <th className="w-[20%] px-4 justify-table sticky top-0 z-50">Nome</th>
                        <th className="w-[18%] px-4 justify-table sticky top-0 z-50">Categoria</th>
                        <th className="w-[20%] px-4 justify-table sticky top-0 z-50">Preço</th>
                        <th className="w-[30%] px-16 justify-table justify-end sticky top-0 z-50">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosOg.map((produto) => (
                    <tr key={produto.id} className="flex h-24 border-b-2 px-8 bg-[#f0efe5]">
                        <td className="text-black w-[12%] px-4 justify-table ">{produto.id}</td>
                        <td className="text-black w-[28%] px-4 justify-table">{produto.name}</td>
                        <td className="text-black w-[28%] px-4 justify-table">{produto.category}</td>
                        <td className="text-black w-[30%] px-4 justify-table">R$ {produto.price}</td>
                        <td className="text-black w-[30%] px-4 justify-table justify-end gap-2">
                            <button className="text-white bg-accent text-sm px-4 py-2 rounded-xl" onClick={() => setAlterar(produto.id)}>Editar</button>
                            <button className="text-white bg-gray-800 text-sm px-4 py-2 rounded-xl" onClick={() => setProdutosOg(remover(produto.id, produtosOg))}>Excluir</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
            )}
        <div className="flex gap-2">
            <button className="bg-spot w-32 h-12 text-md rounded-lg" onClick={() => {setId(0); setAlterar(null)}}>Voltar</button>
            <button className="bg-header w-32 h-12 text-md rounded-lg" onClick={() => setAlterar(0)}> Cadastrar </button>
        </div>
    </div>
    );
}

const TabelaPedido = ({ ordersOg, setOrders, setView, setId, produtos }) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <div>
            <span className="banner-text text-3xl text-lilita" >PEDIDOS</span>
        </div>

        {ordersOg.length === 0 && <h3>Não há pedidos cadastrados</h3>}

        {ordersOg && ordersOg.length > 0 && (
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
                    {ordersOg.map((pedido) => {
                    
                    const valor = produtos.reduce(
                        (total, prod, index) => pedido.products.includes(prod.id)
                            ? total + Number(prod.price) * pedido.prod_qtd[index]
                            : total,
                        0
                    );

                    return <tr key={pedido.id} className="flex h-24 border-b-2 px-8 bg-[#f0efe5]">
                        <td className="text-black w-[12%] px-4 justify-table ">{pedido.id}</td>
                        <td className="text-black w-[28%] px-4 justify-table">{pedido.client}</td>
                        <td className="text-black w-[30%] px-4 justify-table">R$ {arrendodar(valor)}</td>
                        <td className="text-black w-[30%] px-4 justify-table justify-end gap-2">
                            <button className="text-white bg-accent text-sm px-4 py-2 rounded-xl" onClick={() => setView(pedido.id)}>Visualizar</button>
                            <button className="text-white bg-gray-800 text-sm px-4 py-2 rounded-xl" onClick={() => setOrders(remover(pedido.id, ordersOg))}>Excluir</button>
                        </td>
                    </tr>;
                    })}
                </tbody>
            </table>
        </div>
            )}
        <div className="flex gap-2">
            <button className="bg-spot w-32 h-12 text-md rounded-lg" onClick={() => {setId(0); setView(null)}}>Voltar</button>
        </div>
    </div>
    );
}

export { TabelaCategoria, TabelaClientes, TabelaProduto, TabelaPedido };