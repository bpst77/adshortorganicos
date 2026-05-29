const trocar = (id, produtosOg) => {
    const elem = document.querySelector(`#${id}`);
    let filtro;

    if (elem.checked) {
        //desmarcar outros
        if (id === 'frut') {
            document.querySelector(`#leg`).checked = false;
            document.querySelector(`#verd`).checked = false;
            document.querySelector(`#pesq`).value = "";
            filtro = "fruta";
        } else if (id === 'verd') {
            document.querySelector(`#frut`).checked = false;
            document.querySelector(`#leg`).checked = false;
            document.querySelector(`#pesq`).value = "";
            filtro = "verdura";
        } else if (id === 'leg') {
            document.querySelector(`#frut`).checked = false;
            document.querySelector(`#verd`).checked = false;
            document.querySelector(`#pesq`).value = "";
            filtro = "legume";
        }
    } else if (id === 'pesq') {
        const valor = elem.value;

        if (!valor.trim()) return produtosOg;

        document.querySelector(`#frut`).checked = false;
        document.querySelector(`#verd`).checked = false;
        document.querySelector(`#leg`).checked = false;

        filtro = elem.value.trim().toLowerCase();
    } else {
        return produtosOg;
    }

    //alterar o catalogo
    let produtosFiltrados;

    if (id === 'pesq' && elem.value !== "") {
        produtosFiltrados = produtosOg.filter(prod => prod.nome.toLowerCase().includes(filtro));
    } else produtosFiltrados = produtosOg.filter(prod => prod.categ.includes(filtro));
    
    return produtosFiltrados;
}

const Filtro = ({ produtos, setProdutos, produtosOg }) => {
    return (
        <div className="filtro-flex">
            <div>
                <div className="filtro-item">
                    <label for="frut">Frutas</label>
                        <input type="checkbox" id="frut" onChange={(e) => setProdutos(trocar(e.target.id, produtosOg))}/>
                </div>

                <div className="filtro-item">
                    <label for="verd">Verduras</label>
                        <input type="checkbox" id="verd" onChange={(e) => setProdutos(trocar(e.target.id, produtosOg))}/>
                </div>

                <div className="filtro-item">
                    <label for="leg">Legumes</label>
                        <input type="checkbox" id="leg" onChange={(e) => setProdutos(trocar(e.target.id, produtosOg))}/>
                </div>
            </div>

            <div className="filtro-item">
                <input type="text" id="pesq" placeholder="Pesquise aqui" onChange={(e) => setProdutos(trocar(e.target.id, produtosOg))}/>
            </div>
        </div>
    )
}

export default Filtro;