import { useState } from "react";
import { TabelaCategoria, TabelaClientes, TabelaPedido, TabelaProduto } from "../components/Tabela";
import { CadastrarCategoria, CadastrarCliente, CadastrarProduto } from "../components/Cadastro";
import OrderResume from "./OrderResume";

export default function RegistrosPage({clientes, setClientes, pedidos, setPedidos, produtos, setProdutos, categorias, setCategorias}){
    //clientes 1, pedidos 2, produtos 3, categorias 4 
    const [aAlterar, setAlterar] = useState(null);
    const [id, setId] = useState(0);
    
    return(
        <section className="bg-highlight w-4/5 justify-self-center justify-center m-10 justify-items-center pt-10 pb-5">
            {
                id === 0 ? (
                    <>
                    <span className="banner-text text-3xl text-lilita justify-self-center flex mb-10" >EDITAR REGISTROS</span>

                    <div className="flex flex-row justify-evenly mb-10" style={{gap: "20px"}}>
                        <button onClick={() => setId(3)} className="bg-spot w-32 h-12 text-md rounded-lg">Produtos</button>
                        <button onClick={() => setId(4)} className="bg-spot w-32 h-12 text-md rounded-lg">Categorias</button>
                    </div>

                    <div className="flex flex-row justify-evenly mb-10" style={{gap: "20px"}}>
                        <button onClick={() => setId(1)} className="bg-spot w-32 h-12 text-md rounded-lg">Clientes</button>
                        <button onClick={() => setId(2)} className="bg-spot w-32 h-12 text-md rounded-lg">Pedidos</button>
                    </div>
                    </>
                ) : (
                    aAlterar === null ? (
                        id === 1 ? (<TabelaClientes clientsOg={clientes} setClientsOg={setClientes} setId={setId} setAlterar={setAlterar} />) 
                        : id === 2 ? (<TabelaPedido ordersOg={pedidos} setOrders={setPedidos} setId={setId} setView={setAlterar} produtos={produtos}/>)
                        : id === 3 ? (<TabelaProduto produtosOg={produtos} setProdutosOg={setProdutos} setId={setId} setAlterar={setAlterar} />)
                        : id === 4 ? (<TabelaCategoria categories={categorias} setCategories={setCategorias} setId={setId} setAlterar={setAlterar} />)
                        : null
                    ) : (
                        id === 1 ? (<CadastrarCliente clients={clientes} setClients={setClientes} alterar={aAlterar} setAlterar={setAlterar} />)
                        : id === 2 ? (<OrderResume order={pedidos.find(o => o.id === aAlterar)} onClose={() => setAlterar(null)} clientes={clientes} produtos={produtos} />)
                        : id === 3 ? (<CadastrarProduto produtosOg={produtos} setProdutosOg={setProdutos} categories={categorias} alterar={aAlterar} setAlterar={setAlterar} />)
                        : id === 4 ? (<CadastrarCategoria categories={categorias} setCategories={setCategorias} alterar={aAlterar} setAlterar={setAlterar} />)
                        : null
                    )
                )
            }
        </section>
    )
}