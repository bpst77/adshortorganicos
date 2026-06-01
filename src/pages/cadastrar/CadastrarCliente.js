import { useEffect } from "react";

const handleCadastro = (event, alterar, setAlterar, clients, setClients) => {
    event.preventDefault();

    const id = parseInt(event.target.id.value);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const cpf = event.target.cpf.value;

    if ((id && name && email && cpf) !== null) {
        if (alterar === 0) {
            //logica cadastro
            if (clients.some(p => p.id === id)) {
                alert("Id já existe. Por favor, escolha outro.");
                return;
            } else{
                const novaLista = clients.filter(p => p.id !== id);
                novaLista.push({ "id": id, "name": name, "email": email, "cpf": cpf });
                setClients(novaLista);
                setAlterar(null);
            }
            
        } else {
            const novaLista = clients.filter(p => p.id !== alterar);
                novaLista.push({ "id": alterar, "name": name, "email": email, "cpf": cpf });
                setClients(novaLista);
                setAlterar(null);
        }
    }
}

const preencher = (alterar, clients) => {
    if (alterar !== 0) {
        const client = clients.find(p => p.id === alterar);

        if (client) {
            const id = document.getElementById("cadastro").id
            id.value = client.id;
            id.disabled = true;

            document.getElementById("cadastro").name.value = client.name;
            document.getElementById("cadastro").email.value = client.email;
            document.getElementById("cadastro").cpf.value = client.cpf;
        }
    }
}

const CadastrarCliente = ({ clients, setClients, alterar, setAlterar}) => {
    return (
    <div className="bg-highlight flex flex-col gap-8 items-center w-full h-full rounded-xl p-12">
        <h2 className="text-banner text-3xl">Nossos Clientes</h2>

        <form 
            id="cadastro" 
            onSubmit={(event) => {handleCadastro(event, alterar, setAlterar, clients, setClients)}}
            className="flex flex-col items-center w-full gap-8"
        >
            <span className="flex flex-col items-center gap-2">
                <label htmlFor="id">Id</label>
                <input 
                    className="w-96 rounded-md px-4 py-2 disabled:bg-[#3b3b3b]"
                    type="text" 
                    name="id" 
                    placeholder="id" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="nome">Nome</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="text" 
                    name="name" 
                    placeholder="Nome do cliente" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="preco">E-mail</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="email"
                    name="email"
                    placeholder="E-mail" 
                    required 
                />
            </span>

            <span className="flex flex-col items-center gap-2">
                <label htmlFor="preco">CPF</label>
                <input 
                    className="w-96 rounded-md px-4 py-2"
                    type="text"
                    name="cpf"
                    placeholder="CPF" 
                    required 
                />
            </span>

            <div className="flex gap-4">
                <button type="submit" className="w-32 h-12 bg-spot rounded-md" onClick={() => setAlterar(null)}>Voltar</button>
                <button type="submit" className="w-32 h-12 bg-header rounded-md">Cadastrar</button>
            </div>

        </form>

        {useEffect(() => {
            preencher(alterar, clients);
        }, [alterar, clients])}
    </div>
    );
}

export default CadastrarCliente;