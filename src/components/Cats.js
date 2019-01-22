import React, { Component } from "react";
import { Lightbox } from "./Lightbox";
import { Gallery } from "./Gallery";

export class Cats extends Component {
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.state = {
      catId: undefined,
      isOpen: false,
    };
  }

  handleImageClick(catId) {
    this.setState({ 
        catId,
        isOpen: true,
    });
  }

  handleCloseClick() {
      this.setSatate({isOpen: false});
  }

  closeLightbox() {
    this.setState({
      catId: undefined,
      isOpen: false,
    });
  }

  render() {
    let gallery = <Gallery onSelectImage={(catId) => this.handleImageClick(catId)}/>
    let lightbox;
    if(this.state.isOpen) {
      lightbox = <Lightbox catId={this.state.catId} closeLightbox={this.closeLightbox}/>
    }
    return(
      <div>
        {gallery}
        {lightbox}
      </div>
    )
    
  }
}
