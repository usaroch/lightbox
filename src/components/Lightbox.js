import React from "react";
import CrossfadeImage from 'react-crossfade-image'

import { ImagesBase } from "../Images.Base";

export class Lightbox extends ImagesBase{
    constructor(props) {
        super(props);
        this.state = {
            cat: {
                id: props.catId,
                title: '',
            },
            imageMaxHeight: `${window.innerHeight - 100}px`,
        };
        this.loadCatDetails(this.state.cat.id);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        
    }
    
    async loadCatDetails(id){
        const cat = await this.getcatDetails(id);
        this.setState({cat});
    }

    handleNextClick() {
        this.loadCatDetails(this.state.cat.next);
        this.setState({cat: {id: this.state.cat.next}});
    }

    handlePreviousClick() {
        this.loadCatDetails(this.state.cat.prev);
        this.setState({cat: {id: this.state.cat.prev}});
    }

    render() {
        let nextButton;
        let prevButton;
        if(this.state.cat.next){
            nextButton= <button
                            className="nextButton"
                            onClick={this.handleNextClick}
                        ><i className="fas fa-chevron-right"></i></button>
        }
        
        if(this.state.cat.prev){
            prevButton= <button
                            className="prevButton"
                            onClick={this.handlePreviousClick}
                        ><i className="fas fa-chevron-left"></i></button>
        }
        return (
            <div className="lightbox">
            {this.state.cat.prev}
            {this.state.cat.id}
            {this.state.cat.next}
            
                <figure>
                    <CrossfadeImage 
                        style = {{maxHeight: this.state.imageMaxHeight}}
                        src={`${this.basePictureUrl}/${this.state.cat.id}`} 
                        alt={this.state.cat.title} />
                    <figcaption>{this.state.cat.title}</figcaption>
                </figure>

                {prevButton}
                {nextButton}

                <button 
                    className="closeButton"
                    onClick={this.props.closeLightbox}
                ><i className="fas fa-times"></i></button>
            </div>
        )
    }
}