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
}