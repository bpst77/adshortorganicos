import { useEffect, useState } from "react";
import TabelaCategoria from "./Tabela";
import CadastrarCategoria from "./Cadastrar";

const api = 'api/categories.json';

export default function CategoryPage() {
    const [aAlterar, setAlterar] = useState(null);

    const [categories, setCategories] = useState();

    useEffect(() => {
        const loadData = async () => {
            try{
                const response = await fetch(api);
                setCategories( await response.json() );
                } catch (e) {
                console.error("Erro ao carregar produtos:", e);
            }
        }
        loadData();
    }, []);

    return (
        <div className="h-full w-full flex flex-col items-center">
            <div className="w-[60vw] h-full flex flex-col items-center py-12">
            {
                aAlterar == null ? (
                    <TabelaCategoria categoriesOg={categories} setCategoriesOg={setCategories} alterar={aAlterar} setAlterar={setAlterar} />
                ) : (
                    <CadastrarCategoria categories={categories} setCategories={setCategories} alterar={aAlterar} setAlterar={setAlterar} />
                )
            }
            </div>
        </div>
    );
};
