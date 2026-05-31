export class Review {
    id;
    stars;
    clientId;
    clientName;
    content;

    constructor(data, clients) {
        this.id = data.id;
        this.stars = data.stars;
        this.clientId = data.clientId;
        this.clientName = clients.find((c) => c.id === data.clientId)?.name ?? "Cliente"
        this.content = data.content;
    }
}