import { useEffect } from "react";
import { preencherCat, preencherClient, preencherProd } from "./cadastro/Preencher";
import { handleCadCat, handleCadClient, handleCadProd } from "./cadastro/Handle";

const validateNumericInput = (e) => {
  let digits = e.target.value.replace(/\D/g, '');
  
  if (!digits) {
    e.target.value = '';
    return;
  }
  
  const numberValue = parseFloat(digits) / 100;
  
  e.target.value = new Intl.NumberFormat().format(numberValue);
}

const CadastrarCategoria = ({ categories, setCategories, alterar, setAlterar}) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <h2 className="text-banner text-3xl">Nossas Categorias</h2>

        <form 
            id="cadastro" 
            onSubmit={(event) => {handleCadCat(event, alterar, setAlterar, categories, setCategories)}}
            className="flex flex-col items-center w-full gap-8"
        >
            <span className="flex flex-col items-center gap-2">
                <label htmlFor="id">Id</label>
                <input 
                    className="w-96 rounded-md px-4 py-2 disabled:bg-[#3b3b3b]"
                    type="text" 
                    name="id" 
                    placeholder="ID" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="nome">Categoria</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="text" 
                    name="category" 
                    placeholder="Categoria" 
                    required 
                />
            </span>

            <div className="flex gap-4">
                <button type="submit" className="w-32 h-12 bg-spot rounded-md" onClick={() => setAlterar(null)}>Voltar</button>
                <button type="submit" className="w-32 h-12 bg-header rounded-md">Cadastrar</button>
            </div>

        </form>

        {useEffect(() => {
            preencherCat(alterar, categories);
        }, [alterar, categories])}
    </div>
    );
}

const CadastrarCliente = ({ clients, setClients, alterar, setAlterar}) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <h2 className="text-banner text-3xl">Nossos Clientes</h2>

        <form 
            id="cadastro" 
            onSubmit={(event) => {handleCadClient(event, alterar, setAlterar, clients, setClients)}}
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
                    name="name" 
                    placeholder="Nome do cliente" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="preco">E-mail</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="email"
                    name="email"
                    placeholder="E-mail" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="preco">CPF</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="text"
                    name="cpf"
                    placeholder="CPF" 
                    required 
                />
            </span>

            <div className="flex gap-4">
                <button type="submit" className="w-32 h-12 bg-spot rounded-md" onClick={() => setAlterar(null)}>Voltar</button>
                <button type="submit" className="w-32 h-12 bg-header rounded-md">Cadastrar</button>
            </div>

        </form>

        {useEffect(() => {
            preencherClient(alterar, clients);
        }, [alterar, clients])}
    </div>
    );
}

const CadastrarProduto = ({ produtosOg, setProdutosOg, categories, alterar, setAlterar}) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <h2 className="text-banner text-3xl">Nossos Produtos</h2>

        <form 
            id="cadastro" 
            onSubmit={(event) => {handleCadProd(event, alterar, setAlterar, produtosOg, setProdutosOg, categories)}}
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
            preencherProd(alterar, produtosOg);
        }, [alterar, produtosOg])}
    </div>
    );
}

export { CadastrarCliente, CadastrarCategoria, CadastrarProduto };