import Tabela from './cadastro/Tabela';
import Cadastrar from './cadastro/Cadastrar';
import { useState } from 'react';

const Cadastro = ({ produtosOg, setProdutosOg }) => {
    const [aAlterar, setAlterar] = useState(null);

    return (
        <section>
            <div className="cadastro-container">
            {
                aAlterar == null ? (
                    <Tabela produtosOg={produtosOg} setProdutosOg={setProdutosOg} alterar={aAlterar} setAlterar={setAlterar} />
                ) : (
                    <Cadastrar produtosOg={produtosOg} setProdutosOg={setProdutosOg} alterar={aAlterar} setAlterar={setAlterar} />
                )
            }
            </div>
        </section>
    );
}

export default Cadastro;