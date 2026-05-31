import Tabela from './cadastro/Tabela';
import Cadastrar from './cadastro/Cadastrar';
import { useState } from 'react';

const Cadastro = ({ produtosOg, setProdutosOg }) => {
    const [aAlterar, setAlterar] = useState(null);

    return (
        <div className="w-[60vw] h-full flex flex-col items-center py-12">
        {
            aAlterar == null ? (
                <Tabela produtosOg={produtosOg} setProdutosOg={setProdutosOg} alterar={aAlterar} setAlterar={setAlterar} />
            ) : (
                <Cadastrar produtosOg={produtosOg} setProdutosOg={setProdutosOg} alterar={aAlterar} setAlterar={setAlterar} />
            )
        }
        </div>
    );
}

export default Cadastro;