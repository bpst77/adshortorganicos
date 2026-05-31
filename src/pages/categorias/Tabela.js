import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const remover = (id, categories) => {
    return categories.filter((produto) => produto.id !== id);
};

const TabelaCategoria = ({ categoriesOg = [], setCategoriesOg, alterar, setAlterar }) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState(categoriesOg);
    
    useEffect(() => {
        setCategories(categoriesOg);
    }, [categoriesOg]);

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
            <button className="bg-spot w-32 h-12 text-md rounded-lg" onClick={() => {navigate('/home')}}>Voltar</button>
            <button className="bg-header w-32 h-12 text-md rounded-lg" onClick={() => setAlterar(0)}> Cadastrar </button>
        </div>
    </div>
    );
}

export default TabelaCategoria;