const adicionarCarrinho = (id, lista) => {
      const novaLista = [...lista];
      const itemExistente = novaLista.find(item => String(item.id) === String(id));

      if (itemExistente) {
          // 2. Se achou, apenas aumenta a quantidade dele
          itemExistente.qtd += 1;
          let itemqtd = document.querySelector(`#qtd${itemExistente.id}`);
          if (itemqtd) itemqtd.value = itemExistente.qtd;
      } else {
          // 3. Se não achou, cria um novo objeto e adiciona na lista
          const novoItem = {
              id: id,
              qtd: 1
          };
          novaLista.push(novoItem);
      }

      return novaLista;
  };

const Produto = ({ produto, imgdir, adicionar, lista, setLista }) => {
  return (
    <div className="prod">
        <img src={imgdir + produto.imagem} alt={produto.nome}/>
        <div>
          {(() => {
            if (produto.nome.length > 35) {
              produto.nome = produto.nome.substring(0, 35) + '...';
            }
            return <p className="prod-nome">{produto.nome.toUpperCase()}</p>;
          })()}
          <p className="prod-preco"><b>R$ {produto.preco}</b></p>
        </div>
        <button onClick={() => setLista(adicionarCarrinho(produto.id, lista))}>COMPRAR</button>
    </div>
  );
}

export default Produto;