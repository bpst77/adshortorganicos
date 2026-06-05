const handleCadCat = (event, alterar, setAlterar, categories, setCategories) => {
    event.preventDefault();

    const id = parseInt(event.target.id.value);
    const category = event.target.category.value;

    if ((id && category) !== null) {
        if (alterar === 0) {
            //logica cadastro
            if (categories.some(p => p.id === id)) {
                alert("Id já existe. Por favor, escolha outro.");
                return;
            } else{
                const novaLista = categories.filter(p => p.id !== id);
                novaLista.push({ "id": id, "description": category });
                setCategories(novaLista);
                setAlterar(null);
            }
            
        } else {
            const novaLista = categories.filter(p => p.id !== alterar);
                novaLista.push({ "id": id, "description": category });
                setCategories(novaLista);
                setAlterar(null);
        }
    }
}

const handleCadClient = (event, alterar, setAlterar, clients, setClients) => {
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

const handleCadProd = (event, alterar, setAlterar, produtosOg, setProdutosOg, categories) => {
    event.preventDefault();

    const id = parseInt(event.target.id.value);
    const nome = event.target.name.value;
    const categoria = categories.find(c => c.id === parseInt(event.target.category.value));
    const preco = parseFloat(event.target.price.value);

    console.log(categoria);

    if ((id && nome && preco) !== null) {
        if (alterar === 0) {
            //logica cadastro
            if (produtosOg.some(p => p.id === id)) {
                alert("Id já existe. Por favor, escolha outro.");
                return;
            } else{
                const novaLista = produtosOg.filter(p => p.id !== id);
                novaLista.push({ "id": id, "name": nome, "price": preco, "category": categoria, "imagePath": "placeholder.png" });
                setProdutosOg(novaLista);
                setAlterar(null);
            }
            
        } else {
            const novaLista = produtosOg.filter(p => p.id !== alterar);
                novaLista.push({ "id": alterar, "name": nome, "price": preco, "category": categoria, "imagePath": "placeholder.png" });
                setProdutosOg(novaLista);
                setAlterar(null);
        }
    }
}

export { handleCadCat, handleCadClient, handleCadProd};