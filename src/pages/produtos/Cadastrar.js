import { useEffect } from "react";

const handleCadastro = (event, alterar, setAlterar, produtosOg, setProdutosOg) => {
    event.preventDefault();

    const id = parseInt(event.target.id.value);
    const nome = event.target.nome.value;
    const categoria = event.target.categoria.value;
    const preco = parseFloat(event.target.preco.value);

    if ((id && nome && preco) !== null) {
        if (alterar === 0) {
            //logica cadastro
            if (produtosOg.some(p => p.id === id)) {
                alert("Id já existe. Por favor, escolha outro.");
                return;
            } else{
                const novaLista = produtosOg.filter(p => p.id !== id);
                novaLista.push({ "id": id, "nome": nome, "preco": preco, "categoria": categoria, "imagem": "placeholder.png" });
                setProdutosOg(novaLista);
                setAlterar(null);
            }
            
        } else {
            const novaLista = produtosOg.filter(p => p.id !== alterar);
                novaLista.push({ "id": alterar, "nome": nome, "preco": preco, "categoria": categoria, "imagem": "placeholder.png" });
                setProdutosOg(novaLista);
                setAlterar(null);
        }
    }
}

const preencher = (alterar, produtos) => {
    if (alterar !== 0) {
        const produto = produtos.find(p => p.id === alterar);

        if (produto) {
            const id = document.getElementById("cadastro").id
            id.value = produto.id;
            id.disabled = true;

            document.getElementById("cadastro").nome.value = produto.nome;
            document.getElementById("cadastro").preco.value = produto.preco;
            document.getElementById("cadastro").categoria.value = produto.categ;
        }
    }
}

const CadastrarProduto = ({ produtosOg, setProdutosOg, alterar, setAlterar}) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <h2 className="text-banner text-3xl">Nossos Produtos</h2>

        <form 
            id="cadastro" 
            onSubmit={(event) => {handleCadastro(event, alterar, setAlterar, produtosOg, setProdutosOg)}}
            className="flex flex-col items-center w-full gap-8"
        >
            <span className="flex flex-col items-center gap-2">
                <label htmlFor="id">Id</label>
                <input 
                    className="w-96 rounded-md px-4 py-2 disabled:bg-[#3b3b3b]"
                    type="text" 
                    name="id" 
                    placeholder="id" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="nome">Nome</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="text" 
                    name="nome" 
                    placeholder="nome" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="preco">Preço</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="text"
                    name="preco"
                    placeholder="preço (ex: 11.11 - use ponto e não virgula)" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="categoria">Categoria</label>
                <select name="categoria" required 
                    className="w-96 rounded-md px-4 py-2 text-white invalid:text-gray-400"
                >
                    <option value="" disabled selected hidden>Selecione uma categoria</option>
                    <option value="legume">Legumes</option>
                    <option value="fruta">Frutas</option>
                    <option value="verdura">Verduras</option>
                </select>
            </span>

            <div className="flex gap-4">
                <button type="submit" className="w-32 h-12 bg-spot rounded-md" onClick={() => setAlterar(null)}>Voltar</button>
                <button type="submit" className="w-32 h-12 bg-header rounded-md">Cadastrar</button>
            </div>

        </form>

        {useEffect(() => {
            preencher(alterar, produtosOg);
        }, [alterar, produtosOg])}
    </div>
    );
}

export default CadastrarProduto;