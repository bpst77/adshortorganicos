import { useEffect } from "react";

const handleCadastro = (event, alterar, setAlterar, produtosOg, setProdutosOg, categories) => {
    event.preventDefault();

    const id = parseInt(event.target.id.value);
    const nome = event.target.name.value;
    const categoria = categories.find(c => c.id === parseInt(event.target.category.value));
    const preco = parseFloat(event.target.price.value);

    console.log(categoria);

    if ((id && nome && preco) !== null) {
        if (alterar === 0) {
            //logica cadastro
            if (produtosOg.some(p => p.id === id)) {
                alert("Id já existe. Por favor, escolha outro.");
                return;
            } else{
                const novaLista = produtosOg.filter(p => p.id !== id);
                novaLista.push({ "id": id, "name": nome, "price": preco, "category": categoria, "imagePath": "placeholder.png" });
                setProdutosOg(novaLista);
                setAlterar(null);
            }
            
        } else {
            const novaLista = produtosOg.filter(p => p.id !== alterar);
                novaLista.push({ "id": alterar, "name": nome, "price": preco, "category": categoria, "imagePath": "placeholder.png" });
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

            document.getElementById("cadastro").name.value = produto.name;
            document.getElementById("cadastro").price.value = produto.price;
            document.getElementById("cadastro").category.value = produto.category.id;
        }
    }
}

const validateNumericInput = (e) => {
  let digits = e.target.value.replace(/\D/g, '');
  
  if (!digits) {
    e.target.value = '';
    return;
  }
  
  const numberValue = parseFloat(digits) / 100;
  
  e.target.value = new Intl.NumberFormat().format(numberValue);
}

const CadastrarProduto = ({ produtosOg, setProdutosOg, categories, alterar, setAlterar}) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <h2 className="text-banner text-3xl">Nossos Produtos</h2>

        <form 
            id="cadastro" 
            onSubmit={(event) => {handleCadastro(event, alterar, setAlterar, produtosOg, setProdutosOg, categories)}}
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
                <label htmlFor="name">Nome</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="text" 
                    name="name" 
                    placeholder="Nome do produto" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="price">Preço</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="text" 
                    inputmode="numeric" 
                    onInput={(e) => validateNumericInput(e)}
                    name="price"
                    placeholder="Preço" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="category">Categoria</label>
                <select name="category" required 
                    className="w-96 rounded-md px-4 py-2 text-white invalid:text-gray-400"
                >
                    <option value="" disabled selected hidden>Selecione uma categoria</option>
                    {categories.map((category) => {
                        return (
                            <option value={category.id}>{category.description}</option>
                        )
                    })}
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