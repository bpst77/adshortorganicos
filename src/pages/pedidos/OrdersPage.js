import React, { useEffect, useState } from "react";
import { Order } from "../../domain/OrderModel";
import TabelaPedido from "./Tabela";
import "./../../App.css"
import OrderResume from "./OrderResume";

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