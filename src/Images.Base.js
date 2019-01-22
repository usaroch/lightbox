import { Component }from 'react';

export class ImagesBase extends Component{
    constructor() {
        super();
        this.baseUrl = 'http://localhost:3001';
        this.catDeatilsUrl = `${this.baseUrl}/cat`;
        this.baseThumbnailUrl = `${this.baseUrl}/thumbnail`;
        this.basePictureUrl = `${this.baseUrl}/picture`;
    }

    async getCatsList() {
        const response = await fetch(`${this.baseUrl}/list`);
        return response.json();
    }

    async getcatDetails(id) {
        const response = await fetch(`${this.catDeatilsUrl}/${id}`);
        return response.json();
    }
}