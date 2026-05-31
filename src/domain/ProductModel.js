export class Product {
    id;
    name;
    category;
    imagePath;
    price;

    constructor(id, name, category, imagePath, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.imagePath = imagePath;
        this.price = price;
    }
}