import React, { Component } from "react";
import Cadastro from "../../components/Cadastro";
import "./../../App.css"

const api = "api/prods.json";

class ProductsPage extends Component {
    state = {
        produtosOg: []
    };

    async componentDidMount() {
        try{
            const response = await fetch(api);
            this.setState({ produtosOg: await response.json() });

            this.setState({ produtos: this.state.produtosOg });
        } catch (e) {
            console.error("Erro ao carregar produtos:", e);
        }
    }

    atualizarProdutos = (newProdutos) => {
        this.setState({ produtosOg: newProdutos });
    }

    render() {
        return (
            <div className="App">
                <Cadastro produtosOg={this.state.produtosOg} setProdutosOg={this.atualizarProdutos} />
            </div>
        );
    }
};

export default ProductsPage;
