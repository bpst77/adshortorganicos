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

        document.querySelector("h2").textContent = "Alteração de produto";
        document.querySelector(".cad-btn").textContent = "Salvar";

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

const Cadastrar = ({ produtosOg, setProdutosOg, alterar, setAlterar}) => {
    return (
    <div className="cadastrar-container">
        <h2>Cadastro de produto</h2>

        <form id="cadastro" onSubmit={(event) => {handleCadastro(event, alterar, setAlterar, produtosOg, setProdutosOg)}}>
            <label htmlFor="id">Id</label><br />
            <input type="text" name="id" placeholder="id" required />
            <br />

            <label htmlFor="nome">Nome</label><br />
            <input type="text" name="nome" placeholder="nome" required />
            <br />

            <label htmlFor="preco">Preço</label><br />
            <input type="text" name="preco" placeholder="preço (ex: 11.11 - use ponto e não virgula)" required />
            <br />

            <label htmlFor="categoria">Categoria</label><br />
            <select name="categoria" required>
                <option value="">Selecione uma categoria</option>
                <option value="legume">Legumes</option>
                <option value="fruta">Frutas</option>
                <option value="verdura">Verduras</option>
            </select>
            <br />

            <button type="submit" className="cad-btn cor-btn2 btn-no">Cadastrar</button>
            <button type="submit" className="cad-btn cor-btn2" onClick={() => setAlterar(null)}>Voltar</button>
        </form>

        {useEffect(() => {
            preencher(alterar, produtosOg);
        }, [alterar, produtosOg])}
    </div>
    );
}

export default Cadastrar;