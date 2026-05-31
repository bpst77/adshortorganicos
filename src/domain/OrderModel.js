export class Order {
    id;
    client;
    products;
    date;

    constructor(id, client, products, date) {
        this.id = id;
        this.client = client;
        this.products = products;
        this.date = Date(date);
    }

    get orderValue() {
        return parseFloat(this.products.reduce((acc, curr) => {
            console.log(curr)
            return acc + (curr.product.preco * curr.quantity)
        }, 0))
    }
}