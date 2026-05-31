import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const remover = (id, produtosOg) => {
    return produtosOg.filter((produto) => produto.id !== id);
};

const TabelaClientes = ({ clientsOg = [], setClientsOg, alterar, setAlterar }) => {
    const [clients, setClients] = useState(clientsOg);
    const navigate = useNavigate();
    
    useEffect(() => {
        setClients(clientsOg);
    }, [clientsOg]);

    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <div>
            <button className="banner-text text-3xl text-lilita" >NOSSOS CLIENTES</button>
        </div>

        {clients.length === 0 && <h3>Não há clientes cadastrados</h3>}

        {clients && clients.length > 0 && (
        <div className="w-[90%] overflow-y-scroll">
            <table className="w-full border-collapse">
                <thead className="">
                    <tr className="bg-spot rounded-t-xl flex h-20 px-8">
                        <th className="w-[10%] px-4 justify-table sticky top-0 z-50">Id</th>
                        <th className="w-[20%] px-4 justify-table sticky top-0 z-50">Nome</th>
                        <th className="w-[25%] px-4 justify-table sticky top-0 z-50">E-mail</th>
                        <th className="w-[20%] px-4 justify-table sticky top-0 z-50">CPF</th>
                        <th className="w-[30%] px-16 justify-table justify-end sticky top-0 z-50">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                    <tr key={client.id} className="flex h-24 border-b-2 px-8 bg-[#f0efe5]">
                        <td className="text-black w-[12%] px-4 justify-table ">{client.id}</td>
                        <td className="text-black w-[28%] px-4 justify-table">{client.name}</td>
                        <td className="text-black w-[30%] px-4 justify-table">{client.email}</td>
                        <td className="text-black w-[30%] px-4 justify-table">{client.cpf}</td>
                        <td className="text-black w-[30%] px-4 justify-table justify-end gap-2">
                            <button className="text-white bg-accent text-sm px-4 py-2 rounded-xl" onClick={() => setAlterar(client.id)}>Editar</button>
                            <button className="text-white bg-gray-800 text-sm px-4 py-2 rounded-xl" onClick={() => setClientsOg(remover(client.id, clientsOg))}>Excluir</button>
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

export default TabelaClientes;