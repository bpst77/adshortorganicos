import Filtro from './produtos/Filtro';
import Carrinho from './produtos/Carrinho';
import Produto from './produtos/Produto';
import { useEffect, useState } from 'react';

const buscarProduto = (id, produtos) => {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === id) {
            return produtos[i];
        }
    }
    return null;
};

const Produtos = ({ trocar, imgdir, produtosOg }) => {
  const [produtos, setProdutos] = useState(produtosOg);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setProdutos(produtosOg);
  }, [produtosOg]);

  return (
    <section>
      <div className='produtos-container'>
        <Filtro produtos={produtos} 
        setProdutos={setProdutos} 
        produtosOg={produtosOg} />

        <hr></hr>

        <div className='produtos-flex'>
          {produtos.map((produto) => (
            <Produto key={produto.id} 
            produto={produto} 
            imgdir={imgdir} 
            lista={lista} 
            setLista={setLista} />
          ))}
        </div>

        <Carrinho lista={lista} 
        produtos={produtosOg} 
        imgdir={imgdir} 
        buscarProduto={buscarProduto} 
        setLista={setLista} />
      </div>
    </section>
  );
}

export default Produtos;