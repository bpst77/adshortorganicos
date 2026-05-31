import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const remover = (id, produtosOg) => {
    return produtosOg.filter((produto) => produto.id !== id);
};

const Tabela = ({ produtosOg = [], setProdutosOg, alterar, setAlterar }) => {
    const [produtos, setProdutos] = useState(produtosOg);
    const navigate = useNavigate();
    
    useEffect(() => {
        setProdutos(produtosOg);
    }, [produtosOg]);

    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <div classname="">
            <button className="banner-text text-3xl text-lilita" >NOSSOS PRODUTOS </button>
        </div>

        {produtos.length === 0 && <h3>Não há produtos cadastrados</h3>}

        {produtos && produtos.length > 0 && (
        <div className="w-[90%] overflow-y-scroll">
            <table className="w-full border-collapse">
                <thead className="">
                    <tr className="bg-spot rounded-t-xl flex h-20 px-8">
                        <th className="w-[12%] px-4 justify-table sticky top-0 z-50">Id</th>
                        <th className="w-[28%] px-4 justify-table sticky top-0 z-50">Nome</th>
                        <th className="w-[30%] px-4 justify-table sticky top-0 z-50">Preço</th>
                        <th className="w-[30%] px-16 justify-table justify-end sticky top-0 z-50">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                    <tr key={produto.id} className="flex h-24 border-b-2 px-8 bg-gray-400">
                        <td className="w-[12%] px-4 justify-table ">{produto.id}</td>
                        <td className="w-[28%] px-4 justify-table">{produto.nome}</td>
                        <td className="w-[30%] px-4 justify-table">R$ {produto.preco.toFixed(2)}</td>
                        <td className="w-[30%] px-4 justify-table justify-end gap-2">
                            <button className="bg-accent text-sm px-4 py-2 rounded-xl" onClick={() => setAlterar(produto.id)}>Editar</button>
                            <button className="bg-gray-800 text-sm px-4 py-2 rounded-xl" onClick={() => setProdutosOg(remover(produto.id, produtosOg))}>Excluir</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
            )}
        <div className="flex gap-2">
            <button className="bg-spot w-32 h-12 text-md rounded-lg" onClick={() => {navigate('/home')}}>Voltar</button>
            <button className="bg-header w-32 h-12 text-md rounded-lg" onClick={() => setAlterar(0)}> Cadastrar </button>
        </div>
    </div>
    );
}

export default Tabela;