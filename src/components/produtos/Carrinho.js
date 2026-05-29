const removerCarrinho = (id, lista) => {
    const novaLista = lista.filter((item) => item.id !== id);
    return novaLista;
}

const atualizarQtd = (id, novaQtd, lista) => {
    const novaLista = lista.map((item) => {
        if (item.id === id) {
            return { ...item, qtd: novaQtd };
        }
        return item;
    });
    return novaLista;
}

const finalizarCarrinho = (lista, buscarProduto, produtos) => {
    let msg = "Compra finalizada com os seguintes itens:\n";
    let valorTotal = 0;
        lista.forEach((item) => {
        const produto = buscarProduto(item.id, produtos);
        const prod = { ...item, ...produto };

        msg += `- ${prod.nome} (Quantidade: ${prod.qtd})\n`;
        valorTotal += prod.preco * prod.qtd;
        });

        msg += "\nTotal: R$" + valorTotal.toFixed(2);
        // Após finalizar, você pode limpar o carrinho
        alert(msg);

        return [];
}

const Carrinho = ( {lista, produtos, imgdir, buscarProduto, setLista} ) => {

    return (
        <div className="carrinho">
            <div className="itens">
                {lista.length > 0 ? (
                    lista.map((produto) => {
                        const prod = buscarProduto(produto.id, produtos);
                        
                        // Se 'prod' não for encontrado, usamos dados temporários para não sumir da tela
                        const item = prod 
                            ? { ...produto, ...prod } 
                            : { ...produto, nome: "Carregando nome...", imagem: "teste.png" };

                        return (
                            <div key={item.id} className="carrinho-item">
                                <img src={imgdir + item.imagem} alt={item.nome || "Produto"} />
                                <div>
                                    <button onClick={() => setLista(removerCarrinho(item.id, lista))}> R</button>
                                    <input id={`qtd${item.id}`} 
                                    type="number" 
                                    defaultValue={item.qtd} 
                                    min="1" 
                                    max="99"
                                    onChange={(e) => {setLista(atualizarQtd(item.id, parseInt(e.target.value), lista)); }}
                                    />
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h4 id="vazio">O carrinho está vazio</h4>
                )}
            </div>

            <div className='ops'>
                {(() => {
                    let valorTotal = 0;
                        
                    if (lista.length > 0) {
                        lista.map((produto) => {
                            const prod = buscarProduto(produto.id, produtos);
                            const item = { ...produto, ...prod };
                            valorTotal += item.preco * item.qtd;

                            return null;
                        });
                    }
                    return (<p id="total">Total: R${valorTotal.toFixed(2)}</p> );
                })()}

                <div className="botoes">
                    <button className="btn-fin" 
                    onClick={() => setLista(finalizarCarrinho(lista, buscarProduto, produtos))}>
                        finalizar compra
                    </button>
                    <button className="btn-rem" onClick={() => setLista([])}>
                        limpar carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carrinho;