import React, { useEffect, useState } from "react";
import TabelaProduto from "./Tabela";
import CadastrarProduto from "./Cadastrar"
import "./../../App.css"
import { Product } from "../../domain/ProductModel";
import { Category } from "../../domain/CategoryModel";

const productApi = "api/prods.json";
const categoryApi = "api/categories.json";

export default function ProductsPage() {
    const [aAlterar, setAlterar] = useState(null);
    const [produtosOg, setProdutosOg] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try{
                const productsResponse = await fetch(productApi);
                const categoriesResponse = await fetch(categoryApi);
                const products = await productsResponse.json().then((data) => {
                    return data.map((prod) => new Product(prod.id, prod.name, prod.category, prod.imagePath, prod.price))
                })
                const fetchedCategories = await categoriesResponse.json().then((data) => {
                    return data.map((cat) => new Category(cat.id, cat.description))
                });
                setCategories(fetchedCategories);
                setProdutosOg(products);
                } catch (e) {
                console.error("Erro ao carregar produtos:", e);
            }
        }
        loadData();
    }, [])

    return (
        <div className="h-full w-full flex flex-col items-center">
            <div className="w-[60vw] h-full flex flex-col items-center py-12">
            {
                aAlterar == null ? (
                    <TabelaProduto produtosOg={produtosOg} setProdutosOg={setProdutosOg} alterar={aAlterar} setAlterar={setAlterar} />
                ) : (
                    <CadastrarProduto produtosOg={produtosOg} setProdutosOg={setProdutosOg} categories={categories} alterar={aAlterar} setAlterar={setAlterar} />
                )
            }
            </div>
        </div>
    );
};