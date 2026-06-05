const preencherCat = (alterar, categories) => {
    if (alterar !== 0) {
        const category = categories.find(p => p.id === alterar);

        if (category) {
            const id = document.getElementById("cadastro").id
            id.value = category.id;
            id.disabled = true;

            document.getElementById("cadastro").category.value = category.description;
        }
    }
}

const preencherClient = (alterar, clients) => {
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

const preencherProd = (alterar, produtos) => {
    if (alterar !== 0) {
        const produto = produtos.find(p => p.id === alterar);

        if (produto) {
            const id = document.getElementById("cadastro").id
            id.value = produto.id;
            id.disabled = true;

            document.getElementById("cadastro").name.value = produto.name;
            document.getElementById("cadastro").price.value = produto.price;
            document.getElementById("cadastro").category.value = produto.category.id;
        }
    }
}

export { preencherCat, preencherClient, preencherProd };