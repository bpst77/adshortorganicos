import React, { useEffect, useState } from "react";
import {TabelaProduto} from "../components/Tabela";
import CadastrarProduto from "./cadastrar/CadastrarProduto"

class Category {
    id;
    description;

    constructor(id, description) {
        this.id = id;
        this.description = description;
    };
}

class Product {
    id;
    name;
    category;
    imagePath;
    price;

    constructor(id, name, category, imagePath, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.imagePath = imagePath;
        this.price = price;
    }
}

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