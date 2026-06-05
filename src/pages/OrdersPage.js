import React, { useEffect, useState } from "react";
import {TabelaPedido} from "../components/Tabela";
import OrderResume from "./OrderResume";

class Order {
    id;
    client;
    products;
    date;

    constructor(id, client, products, date) {
        this.id = id;
        this.client = client;
        this.products = products;
        this.date = Date(date);
    }

    get orderValue() {
        return parseFloat(this.products.reduce((acc, curr) => {
            console.log(curr)
            return acc + (curr.product.preco * curr.quantity)
        }, 0))
    }
}

const api = "api/orders.json";

export default function OrdersPage() {
    const [visualizar, setVisualizar] = useState(null);
    const [ordersOg, setOrdersOg] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try{
                const response = await fetch(api);
                const orders = await response.json().then(
                    (data) => {
                        return data.map((order)=> new Order(order.id, order.client, order.products, order.date)
                    )
                })
                setOrdersOg(orders);
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
                visualizar == null ? (
                    <TabelaPedido ordersOg={ordersOg} setOrdersOg={setOrdersOg} view={visualizar} setView={setVisualizar} />
                ) : (
                    <OrderResume order={ordersOg.find(o => o.id === visualizar)} onClose={() => setVisualizar(null)} />
                )
            }
            </div>
        </div>
    );
};