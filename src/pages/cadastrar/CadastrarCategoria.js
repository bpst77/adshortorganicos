import { useEffect } from "react";

const handleCadastro = (event, alterar, setAlterar, categories, setCategories) => {
    event.preventDefault();

    const id = parseInt(event.target.id.value);
    const category = event.target.category.value;

    if ((id && category) !== null) {
        if (alterar === 0) {
            //logica cadastro
            if (categories.some(p => p.id === id)) {
                alert("Id já existe. Por favor, escolha outro.");
                return;
            } else{
                const novaLista = categories.filter(p => p.id !== id);
                novaLista.push({ "id": id, "description": category });
                setCategories(novaLista);
                setAlterar(null);
            }
            
        } else {
            const novaLista = categories.filter(p => p.id !== alterar);
                novaLista.push({ "id": id, "description": category });
                setCategories(novaLista);
                setAlterar(null);
        }
    }
}

const preencher = (alterar, categories) => {
    if (alterar !== 0) {
        const category = categories.find(p => p.id === alterar);

        if (category) {
            const id = document.getElementById("cadastro").id
            id.value = category.id;
            id.disabled = true;

            document.getElementById("cadastro").category.value = category.description;
        }
    }
}

const CadastrarCategoria = ({ categories, setCategories, alterar, setAlterar}) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <h2 className="text-banner text-3xl">Nossas Categorias</h2>

        <form 
            id="cadastro" 
            onSubmit={(event) => {handleCadastro(event, alterar, setAlterar, categories, setCategories)}}
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
            preencher(alterar, categories);
        }, [alterar, categories])}
    </div>
    );
}

export default CadastrarCategoria;