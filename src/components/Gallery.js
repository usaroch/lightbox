import React from 'react';
import { ImagesBase } from '../Images.Base';

export class Gallery extends ImagesBase {

    constructor(props) {
        super(props);

        this.state={
            catsList: []
        };
    }

    async loadCatsList(){
        const catsList = await this.getCatsList();
        this.setState({catsList});
    }

    render(){
        this.loadCatsList();
        return(
            <div className="container gallery">
                <h1>Lightbox</h1>
                <div className="row">
                    {
                        this.state.catsList.map( cat =>
                            <figure 
                                key={cat.id} 
                                onClick={() => this.props.onSelectImage(cat.id)}
                                className="col thumbnail"
                            >
                                
                                <img alt={cat.title} src={`${this.baseThumbnailUrl}/${cat.id}`} />
                                <figcaption>{cat.title}</figcaption>
                            </figure>
                        )
                    }
                </div>
            </div>
        );
    }
}