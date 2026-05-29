import { useEffect, useState } from "react";

const remover = (id, produtosOg) => {
    return produtosOg.filter((produto) => produto.id !== id);
};

const Tabela = ({ produtosOg = [], setProdutosOg, alterar, setAlterar }) => {
    const [produtos, setProdutos] = useState(produtosOg);
    
    useEffect(() => {
        setProdutos(produtosOg);
    }, [produtosOg]);

    return (
    <div className="tabela-container">
        <div classname="">
            <button className="cad-btn cor-btn2" > Tabela </button>
            <button className="cad-btn cor-btn2" onClick={() => setAlterar(0)}> Cadastrar </button>
        </div>

        <h2>Lista de produtos</h2>
        {produtos.length === 0 && <h3>Não há produtos cadastrados</h3>}

        {produtos && produtos.length > 0 && (
        <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
                <th></th>
            </tr>
        </thead>
            <tbody>
                {produtos.map((produto) => (
                <tr key={produto.id} className={produto.id % 2 === 0 ? "lin1" : "lin2"}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                    <td>
                        <button className="cad-btn cor-btn2" onClick={() => setAlterar(produto.id)}>Editar</button>
                        <button className="cad-btn cor-btn1" onClick={() => setProdutosOg(remover(produto.id, produtosOg))}>Excluir</button>
                    </td>
                </tr>
                ))}
        </tbody>
        </table>
            )}
    </div>
    );
}

export default Tabela;