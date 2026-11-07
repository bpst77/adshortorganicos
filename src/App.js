import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router';
import AppRoutes from './components/Routes';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';

const apiC = "/api/clients.json";
const apiP = '/api/prods.json';
const apiO = '/api/orders.json';
const apiCat = '/api/categories.json';

function App() {
    const [clientsOg, setClientsOg] = useState([]);
    const [ordersOg, setOrdersOg] = useState([]);
    const [produtosOg, setProdutosOg] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
            const loadData = async () => {
                try{
                    const clientsF = await fetch(apiC);
                    const clientsR = await clientsF.json();

                    const ordersF = await fetch(apiO);
                    const ordersR = await ordersF.json();

                    const prodsF = await fetch(apiP);
                    const prodsR = await prodsF.json();

                    const categoriesF = await fetch(apiCat);
                    const categoriesR = await categoriesF.json();

                    setClientsOg(clientsR);
                    setOrdersOg(ordersR);
                    setProdutosOg(prodsR)
                    setCategories(categoriesR)

                    } catch (e) {
                    console.error("Erro ao carregar dados:", e);
                }
            }
            loadData();
        }, [])

        return (
            <div className="App">  
                <BrowserRouter>
                    <HeaderNav />
                    <AppRoutes clientes={clientsOg} setClientes={setClientsOg} pedidos={ordersOg} setPedidos={setOrdersOg} produtos={produtosOg} setProdutos={setProdutosOg} categorias={categories} setCategorias={setCategories} />
                    <Footer />
                </BrowserRouter>
            </div>
        );
}

export default App;