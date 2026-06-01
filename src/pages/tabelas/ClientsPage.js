import React, { useEffect, useState } from "react";
import {TabelaClientes} from "../../components/Tabela";
import CadastrarCliente from "../cadastrar/CadastrarCliente";

const api = "api/clients.json";

export default function ClientsPage() {
    const [aAlterar, setAlterar] = useState(null);
    const [clientsOg, setClientsOg] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            try{
                const response = await fetch(api);
                setClientsOg(await response.json() );
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
                    <TabelaClientes clientsOg={clientsOg} setClientsOg={setClientsOg} alterar={aAlterar} setAlterar={setAlterar} />
                ) : (
                    <CadastrarCliente clients={clientsOg} setClients={setClientsOg} alterar={aAlterar} setAlterar={setAlterar} />
                )
            }
            </div>
        </div>
    );
};